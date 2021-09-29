import React from "react";
import './modal.css';

function Modal({ active, setActive }) {
  return (
    <div className={active ? 'modal actiov-js' : 'modal'} onClick={() => { setActive(false) }}>
      <div className="modal__content" onClick={(event) => { event.stopPropagation() }}></div>
    </div>
  )
}

export default Modal;