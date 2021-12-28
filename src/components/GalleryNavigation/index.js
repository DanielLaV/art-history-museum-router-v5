import { NavLink, Route } from "react-router-dom";
import GalleryView from "../GalleryView";
import './GalleryNavigation.css';


function GalleryNavigation({ galleries }) {
    console.log(galleries);
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to='/'>Home</NavLink>
            {galleries.map(gallery => (
                <span key={gallery.id} style={{ paddingRight: '10px' }}>
                    <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </span>
            ))}

            <Route path={`/galleries/:id`}>
                <GalleryView galleries={galleries} />
            </Route>
        </nav>
    )
}

export default GalleryNavigation;
