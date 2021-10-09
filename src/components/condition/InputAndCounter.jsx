import React from "react";
import ChangesInput from "./ChangesInput";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";

function InputAndCounter() {
  return (
    <div className="box-counter-input">
      <ChangesInput />
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default InputAndCounter;