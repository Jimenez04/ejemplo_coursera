import logo from './logo.svg';
import './App.css';
import Mouse from './mouse/Mouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mouse></Mouse>
        </a>
      </header>
    </div>
  );
}

export default App;
