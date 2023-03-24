import logo from './logo.svg';
import './app.scss';
import { Header} from './components/Header';
import {Navbar} from './components/Navbar'
import {Sidebar} from './components/Sidebar'
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About/About';
import {Projects} from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
    <header className="App-header">
    {/* <Navbar/> */}
    <Sidebar/>
    <Routes>
    <Route path = "/" element={<Header/>}></Route>
    <Route path = "/about-me" element={<About/>}></Route>
    <Route path = "/my-work" element={<Projects/>}></Route>
    </Routes>
      </header>
      
    </div>
  );
}

export default App;
