import React from 'react';
import Atribut from './components/Atribut';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AddClass from './components/AddClass';
import ModalWidow from './components/ModalWidow';
import AddNewPost from './components/AddNewPost';

import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App row">
        <Header />
        <Navigation />
        <div className='main-col'>
          <Route path='/atribut' render={() => <Atribut />} />
          <Route path='/addclass' render={() => <AddClass />} />
          <Route path='/modalwidow' render={() => <ModalWidow />} />
          <Route path='/addnewpost' render={() => <AddNewPost />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
