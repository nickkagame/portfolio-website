import logo from './logo.svg';
import './app.scss';
import { Header} from './component/Header';
import {Navbar} from './component/Navbar'
import {Sidebar} from './component/Sidebar'
import { Routes, Route } from 'react-router-dom';
import { About } from './component/About/About';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    {/* <Navbar/> */}
    <Sidebar/>
    <Routes>
    <Route path = "/" element={<Header/>}></Route>
    <Route path = "/about-me" element={<About/>}></Route>
    </Routes>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Header/> */}
     
      </header>
      
    </div>
  );
}

export default App;
