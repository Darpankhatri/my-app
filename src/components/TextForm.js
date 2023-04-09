import React, {useState} from 'react'
import PropTypes from 'prop-types'

// Declare a new state variable, which we'll call "count"

export default function TextForm(props) {
    const handleClink = ()=>{
        console.log("click here");
        settext(text.toUpperCase());
    }
    const handelOnChange = (event)=>{
        console.log("change here");
        settext(event.target.value);
    }
    const [text, settext] = useState("Enter text");
    console.log(text,settext);
    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handelOnChange} value={text} rows="3"></textarea>
                    <button className="btn btn-primary" onClick={handleClink}>Change to UpperCase</button>
                </div>
            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};


TextForm.defaultProps = {
    heading: "Default Title"
};