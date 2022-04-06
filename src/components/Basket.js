import React from 'react';
import products from '../products.json';
import BasketItem from "./BasketItem";
import {moneyFormat} from "../helpers";

function Basket({basket, total, setBasket}) {

    const resetBasket = () => {
        setBasket([])
    }

    return (
        <>
            <div className="basket-container container">
                <ul>
                    {basket.map(item => (
                        <BasketItem key={item.id} amount={item.amount}
                                    product={products.find(product => product.id === item.id)}/>
                    ))}
                </ul>
                {total > 0 && (
                    <>
                        <div className='total'>${moneyFormat(total)}</div>
                        <button className="button" onClick={resetBasket}>Sepeti Sıfırla</button>
                    </>
                )}

            </div>
            <style jsx>{`
              .basket-container {
                padding: 20px;
                background: #fff;
                border: 1px solid #ddd;

              }

              .basket-container h3 {
                font-size: 20px;
                margin-bottom: 15px;
              }

              .basket-container .total {
              border-top: 1px solid #ddd;
              padding-top: 10px;
              margin-top: 10px;
              font-size: 18px;
              font-weight: bold;
              text-align: right;
              color: green;
              }
              
              .basket-container .button {
              background: #61dafb;
              height: 40px;
              padding: 0 20px;
              font-size: 16px;
              font-weight: 500;
              cursor: pointer;
              border-radius: 4px;
              }
            `}

            </style>
        </>
    );
}

export default Basket;