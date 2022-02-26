import React from 'react'
import { FaUserCircle} from "react-icons/fa";
import styles from './UserHeader.module.css'

const UserHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Welcome</p>
        <FaUserCircle className={styles.avatar} />
      </div>
    </div>
  )
}

export default UserHeader