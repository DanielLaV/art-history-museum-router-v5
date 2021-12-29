import { useParams, Route } from "react-router-dom";
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({ galleries }) => {
    const { id } = useParams();

    const gallery = galleries.find(gallery => gallery.id === +id);

    return (
        <>
            <h1>Hello from Gallery View</h1>
            <h2>{gallery.name}</h2>
            {gallery.objects.map(artPiece => <ArtImageTile art={artPiece} />)}

            <Route exact path='galleries/:id'>
                <ArtImageTile gallery={gallery}/>
            </Route>
        </>
    )
}

export default GalleryView;
