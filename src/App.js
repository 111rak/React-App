import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
//   // Link
// } from "react-router-dom";



function App() {
 const [mode, setMode] = useState('light')
 const [alert, setalert] = useState(null)
// setAlert is use to set the null value
const showAlert = (message,type) =>{
 setalert({
  msg:message,
  type:type
 })

 setTimeout(() => {
  setalert(null)
 },1500)
// these twos are object that pass the value.
// showAlert will run and take this two objects
}
  
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert ("Dark Mode is Enabled", "success");
    document.title = 'TextUtils - Dark Mode';

    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing Mode';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'TextUtils Download now';
    // },1500);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is Enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
 
  return (
    <>
     {/* <Router> */}
  {/* <Navbar title="TextUtils" About="About" mode={mode} toggle={toggle} /> */}
  <Navbar title="TextUtils"  mode={mode} toggle={toggle} />
  <Alert alert={alert} />
  {/* <div className="container my-3"> */}
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} /> */}
      <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
    {/* </Routes> */}
  {/* </div> */}
{/* </Router> */}

      
         
         
 </>
  );
}         
           
         
       
       

    

export default App;

  //     {/* above alert defined the value of aobe alert start. it holds that alert value */}

  
  // {/* <About /> */}
  

