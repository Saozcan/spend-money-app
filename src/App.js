import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import products from './products.json'
import Product from './components/Product'
import Basket from "./components/Basket";

function App() {

  const [basket, setBasket] = useState([])
  const [money, setMoney] = useState(100000)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
        basket.reduce((acc , item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price)) }, 0))
    console.log(basket)
  }, [basket])

  return (
    <>
      <Header money={money} total={total}/>
      <div className="container products">
        {products.map(product => (
            <Product basket={basket} setBasket={setBasket} product={product} total={total} money={money}/>
        ))}
      </div>
      <Basket basket={basket} total={total} setBasket={setBasket}/>
    </>
  )
}

export default App;