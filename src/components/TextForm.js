import React, {useState} from "react";


export default function TextForm(props){


    const handleOnUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnCapClick =()=>{
        let newText = text.toLowerCase();
        let newTexts= newText.split(" ");

        for(let i =0; i<newTexts.length; i++){
         
                newTexts[i] = newTexts[i].charAt(0).toUpperCase() + newTexts[i].slice(1);
            
           
        }
        setText(newTexts.join(" "));
    };
    const handleOnNormalClick =()=>{
        let newText = text.toLowerCase().replace(/(^\s*\w|[/.!?]\s*\w)/g,function(c){return c.toUpperCase()});
       
        setText(newText);
    };
    
    const handleOnSpaceClick =()=>{

    
        let newText = text.split(/[ ]+/);
       
        setText(newText.join(" "));
    };

    const handleOnClearClick =()=>{
        let newText = " ";
       
        setText(newText);
    };

   


    const handleOnChange =(event)=>{
       setText(event.target.value);
    };

 


    const [text, setText] =useState(" ");
    return(
        <>
        <h2 className="py-3 headText">{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="textForm" rows="8" onChange={handleOnChange} value={text}></textarea>
        </div>
        <div className="mb-3 ">
          <button className="btn btn-primary m-2" onClick={handleOnUpClick} >Uppercase</button>
          <button className="btn btn-primary m-2" onClick={handleOnLowClick} >Lowercase</button>
          <button className="btn btn-primary m-2" onClick={handleOnCapClick} >Capitalize</button>
          <button className="btn btn-primary m-2" onClick={handleOnNormalClick} >Normal</button>
          <button className="btn btn-primary m-2" onClick={handleOnSpaceClick} >Remove Extra Spaces</button>
          <button className="btn btn-primary m-2" onClick={handleOnClearClick} >Clear</button>
        </div>

        <div className="summary">
            <h2 className="headText">Your Text Summary</h2>
            <p> { text.trim().split(/[ ]+/).filter((element)=>{return element.length !== 0}).length} Words, {text.length} Character </p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
        </div>
        <div className="preview mb-5 py-2">
            <h2 className="headText">Preview</h2>
            <div className="rounded previewText">
                  <p >{text.split(" ").filter((element)=>{return element.length !== 0}).length ?  text : "Nothing to Preview" }</p>
            </div>
         
        </div>
        </>
    );
}