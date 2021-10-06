import React from "react";
import PagTitle from "./PagTitle";

function Hello({ name, children }) {
  return (
    <div>Привет, {name}{children}</div>
  )
}

function Atribut() {
  return (
    <div>
      <PagTitle title='Пример с атрибутами' />
      <Hello name='Кузя'></Hello>
      <Hello name='Петя'><div>Test</div></Hello>
    </div>
  )
}

export default Atribut;