import React from 'react'
import styles from "./Header.module.scss"
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.divHeader}>
            <div className={styles.logo}>
                <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="logo" />
            </div>
            <div className={styles.navig}>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">PRODUCTS</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/basket">Basket</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header