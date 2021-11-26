import { useState } from 'react';


function GalleryItem({ gallery }) {

    // create useState for image
    const [showImage, setShowImage] = useState(gallery.path);
    // create useState for click count
    const [clickCount, setClickCount] = useState(0);

    // create function to update total clicks
    const updateClickTotal = () => {
        setClickCount(clickCount + 1);
    };

    // create function to either show image or show description based on state
    const displayImageOrDescription = () => {
        if (showImage === gallery.path) {
            return <img className="photo" key={gallery.id} 
                    src={gallery.path} onClick={toggleImage}/>
        } else {
            return <p className="photo"
                    onClick={toggleImage}>
                    {gallery.description}</p>
        };
    };

    // create function to toggle between image and description
    const toggleImage = () => {
        if (showImage === gallery.path) {
            setShowImage(gallery.description)
        } else {
            setShowImage(gallery.path);
        };
    };


    return (
        <div className="images-descriptions">
            {displayImageOrDescription()}
            <div>
            <button onClick={updateClickTotal}>💟</button>
            </div>
            <p>{clickCount} people love this photo!</p>
        </div>
    );
};

export default GalleryItem;