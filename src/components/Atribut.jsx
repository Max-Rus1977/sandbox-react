import React, { useState } from "react";
import PagTitle from "./PagTitle";

function Hello({ name, children }) {
  return (
    <div>Привет, {name}{children}</div>
  )
}

function Discription() {

  const [discText, setDiscText] = useState([
    { id: 1, data: 'У компонента атрибуты называются произвольно, как переменные.' },
    { id: 2, data: 'Но есть и зарезервированные типа "children". ' },
    { id: 3, data: 'В их значение можно передавать данные: функции, строки, переменные и т.д.. После этого они появляются в "props" этого компонента.' },
  ])

  return (
    <ul className='discript'>
      {discText.map(p => <li key={p.id} id={p.id}>{p.data}</li>)}
    </ul>
  )
}

function Atribut() {
  return (
    <div>
      <PagTitle title='Пример с атрибутами' />
      <Hello name='Кузя'></Hello>
      <Hello name='Петя'><div>Test</div></Hello>
      <Discription />
    </div>
  )
}

export default Atribut;