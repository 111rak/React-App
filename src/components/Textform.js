import React, {useState} from "react"

export default function Textform(props) {
    const HandleUpClick = () =>{
        // console.log("UpperCase was Clicked :" + text);
        let newText = text.toUpperCase();
        setText(newText);
        
    }

    const HandleLoClick = () =>{
      // console.log("UpperCase was Clicked :" + text);
      let newText = text.toLowerCase();
      setText(newText);
      
  }

  const HandleClear = () =>{
    // console.log("UpperCase was Clicked :" + text);
    let newText = " ";
    setText(newText);
}

const Duplicate = () =>{
  const words = text.split(" ");
  const uniqueword = [];
  const duplicateWords = [];
  // console.log("UpperCase was Clicked :" + text);
  let i,j;

  for(i=0;i<=words.length;i++){
  let isDuplicate = false;
  for(j=0;j<=uniqueword.length;j++){
  if(words[i] === uniqueword[j]){
    isDuplicate = true;
    break;
  }
  }
  if(!isDuplicate){
    uniqueword.push(words[i])
  }else {
    duplicateWords.push(words[i]);
  }
}
setText( duplicateWords.join(" "));
}

const Copy = () => {
  const textElement = document.getElementById("myBox");
  if (textElement) {
    textElement.select(); // Text element ko select karo
    document.execCommand("copy"); // Copy command chalao
  }
};


    const handleOnchange = (event) =>{
        // console.log("On change")
        setText(event.target.value)
    }


  
    const [text, setText] = useState('')

  return (
    <>
    <div className = "container" style = {{color: props.mode === 'dark'?'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnchange} style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}  id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick = {HandleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick = {HandleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick = {HandleClear}>ClearText</button>
      <button className="btn btn-primary mx-2" onClick = {Duplicate}>Duplicate Word</button>
      <button className="btn btn-primary mx-2" onClick = {Copy}>Copy Text</button>

    </div>

    <div className = "container " style = {{color: props.mode === 'dark'?'white':'#042743'}}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length-1} words {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length >0?text:"Enter Something in the Textbox above to preview it"}</p>
    
    
    </div>
    </>
  );
}
