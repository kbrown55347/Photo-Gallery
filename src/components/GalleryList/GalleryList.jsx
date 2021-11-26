import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({galleryList}) {
    return (
        <div>
            {galleryList.map((gallery) => {
                return <GalleryItem gallery={gallery} />
            })}
        </div>
    );
};

export default GalleryList;