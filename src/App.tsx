import React, { useState } from 'react';
import './App.css';
import { ListProducts } from './components/ListProducts';
import { GridContainer } from './styles/listProducts'
import { getAllData } from './services/getAllData'
import { getFilter } from './services/getFilter'

function App() {

const {data} = getAllData()
const [products,setProducts] = useState(data)

const handlerAllData = () => {
  setProducts(data)
}

const handlerFilter = (mount : number) => {
  const newData = getFilter(mount)
  setProducts(newData)
}

  return (
    <div className="App">
      <div><h1>List Products !</h1></div>
      <button onClick={handlerAllData}>All</button>
      <button onClick={()=>handlerFilter(500)}>Price greater than $500</button>
      <button>Without Apple</button>
      <GridContainer>
        <ListProducts products={products}/>
      </GridContainer>
    </div>
  );
}

export default App;
