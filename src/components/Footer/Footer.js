import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.ul}>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/buildings">Details</Link></li>
                </ul>
                <p className={styles.title}>The Building App</p>
            </div>
        </div>
    )
}

export default Footer