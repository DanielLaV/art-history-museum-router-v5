import { Link, useParams } from "react-router-dom";

const ArtImageTile = ({ art }) => {
    return (
        <Link to=''>
            <img src={art.images[0].baseimageurl}></img>
        </Link>
    )
}

export default ArtImageTile;
