import React from 'react'
import styles from './card.module.css'
const Card = ({title, count}) => {
  return (
    <div className={styles.container} >
        <div className={styles.text}>
            <span className={styles.title}>{title} tes</span>
            <span className={styles.count}>{count} tes</span>
        </div>
    </div>
  )
}

export default Card