
function GalleryItem({gallery}) {
    return <img className="photo" key={gallery.id} src={gallery.path} width="250"
                height="250" />
};

export default GalleryItem;