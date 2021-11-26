import { useState } from 'react';


function GalleryItem({ gallery }) {

    // create useState for image
    const [showImage, setShowImage] = useState(gallery.path);


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
            <button>💕</button>
        </div>
    );
};

export default GalleryItem;