import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Handle was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    // console.log("Handle was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleClearClick = (event) => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopyClick = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleRemoveExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const [text, setText] = useState(" ");

  // text = "New text"; // Wrong way to change the state
  // setText("next text"); // Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleSpeakClick}
          className="btn btn-success mx-2 my-2"
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-danger mx-2 my-2"
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopyClick}
          className="btn btn-info mx-2 my-2"
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleRemoveExtraSpaceClick}
          className="btn btn-warning mx-2 my-2"
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p className="m-0">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters
        </p>
        <p className="m-0">
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
