import {useState} from 'react'
import {moneyFormat} from "../helpers";

function Product({product, basket, setBasket, total, money}) {

    const basketItem = basket.find(item => item.id === product.id)

    const removeBasket = () => {
        const basketItem = basket.find(item => item.id === product.id)
        const basketItemWithout = basket.filter(item => item.id !== product.id)
        basketItem.amount -= 1
        if (basketItem.amount > 0) {
            setBasket([...basket.filter(item => item.id !== product.id), basketItem])
        } else {
            setBasket([...basketItemWithout])
        }
    }

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    return (
        <>
            <div className='product'>
                <img src={product.image} alt=""/>
                <h6>{product.title}</h6>
                <div className='price'>${moneyFormat(product.price)}</div>
                <div className='actions'>
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                    <button className="buy-btn" disabled={money - total < product.price} onClick={addBasket}>Satın al
                    </button>
                </div>
                <style jsx>{`
                  .product {
                    padding: 15px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    width: 24%;
                  }

                  .product img {
                    width: 100%;
                  }

                  .product h6 {
                    font-size: 20px;
                    margin-bottom: 10px;
                  }

                  .product .actions {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;

                  }

                  .product .price {
                    font-size: 20px;
                    color: green;
                  }

                  .actions button {
                    height: 40px;
                    padding: 0 15px;
                    flex: 1;
                    cursor: pointer;
                  }

                  .actions .buy-btn {
                    background: #61dafb;
                    font-size: 12.5px;
                    font-weight: 500;
                    border-radius: 0 4px 4px 0;

                  }

                  .actions .sell-btn {
                    color: #333;
                    background: #ccc;
                    font-size: 12.5px;
                    font-weight: 500;
                    border-radius: 4px 0 0 4px;
                  }

                  .actions .amount {
                    width: 50px;
                    text-align: center;
                    border: 1px solid #ddd;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    font-weight: bold;
                    color: #555;
                  }

                  .actions button[disabled] {
                    opacity: .3;
                    //cursor: not-allowed;
                  }
                `}
                </style>
            </div>
        </>
    )
}

export default Product;