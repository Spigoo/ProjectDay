import './Styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenti/Navbar';
import Footer from './componenti/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ChiSono from './pages/ChiSono';
import Contatti from './pages/Contatti';


const App = () => {
return (
  <Router>
  <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path= "/" element={<Home/>}/>
      <Route exact path= "/chi-sono" element={<ChiSono/>}/>
      <Route exact path= "/blog" element={<Blog/>}/>
      <Route exact path= "/contatti" element={<Contatti/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
);
  
}

export default App;
