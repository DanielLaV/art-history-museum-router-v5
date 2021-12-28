import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
    const { id } = useParams();

    const gallery = galleries.find(gallery => gallery.id === +id);

    return (
        <>
            <h1>Hello from Gallery View</h1>
            <h2>{gallery.name}</h2>
        </>
    )
}

export default GalleryView;
