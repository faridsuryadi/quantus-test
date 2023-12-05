'use client'
import React from 'react'
import styles from "./menuLink.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const MenuLink = ({item}) => {
  const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        <div className={styles.content}>
        {item.icon}
        {item.title}
      </div>
    </Link>
  )
}

export default MenuLink