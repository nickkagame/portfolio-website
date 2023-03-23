import logo from './logo.svg';
import './app.scss';
import { Header} from './component/Header';
import {Navbar} from './component/Navbar'
import {Sidebar} from './component/Sidebar'
import { Routes, Route } from 'react-router-dom';
import { About } from './component/About/About';
import {Projects} from "./component/Projects/Projects"

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
