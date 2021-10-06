import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className='navigtion-col'>
      <nav>
        <ul>
          <li><NavLink to='/atribut'>Атрибуты</NavLink></li>
          <li><NavLink to='/addclass'>Добавление класса</NavLink></li>
          <li><NavLink to='/modalwidow'>Модальное окно</NavLink></li>
          <li><NavLink to='/addnewpost'>Добавление и удаление поста</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;