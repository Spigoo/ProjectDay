import './Styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenti/Navbar';
import Footer from './componenti/Footer';
import Home from './pages/Home';
import Innovazioni from './pages/Innovazioni';
import Progetto from './pages/Progetto';
import Storia from './pages/Storia';

const App = () => {
return (
  <Router>
  <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path= "/" element={<Home/>}/>
      <Route exact path= "/chi-sono" element={<Progetto/>}/>
      <Route exact path= "/innovazioni" element={<Innovazioni/>}/>
      <Route exact path= "/storia" element={<Storia/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
);
  
}

export default App;
