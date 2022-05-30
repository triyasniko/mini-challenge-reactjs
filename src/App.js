import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import News from './News';
import News2 from './News2';
import Gallery from './Gallery';
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/news" element={ <News />} />
          <Route path="/news2" element={ <News2 />} />
          <Route path="/gallery" element={ <Gallery />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
