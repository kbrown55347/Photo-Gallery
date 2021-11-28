import { useState } from 'react';
import Button from '@mui/material/Button';


function GalleryItem({gallery, addLikes}) {

    // create useState for image
    const [showImage, setShowImage] = useState(gallery.path);

    // create function to either show image or show description based on state
    const displayImageOrDescription = () => {
        if (showImage === gallery.path) {
            return <img className="photo" 
                    src={gallery.path} onClick={toggleImage}/>
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

    // create function to grab photo id
    const handleClick = (event) => {
        addLikes(event.target.id);
        // console.log('You clicked me', event.target);
    } // end handleClick

    return (
        <div key={gallery.id} className="images-descriptions">
            {displayImageOrDescription()}
            <div>
                <Button className='button' id={gallery.id}
                variant="contained"
                color="success"
                onClick= {handleClick}>🤍</Button>
            </div>
                <p className="likes">{gallery.likes} people love this photo!</p>
        </div>
    );
};

export default GalleryItem;