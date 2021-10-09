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
          <li><NavLink to='/input-and-counter'>Управляемый 'input' и счётчик</NavLink></li>
          <li><NavLink to='/addnewpost'>Добавление и удаление поста</NavLink></li>
          <li><NavLink to='/selected'>Сортировка 'select'</NavLink></li>
          <li><NavLink to='/suick-search'>Быстрый поиск</NavLink></li>
          <li><NavLink to='/suick-search-two'>Быстрый поиск в выпадающем спаске</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;