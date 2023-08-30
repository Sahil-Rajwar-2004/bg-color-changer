import React from "react"
import "./app.css"

function App() {
  const [bg,setBg] = React.useState("#ffffff");
  const [copyText, setCopyText] = React.useState("copy");

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*12345678).toString(16);
    setBg(randomColor);
    setCopyText("copy");
  }

  const copy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = bg;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setCopyText("copied!");
  }

  return (
      <div 
      className="bar"
      style={{backgroundColor: bg}}>
        <button className="change-btn" onClick={changeColor}>Change</button>
        {/* <div style={{fontFamily: "monospace", padding: "10px", textTransform: "uppercase"}}>{bg}</div> */}
        <button className="copy-btn" onClick={copy}>{copyText}</button>
      </div>
  )
}

export default App
