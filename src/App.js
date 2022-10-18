import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button prop='batch 32' study='web development'/>
        <Button prop='batch 33' study="data science"/>
        <Button prop='batch 34' study="data science"/>
      </header>
    </div>
  );
}

export default App;
