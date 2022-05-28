import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import News from './News';
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/news" element={ <News />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
