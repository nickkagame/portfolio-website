import logo from './logo.svg';
import './App.css';
import { Header} from './component/Header';
import {Navbar} from './component/Navbar'
import {Sidebar} from './component/Sidebar'

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <Sidebar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
      </header>
    </div>
  );
}

export default App;
