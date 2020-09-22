import React,{ useState,useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  const [meowInput, setMeowInput] = useState(0);

  const [meowJson, setMeowJson] = useState([]);
  const [warning, setWarning] = useState(0);
  const [test, setTest] = useState(false);
  const [test1, setTest1] = useState(0);
  
  // useEffect(async() => {
  //  await fetch('http://127.0.0.1:8000')
  //   .then(response => response.json())
  //   .then((data)=>{
  //    setMeowJson(data)
  //     console.log(setMeowJson)
  //   });
  // })

  useEffect( () => {
  fetch(
      'http://127.0.0.1:8000',
    ).then(response => response.json()).then((data)=> setMeowJson(data));
    //setMeowJson(result);
  
  },[]);

  //Click Handler 

  function handleClick(e){
 e.preventDefault()
    let dataMain= {
      mew:meowInput
    }
    fetch("http://127.0.0.1:8000",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(dataMain)
    }).then(response => (response.json())).then(result => setTest1(result.response))
    if(setTest1!=0)
    {
     setTest(true) 
    }

      fetch(
          'http://127.0.0.1:8000',
        ).then(response => response.json()).then((data)=> setMeowJson(data));
        //setMeowJson(result);
      
      
    
  }
  return (
    <div>
       <Alert style={{ display: (test ? 'block' : 'none') }} variant="danger">
  <center>{test1}</center>
  </Alert>
    <form>
      <center><h1>Welcome To Mewo😺😺😺</h1>
      <textarea placeholder="Enter the Mewo" className="input-area" name="mew-area" onChange={event => setMeowInput(event.target.value)}></textarea><br></br>
      <Button type='submit' onClick={handleClick}>Submit</Button></center>
    </form>
    <center><div >{meowJson.map(meow => <div className="newContent">{meow.mewContent}<p>{meow.date}</p></div>)}</div></center>
  </div>
  );
}

export default App;
