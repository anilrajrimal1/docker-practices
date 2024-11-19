import logo from './avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank You for Visiting!!
        </p>
        <a
          className="App-link"
          href="https://anilrajrimal.com.np"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
