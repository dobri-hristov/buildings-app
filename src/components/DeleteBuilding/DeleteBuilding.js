import React from 'react'
import deleteBuilding from '../../firebase/deleteBuilding'
import styles from './DeleteBuilding.module.css'

const DeleteBuilding = (props) => {
    return (
        <div className={styles.btnContainer}>
            <button
                className={styles.btn}
                onClick={() =>
                    deleteBuilding(props.building.id, props.setShow, props.onClose)}>
                Delete
            </button>
        </div>
    )
}

export default DeleteBuilding