import React,{ useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [meowInput, setMeowInput] = useState(0);
  function handleClick(e){
    e.preventDefault()
    console.log(meowInput)
  }
  return (
    <form>
      <center><h1>Welcome To Mewo😺😺😺</h1>
      <textarea className="input-area" name="mew-area" onChange={event => setMeowInput(event.target.value)}></textarea><br></br>
      <Button type='submit' onClick={handleClick}>Submit</Button></center>
    </form>
  );
}

export default App;
