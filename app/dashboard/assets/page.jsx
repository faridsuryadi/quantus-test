import React from 'react'
import styles from "@/app/ui/dashboard/asset/asset.module.css"
import Search from '@/app/ui/dashboard/asset/search/search'
import Link from 'next/link'
import { MdEdit } from 'react-icons/md'
const AssetsPage = () => {
  const asset = "tes"
  return (
    <div className={styles.container}>
        <h2>List Asset</h2>
        <div className={styles.add}>
        <Link href="/dashboard/assets/add">
          <button className={styles.button}>
            + Input Asset
          </button>
        </Link>
        </div>
      <div className={styles.top}>
      <Search/>
      </div>
      <div className={styles.asset}>
        <div className={styles.title}>
      Asset Name
      <div className={styles.assetName}>
        {asset}

      </div>
        </div>
        <div className={styles.edit}>
          <Link href="/dashboard/assets/edit">
          <button className={styles.editButton}>
            <MdEdit/>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AssetsPage