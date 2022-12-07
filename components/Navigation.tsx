import * as React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isMobileAtom, isThemeAtom } from 'recoil/theme';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ProfileImage from '../assets/image/KakaoTalk_20221207_232311235.jpg';

export const Navigation = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    const [link, setLink] = React.useState<string>('');
    const setMobileAtom = useSetRecoilState(isMobileAtom);
    const isMobile = () => {
        setMobileAtom(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
    const router = useRouter();
    React.useEffect(()=>{
        isMobile();
        setLink(router.asPath);
    },[]);
    return(
        <>
            <Container className={link === ('/announcement') || link === ('/practice') || link === ('/creator') ? 'white' : ''} color={isTheme}>
                <div className='logoHead'>
                    <Image
                        width={'54px'}
                        height={'54px'}
                        src={'/images/elements_3697006.jpg'}
                    />
                    <h1>{"Gabin's Pages"}</h1>
                </div>
                <ProfileBox color={isTheme}>
                    <div>
                        <div className='back'/>
                        <div className='profileImage'>
                            <div>
                                <Image
                                    layout='fill'
                                    objectFit='cover'
                                    src={ProfileImage}
                                    alt={'profile-image'}
                                />
                            </div>
                        </div>
                        <h4><b>Gabin Park</b><br/>Product Designer</h4>
                    </div>
                </ProfileBox>
                <MenuBox color={isTheme}>
                    <div className='box'>
                        <div className='home'>
                            <div className='back'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <p>Home</p>
                            <div className='underline'/>
                        </div>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        <p>Introduction</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        <p>my career</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <p>Performance</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                        <p>Award details</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <p>my projects</p>
                        <div className='underline'/>
                    </div>
                </MenuBox>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    width: 280px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    z-index: 999999;
    color: #141414;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
    &.white{
        color: #FFFFFF;
    }
    @media (max-width: 1280px) {
        display: none;
    }
    .logoHead{
        width: 100%;
        padding: 30px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        h1 {
            font-size: 26px;
            color: #34495e;
            font-family: 'NanumBarunGothic';
        }
    }
`

const ProfileBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    div{
        width: 100%;
        height: 80px;
        border-radius: 8.5px;
        padding: 0 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        div.back{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all .15s ease-in-out;
            background-color: #2c3e50;
            opacity: 0.1;
        }
        .profileImage{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 54px;
            height: 54px;
            border-radius: 50%;
            padding: 0;
            overflow: hidden;
            background-color: #ffffff;
            div{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            img{
                border-radius: 50%;
            }
        }
        h4{
            font-size: 14px;
            line-height: 18px;
            b{
                font-size: 16.5px;
                line-height: 20px;
            }
        }
    }
`

const MenuBox = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    .box{
        width: 100%;
        height: auto;
        padding: 0;
        max-height: 44px;
        display: block;
        overflow: hidden;
        transition: max-height 0.75s ease-in-out;
    }
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 44px;
        gap: 8px;
        padding: 12px 8px;
        border-radius: 8px;
        transition: all .25s ease-in-out;
        overflow: hidden;
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
        }
        #moreBtn{
            position: absolute;
            color: #000000;
            right: 8px;
            animation: none !important;
            width: 20px;
            height: 20px;
            transition: all .25s ease-in-out;
        }
        .underline{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1.8px;
            padding: 0;
            background-color: ${props=>props.color};
            transition: all .5s ease-in-out;
            transform: translateX(-110%);
        }
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
        }
        p{
            margin-top: 2px;
            font-size: 16px;
            font-family: 'NanumBarunGothic';
            font-weight: 400;
            text-transform: uppercase;
        }
        &:hover{
            .back{
                background-color: ${props=>props.color};
            }
            .underline{
                transform: translateX(110%);
            }
            color: #000000;
            svg{
                animation: shakeIcon 1s linear infinite;
            }
        }
        @keyframes shakeIcon {
            0%{
                transform: rotate(-20deg);
            }
            12%{
                transform: rotate(0deg);
            }
            25%{
                transform: rotate(10deg);
            }
            38%{
                transform: rotate(0deg);
            }
            50%{
                transform: rotate(-10deg);
            }
            62%{
                transform: rotate(0deg);
            }
            70%{
                transform: rotate(20deg);
            }
            85%{
                transform: rotate(-10deg);
            }
            95%{
                transform: rotate(10deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }
    }
    .moreBox{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`