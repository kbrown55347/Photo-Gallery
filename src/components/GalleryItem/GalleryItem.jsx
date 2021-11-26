import { useState } from 'react';


function GalleryItem({ gallery }) {

    // create useState for image
    const [showImage, setShowImage] = useState(gallery.path);


    // create function to either show image or show description based on state
    const displayImageOrDescription = () => {
        if (showImage === gallery.path) {
            return <img className="photo" key={gallery.id} 
                    src={gallery.path} onClick={toggleImage}
                    width="250"
                    height="250" />
        } else {
            return <p className="description"
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
        <div>
            {displayImageOrDescription()}
            <button>💕</button>
        </div>
    );
};

export default GalleryItem;