import React from 'react'
import styles from "./TwoSection.module.scss"
import { FaRegUser } from "react-icons/fa";
const TwoSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.divSection}>
            <div className={styles.hed}>
                <h1>Some Features that Made us Unique</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.carts}>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaRegUser />
                    <h3>Expert Technicians</h3>
                    </div>
                    <div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaRegUser />
                    <h3>Expert Technicians</h3>
                    </div>
                    <div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaRegUser />
                    <h3>Expert Technicians</h3>
                    </div>
                    <div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaRegUser />
                    <h3>Expert Technicians</h3>
                    </div>
                    <div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaRegUser />
                    <h3>Expert Technicians</h3>
                    </div>
                    <div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                    <FaRegUser />
                    <h3>Expert Technicians</h3>
                    </div>
                    <div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TwoSection