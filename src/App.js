import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';
import Alert from './components/Alert';
import React, { useState } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



//let name="harsh";
function App() {
  
  // creating state in app.js (can be made done in navbar also)
  const [mode, setMode] = useState('light');      // Whether dark mode is enabled or not.

  const [mode1,setMode1] = useState('light'); 

  const [alert,setAlert] = useState(null);        // alert is an object and setAlert is defined using a function below.

  const showAlert = (message, type) => {          // Function to show alert messages. 
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null); 
     },1500);
  }

  const enablebtn = () => {
    if(mode==='dark') {  
      setMode('light');  
      document.body.style.backgroundColor='white';   // setting the bg of the complete page.
      showAlert("Light mode has been enabled","success");
    //  document.title = 'Light Mode Enabled'   --> This is used to change the title of the webpage.
    }
    else {
      document.body.style.backgroundColor='#1f1c4b';
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
    }
  }

  const enablebtn2 = () => {
    if(mode1==='light') {  
      setMode1('#6c757d');  
      document.body.style.backgroundColor='grey';   // setting the bg of the complete page.
      showAlert("Light mode has been enabled","success");
    }
    else {
      document.body.style.backgroundColor='light';
      setMode('light');
      showAlert("Dark mode has been enabled","success");
    }
  }

 
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils Blog" aboutText="About Us" mode={mode} enablebtn={enablebtn} enablebtn2={enablebtn2} />
      <Alert alert={alert} />

      {/* <Routes>    */}
          {/* <Route path = "/about" element= {<About/>} />    */}
          {/* <Route exact path="/"> */}

            <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> 
      {/* </Routes>   */}

    {/* </Router> */}
    </> 
  );

  
// return (
//     <>
//     <Router>
    
//       <Routes>
        
//         <Route path = "/about" element= {<About/>}/> 
//         <Route path = "/" element = {<TextForm masterHead='Enter text to analyze' mode={mode}
//           headMode={headMode} showAlert={showAlert}/>} />
          
//       </Routes>
//     </Router> 
      
//     </>
//   );
}

export default App;
