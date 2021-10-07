import React, { useState } from "react";
import PagTitle from "./PagTitle";

function InputSelected({ defaultValue, options, value, onChangeValue }) {
  return (
    <select value={value} onChange={event => onChangeValue(event.target.value)}  >
      <option disabled value=''>{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>{option.disc}</option>)}
    </select>
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

function Selected() {

  const [productData, setProductData] = useState([
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

  const [selectedSort, setSelectedSort] = useState('');

  function sortProduct(sort) {
    setSelectedSort(sort);
    if (sort === 'names') {
      setProductData([...productData].sort((a, b) => a[sort].localeCompare(b[sort])));
    }
    else if (sort === 'prise') {
      console.log("надо подумать");
      setProductData([...productData].sort((a, b) => a[sort] - b[sort]))
    }

  }

  return (
    <div>
      <PagTitle title='Сортировка <select>' />
      <InputSelected
        value={selectedSort}
        onChangeValue={sortProduct}
        defaultValue='Сортировка по ...'
        options={[
          { value: 'prise', disc: 'Цене' },
          { value: 'names', disc: 'Названию' },
        ]}
      />
      <div className="box-product">
        {productData.map(data =>
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

export default Selected;