import React from 'react'
import styles from './Card.module.scss'
const Card = ({ item, addBasket }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={item.image} alt="" />
        </div>
        <p>{item.title}</p>
        <p>{item.price}</p>

        <div className={styles.buttons}>
          <button onClick={addBasket}>Basket</button>
          <button>Wish</button>
        </div>
      </div>
    </div>
  )
}

export default Card