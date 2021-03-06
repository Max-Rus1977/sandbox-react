import React, { useState } from "react";
import PagTitle from "./PagTitle";

function InputSearch({ dataValue, changeValue, inputClickHandler }) {

  return (
    <div className='box-search'>
      <input
        type="text"
        value={dataValue}
        onChange={event => changeValue(event)}
        onClick={inputClickHandler}
      />
    </div>
  )
}

function Product({ prise, names }) {
  return (
    <div className="product">
      <div className="product-images"></div>
      <div className="product-price">
        <p>{prise}</p>
      </div>
      <div className="product-name">
        <p>{names}</p>
      </div>
    </div>
  )
}

function QuickSearchTwo() {

  const [productData] = useState([
    { id: 1, prise: 1000, names: 'Джемпер' },
    { id: 2, prise: 1200, names: 'Рубашка' },
    { id: 3, prise: 1500, names: 'Лёгкая куртка' },
    { id: 4, prise: 900, names: 'Брюки' },
    { id: 5, prise: 2000, names: 'Свитер' },
    { id: 6, prise: 3000, names: 'Тёплая куртка' },
    { id: 7, prise: 2500, names: 'Пальто' },
    { id: 8, prise: 3500, names: 'Пуховик' },
    { id: 9, prise: 600, names: 'Майка' },
    { id: 10, prise: 1800, names: 'Кроcовки' },
  ]);

  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  function searchChange(event) {
    setValue(event.target.value);
  }

  const filterProduct = productData.filter(product => {
    return product.names.toLowerCase().includes(value.toLowerCase())
  })

  function itemClickHandler(event) {
    setValue(event.target.textContent);
    setIsOpen(!isOpen)
  }

  function inputClickHandler() {
    setIsOpen(true)
  }

  return (
    <div>
      <PagTitle title='Быстрый поиск' />
      <InputSearch
        dataValue={value}
        changeValue={searchChange}
        inputClickHandler={inputClickHandler}
      />
      {value && isOpen
        ? <ul className='search-list'>
          {filterProduct.map(data =>
            <li
              key={data.id}
              onClick={itemClickHandler}
            >{data.names}</li>
          )}

        </ul>
        : null
      }
      <div className="box-product">
        {filterProduct.map(data =>
          <Product
            key={data.id}
            prise={data.prise}
            names={data.names}
          />
        )}
      </div>
    </div>

  )
}

export default QuickSearchTwo;