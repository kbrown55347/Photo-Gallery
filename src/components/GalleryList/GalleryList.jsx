import GalleryItem from '../GalleryItem/GalleryItem.jsx'



function GalleryList({galleryList, addLikes}) {

    return (
        <div>
            {galleryList.map((gallery) => {
                return <GalleryItem gallery={gallery} addLikes={addLikes}/>
            })}
        </div>
    );
};

export default GalleryList;