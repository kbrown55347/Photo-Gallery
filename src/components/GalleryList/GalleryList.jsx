function GalleryList({galleryList}) {
    return (
        <div>
            {galleryList.map(gallery => (
                <img key={gallery.id} src={gallery.path}/>
            ))}
        </div>
    );
};

export default GalleryList;