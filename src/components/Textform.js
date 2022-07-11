import React, { useState }from 'react';


export default function (props) {


  const [text, setText] = useState(''); // 'Enter text here' is the default value and whenever we want to update the 'text' it will be done using 'setText'.
  // In react we cant directly update state, we need to use updation function which is 'setText' here.

  const handleClick = () => {
    // console.log('uppercase clicked' + text);
    let newText=text.toUpperCase();
    //setText('You have clicked on uppercase handle.')
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleClick2 = ()=> {
    let newText=text.toLowerCase(); 
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const clickClear = () => {
    let newText='';
    setText(newText);
  }
  const formatString=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
  }
  

  // this function will make sure that we can type in the text area.
  const handleonChange = (event) => {
    // console.log('on change'); 
    setText(event.target.value);  // will update the set of text. 
  }


 
  // text="awfcv";  --> WRONG WAY TO SET TEXT.
  // setText("sadcv");  --> RIGHT WAY TO SET STATE OF TEXT.
  
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'#1f1c4b'}}>
    <h1>{props.heading} </h1>
    <div class="mb-3">  
        <label for="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#1f1c4b'}} rows="8" aria-describedby="emailHelp" />  
        {/* text is getting update bcoz we have used variable their and so set state is setting the state of it using onclick event. */}
        {/* First curly brace in style is for writing JS and second for writing an object inside it. */}
    </div >                                         
    <button type="submit" className="btn btn-primary mx-3" onClick={handleClick}>Convert to UpperCase</button>
    <button type="submit" className="btn btn-primary mx-3" onClick={handleClick2}>Convert to LowerCase</button>
    <button type="submit" className="btn btn-primary mx-3" onClick={clickClear}>Clear</button>
    <button type="submit" className="btn btn-primary mx-3" onClick={formatString}>Remove Space</button>
    
</div>
<div className='container' style={{color: props.mode==='dark'?'white':'#1f1c4b'}}>
  <h1>Your text summary</h1>
  <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters.</p>
  <p>{0.008 * text.split(" ").length} read time.</p>
  <h2>Preview</h2>
  {text.length>0?text:"Enter something in the textform to preview it here."}
</div>
</>
  )
}
