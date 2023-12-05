import React from 'react';
import styles from './logout.module.css';
import { MdOutlineLogout } from 'react-icons/md';

const Logout = () => {
  return (
    <div  className={styles.container} >
      Logout <MdOutlineLogout />
    </div>
  );
};

export default Logout;
