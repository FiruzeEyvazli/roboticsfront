import React from 'react'
import styles from "./ThreeSection.module.scss"
const ThreeSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.divSection}>
            <div className={styles.hed}>
                <h1>Latest News from our Blog</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.fotos}>
                <div className={styles.foto}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/b1.jpg" alt="" />
                    <div className={styles.buttons}>
                        <button>Travel</button>
                        <button>Life Style</button>
                    </div>
                    <h4>Portable latest Fashion for young women</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <span>31st January, 2018</span>

                </div>
                <div className={styles.foto}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/b2.jpg" alt="" />
                    <div className={styles.buttons}>
                        <button>Travel</button>
                        <button>Life Style</button>
                    </div>
                    <h4>Portable latest Fashion for young women</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <span>31st January, 2018</span>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ThreeSection