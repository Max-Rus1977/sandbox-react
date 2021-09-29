import React from "react";
import './button.css';

function MyButton({ btnText, setModalActiv }) {
  return (
    <div className="box-btn">
      <button onClick={() => setModalActiv(true)}>
        {btnText}
      </button>
    </div>
  )
}

export default MyButton;