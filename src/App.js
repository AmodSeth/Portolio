import './App.css';
import {BrowserRouter as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home/Home';
import AboutMe from './Pages/Aboutme/Aboutme';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        
        
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
