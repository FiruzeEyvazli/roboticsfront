import React from 'react'

const BasketCard = ({ item }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default BasketCard