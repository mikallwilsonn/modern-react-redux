import React from 'react';
import Image from './Image';

const ImageList = ( props ) => {

    const images = props.images.map((image) => {
        return <Image image={image} key={image.id} />
    });

    return <div>{images}</div>;
}

export default ImageList;