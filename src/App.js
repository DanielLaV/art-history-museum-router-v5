import './App.css';
import { Route, Switch } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import harvardArt from './data/harvardArt';
import Home from './components/Home';

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/galleries/:id'>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
