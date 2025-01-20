import React from 'react'
import styles from "./FirstSection.module.scss"
const FirstSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.divSection}>
                <div className={styles.texts}>
                    <h1>Improved
                        Production level
                        with Robotics</h1>
                    <p>Everyone wants the innovation through robotics</p>
                    <button>View Details</button>
                </div>
                <div className={styles.images}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default FirstSection