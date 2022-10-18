import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button prop='batch 32' study='web development'/>
        {/* <Button prop='batch 33' study="data science"/>
        <Button prop='batch 34' study="data science"/> */}
        <Button prop='AAAAAAAAH!' study="NOOOOOOO!"/>
        <Greeting firstName='Vinay' lastName='Rao'/>
      </header>
    </div>
  );
}

export default App;
