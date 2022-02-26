import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/cover.jpg'
import styles from './HomeContent.module.css'

const HomeContent = () => {
    return (
        <div className={styles.container}>
            <Link to="/buildings">
                <h3>Buildings</h3>
            </Link>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={img} alt="cover building view" />
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure,
                explicabo libero architecto voluptates laudantium commodi consequatur id,
                officia unde eos quia deserunt odio nisi quaerat sed voluptas obcaecati recusandae.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque perspiciatis autem hic veritatis modi ex maxime rerum fugiat dolorum
                libero cupiditate consequatur, sunt, repudiandae explicabo laudantium eum et? Vero, atque! </p>
        </div>
    )
}

export default HomeContent