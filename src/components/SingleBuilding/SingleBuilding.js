import React from 'react'
import { RiPencilFill } from "react-icons/ri"
import { FaTrash } from "react-icons/fa"
import styles from './SingleBuilding.module.css'

const SingleBuilding = ({ building, updateRow, deleteRow }) => {
    return (
        <tr className={styles.tr}>
            <td>{building.id}</td>
            <td>{building.name}</td>
            <td>{building.area}</td>
            <td>{building.location}</td>
            <td className={styles.centerRow}>
                <div className={styles.imgContiner}>
                    {building.img && <img src={building.img} alt="building view" />}
                </div>
            </td>
            <td className={styles.centerRow}>
                <RiPencilFill
                    className={`${styles.updateIcon} ${styles.icon}`}
                    onClick={() => updateRow(building)}
                />
                <FaTrash
                    className={`${styles.deleteIcon} ${styles.icon}`}
                    onClick={() => deleteRow(building)}
                />
            </td>
        </tr>
    )
}

export default SingleBuilding