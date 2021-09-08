import React, { useState } from 'react';
import Hello from './components/Hello';
import Modal from './components/UI/modal/Modal';
import MyButton from './components/UI/button/MyButton';


import './styles/App.css';

function App() {

  const [modalActiv, setModalActiv] = useState(true);

  return (
    <div className="App">
      <Hello name='Кузя'></Hello>
      <Hello name='Петя'>
        <div>Test</div>
      </Hello>
      <Modal />
      <MyButton btnText='НАЖАТЬ' />
    </div>
  );
}

export default App;
