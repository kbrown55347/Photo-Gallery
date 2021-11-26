import { useState } from 'react';


function GalleryItem({gallery}) {

    // create useState for image
    const [showImage, setShowImage] = useState(gallery.path);

    // create function to either show image or show description based on state
    const displayImageOrDescription = () => {
        if (showImage === gallery.path) {
            return <img className="photo" 
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

    // const handleClick = (event) => {
    //     console.log(event.target.id);
    //     const photo = event.target;
    //     addLikes(event);
    // };


    return (
        <div key={gallery.id} className="images-descriptions">
            {displayImageOrDescription()}
            <div>
            <button id={gallery.id}>💟</button>
            </div>
            <p>{gallery.likes} people love this photo!</p>
        </div>
    );
};

export default GalleryItem;