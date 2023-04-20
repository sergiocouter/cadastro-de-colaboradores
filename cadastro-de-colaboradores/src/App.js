import logo from './logo.svg';
import './App.css';
import Banner from './componenetes/banner/banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!!
        </a>
      </header>
    </div>
  );
}

export default App;
