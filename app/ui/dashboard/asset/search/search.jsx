import React from 'react'
import styles from "./search.module.css"
import { MdSearch } from 'react-icons/md'
const Search = () => {
  return (
    <div className={styles.container}>
        <input type="text" placeholder='Search asset' className={styles.input}/>
        <MdSearch className={styles.icon}/>
    </div>
  )
}

export default Search