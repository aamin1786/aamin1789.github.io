import React from "react";
import Photo from "./app/images12.png";

const PhotoContainer = props => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.url} />;
        });
};
    return (
        <>
            <section> {displayPhotos()}</section>
        </>
    );
};


export default PhotoContainer;