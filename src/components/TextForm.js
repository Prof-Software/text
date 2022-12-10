import React , {useState} from 'react'

// console.log(useState('Enter Text here2'))

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Text Converted to Upper Case','success')
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopyClick = () =>{
        let copyText = text
        navigator.clipboard.writeText(copyText)
    }
    const handleclearClick = () =>{
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} style={{color: props.mode === 'dark' ? 'white' : 'black',backgroundColor: props.mode === 'light' ? 'beige' : 'gray'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Your Text Summary</h1>
            <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{text.split(" ").length} words | {text.length} characters</p>
            <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Preview</h2>
            <p style={{color: props.mode === 'dark' ? 'white' : 'black'}} id='text'>{text}</p>
        </div>
        </>
    )
}
