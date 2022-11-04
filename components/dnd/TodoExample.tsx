import * as React from 'react'
import { TItems, TItemStatus } from './todo'
import registDND from './TodoExample.drag';

export default function TodoExample({
    items,
    setItems,
}: {
    items: TItems;
    setItems: React.Dispatch<React.SetStateAction<TItems>>;
}){
    React.useEffect(()=> {
        const clear = registDND(({ source, destination }) => {
            if (!destination) return;

            const sourceKey = source.droppableId as TItemStatus;
            const destinationKey = destination.droppableId as TItemStatus;

            setItems((items) => {
                const _items = JSON.parse(JSON.stringify(items)) as typeof items;
                const [targetItem] = _items[sourceKey].splice(source.index, 1);
                _items[destinationKey].splice(destination.index, 0, targetItem);
                return _items;
            });
        });
        return () => clear();
    }, [setItems]);

    return (
        <div className='p-4 bg-black'>
            <div className='bg-gray-800 p-4'>
                <h1 className='text-3xl font-bold text-white'>Drag and Drop</h1>
                <span className='text-gray-200'>React with VanillaTS (might have a little bug...)</span>
            </div>

            <div className='mt-4 flex'>
                <div className='todo grid flex-1 select-none grid-cols-2 gap-4 rounded-lg bg-slate-500 p-4'>
                    {Object.keys(items).map((key) => (
                        <div
                            key={key}
                            data-droppable-id={key}
                            className='flex flex-col gap-3 rounded-xl bg-gray-200 p-4 ring-1 ring-gray-300 transition-shadow dark:bg-[#000000]'
                        >
                            <span className='text-xl font-semibold text-white'>{key.toLocaleUpperCase()}</span>
                            {items[key as TItemStatus].map((item, index) => (
                                <div
                                    key={item.id}
                                    data-index={index}
                                    className='dnd-item rounded-lg bg-white p-4 transition-shadow dark:bg-slate-800 w-60'
                                >
                                    <h5 className='font-semibold text-white'>{item.title}</h5>
                                    <span className='text-sm text-gray-300'>Make the world beautiful</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}