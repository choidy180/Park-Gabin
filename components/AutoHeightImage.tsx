import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import equal from 'fast-deep-equal';
import { AutoHeightImageWrapper } from '@src/styles/AutoHeightImage.styles';

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => (
    <AutoHeightImageWrapper>
        <Image layout="fill" className="autoImage" {...props} />
    </AutoHeightImageWrapper>
);

export default AutoHeightImage;