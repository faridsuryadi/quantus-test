import React from 'react'
import styles from "./sidebar.module.css"
import { GoHome,GoArchive } from "react-icons/go";
import MenuLink from './menuLink/menuLink';
import Logout from './logout/logout';

const menuItems=[
  
      {
        title:"Home",
        path:"/dashboard",
        icon: <GoHome/>
      },
      {
        title:"Asset",
        path:"/dashboard/assets",
        icon: <GoArchive/>
      }
    ]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.text}>TEST QTI</p>
        <img src='/Logo-horizontal=Black 1.png' className={styles.logoImg}/>
      </div>
      <ul className={styles.list}>
       {menuItems.map(side=>(
        <li key={side.title}>
          <MenuLink item={side}/>
        </li>
       ))} 
      </ul>
      <div className={styles.Logout}>
      <Logout/>
      </div>
      </div>
  )
}

export default Sidebar