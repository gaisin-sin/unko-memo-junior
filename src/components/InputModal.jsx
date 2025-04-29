import "./InputModal.css"
import { useState } from "react";
export const InputModal = (props) => {
    const {showInput, setInput, addMemo } = props;
    const [nowText, setText] = useState("");
    const changeFunc = (e) => {
        setText(e.target.value);
    }
    return (
        <>
        <div className="ModalWindow" onClick={() => setInput(false)} style={{visibility:(showInput ? "visible" : "hidden")}}>
        </div>
        <div className="MainModal" style={{visibility:(showInput ? "visible" : "hidden")}}>
            <textarea value={nowText} onChange={changeFunc}></textarea>
            <div className="buttons">
            <button className="close-button" onClick={() =>  setInput(false)}>X</button>
            <button className="add-button" onClick={() => {
                 addMemo(nowText);
                 setText("");
                 setInput(false);
            }}>+</button>    
      </div>
        </div>
        </>
    );
}