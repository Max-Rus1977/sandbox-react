import React from "react";
import './button.css';

function MyButton({ btnText }) {
  return (
    <div className="box-btn">
      <button>
        {btnText}
      </button>
    </div>
  )
}

export default MyButton;