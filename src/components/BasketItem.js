import React from 'react';

function BasketItem({amount, product}) {
    return (
        <>
            <li className="basket-item">{product.title} <span>x {amount}</span></li>
            <style jsx>{`
              .basket-item {
              padding-bottom: 10px;
              font-size: 17px;
              
              }
              .basket-item span {
              color: #999;
              }
            `}</style>
        </>
    );
}

export default BasketItem;