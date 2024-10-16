import logo from './logo.svg';
import './App.css';
import Componets from './Componets';
import ComponetsMulti from './ComponetsMulti';
import PracticeOnePropse from './PracticeOnePropse';
import PracticeOneState from './PracticeOneState';
import PracticeMultiState from './PracticeMultiState';

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
          Learn React
        </a>
      </header>
      <Componets />
      <ComponetsMulti />
      <ComponetsMulti />
      <ComponetsMulti />
      <ComponetsMulti />
      <PracticeOnePropse name="sagar" age="22" sex="male" qualification="Master of computer Application" />
      <PracticeOneState />
      <PracticeMultiState />
    </div>
  );
}

export default App;
