import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* DISPLAY COUNTER  */}
        <Counter />


        {/* <Button prop='batch 32' study='web development'/>
        <Button prop='AAAAAAAAH!' study="NOOOOOOO!"/>
        <Greeting firstName='Vinay' lastName='Rao'/>
        <Greeting firstName='Kingsley' lastName='RawMetal'/> */}
      </header>
    </div>
  );
}

export default App;
