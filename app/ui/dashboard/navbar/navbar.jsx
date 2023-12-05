import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>

    <div className={styles.user}>

    <img src='/2.png' alt='' width="50" height="50" className={styles.userImg}/>
    <div className={styles.userDetail}>
    <span className={styles.username}>Username</span>
    <span className={styles.email}>Email User</span>
    </div>
    </div>
    </div>
  )
}

export default Navbar