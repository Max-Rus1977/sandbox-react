import React, { useState } from 'react';
import Hello from './components/Hello';
import LoremComponent from './components/LoremComponent';
import Modal from './components/UI/modal/Modal';
// import MyButton from './components/UI/button/MyButton';


import './styles/App.css';

function App() {

  const [modalActiv, setModalActiv] = useState(false);

  return (
    <div className="App">
      <Hello name='Кузя'></Hello>
      <Hello name='Петя'>
        <div>Test</div>
      </Hello>
      <Modal />
      <LoremComponent>
        <button onClick={() => setModalActiv(true)}>
          Click mi!
        </button>
      </LoremComponent>
      {/* <MyButton active={modalActiv} setActive={setModalActiv} btnText='Модальное окно' /> */}
    </div>
  );
}

export default App;
