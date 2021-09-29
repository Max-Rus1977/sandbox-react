import React, { useState } from "react";
import PagTitle from "./PagTitle";

function Discription() {
  return (
    <ul className='discript'>
      <li></li>
    </ul>
  )
}

function ModalWidow() {

  const [active, setActive] = useState(false);
  const clases = ['box-modal', 'dfAiJc-Center'];

  /* Можно и так  */
  // const togglClass = () => {
  //   setActive(!active);
  // }

  const openModal = () => {
    setActive(true);
  }

  const clseModal = () => {
    setActive(false);
  }

  if (active) {
    clases.push('visibl-js');
  }

  return (
    <div>
      <PagTitle title='Модальное окно' />
      <div className={clases.join(' ')}>
        <div className="modal-body">
          <p>Lorem ipsum dolor sit amet.</p>
          <button onClick={clseModal} className='btn btn-ModalWidow'>Close</button>
        </div>
      </div>
      <div className='box__btn-ModalWidow dfJc-center'>
        <button onClick={openModal} className='btn btn-ModalWidow'>Open Modal</button>
      </div>
      <Discription />
    </div>
  )
}

export default ModalWidow;