import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleUpClick = function () {
        console.log("UpperCase is Clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.alertFun("Converted to UpperCase" ,"success")
    }
    const handleLowClick = function () {
        console.log("LowerCase is Clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.alertFun("Converted to LowerCase" ,"success")

    }
    const handleCapClick = function () {
        console.log("LowerCase is Clicked")
        let text1 = text.toLowerCase()
        let arr = text1.split(' ')
        for(let i=0;i<arr.length;i++){
            arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
        }
        setText(arr.join(" "))
        props.alertFun("Converted to Capitalized Case" ,"success")
    }
    const handleClrClick = function () {
        setText('')
    }
    // const handleCopyClick = function () {
    //     navigator.clipboard.writeText(text)
    //     props.alertFun("Copied to Clipboard" ,"success")
    // }
    const handleOnChange = function (event) {
        console.log("Changes to Textarea")
        setText(event.target.value)
    }
    
    return (
        <>
            <div className="container" style={{color:props.modeColor ==='light' ?'black ':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="box" value={text} onChange={handleOnChange}  rows="7" style={{backgroundColor:props.modeColor ==='light' ?'white ':'#212529' , color:props.modeColor ==='light'?'black ':'white'}}></textarea>
                </div>
                <button className="btn btn-primary me-3" disabled={text.length === 0} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary me-3" disabled={text.length === 0} onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary me-3" disabled={text.length === 0} onClick={handleCapClick}>Convert to CapitalizedCase</button>
                {/* <button className="btn btn-primary me-3" disabled={text.length === 0} onClick={handleCopyClick}>Copy Text</button> */}
                <button className="btn btn-primary me-3" disabled={text.length === 0} onClick={handleClrClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.modeColor ==='light' ?'black ':'white'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(".").length -1} Sentences {text.split(/\s+/).filter((t)=>{return t.length!==0}).length} Words and {text.length} Characters </p>
                <p>{0.008 * text.split(/\s+/).filter((t)=>{return t.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter the text in the above box to preview"}</p>
            </div>

        </>
    )
}
