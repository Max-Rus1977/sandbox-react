import React, { useState } from "react";
import PagTitle from "./PagTitle";

function Discription() {
  return (
    <ul className='discript'>
      <li>Импортируется, состояние 'useState'.</li>
      <li>Создаётся переменная для состояния 'const [active, setActive] = useState(false)'.</li>
      <li>Создаётся переменная в которую помещается массив классов или пустой массив 'const clases = ['box-p', 'dfAiJc-Center']'</li>
      <li>На кнопку вещается событие 'onClick' с функцией</li>
      <li>Элементу у которого должен добавляться класс в 'className' добавляется массив классов с разделителем clases.join(' '), который сздавался выше.</li>
      <li>В созданой на кнопке функции меняется состояние 'useState(false)' на useState(true)</li>
      <li>А в 'if' отслеживаютя эти изменения и кодга 'useState(true)' в массив добавляется с помощю 'push', при этом пробелы делаются с помощю 'join(' '). При переходе сосотояния в 'useState(False)' у массива классов заберается добавленый класс.</li>
    </ul>
  )
}

function AddClass() {

  const [active, setActive] = useState(false);
  const clases = ['box-p', 'dfAiJc-Center'];

  const togglClass = () => {
    setActive(!active);
  }

  if (active) {
    clases.push('replace-backg');
  }

  return (
    <div>
      <PagTitle title='Добавление класса' />
      <div className={clases.join(' ')}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='box__btn-addClass dfJc-center'>
        <button onClick={togglClass} className='btn btn-addClass'>Click My</button>
      </div>
      <Discription />
    </div>
  )
}

export default AddClass;