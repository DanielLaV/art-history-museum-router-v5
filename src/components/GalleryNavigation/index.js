import { NavLink, Route } from "react-router-dom";
import GalleryView from "../GalleryView";
import './GalleryNavigation.css';


function GalleryNavigation({ galleries }) {
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to='/'>Home</NavLink>
            {galleries.map(gallery => (
                <span key={gallery.id} style={{ paddingRight: '10px' }}>
                    <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </span>
            ))}


        </nav>
    )
}

export default GalleryNavigation;
