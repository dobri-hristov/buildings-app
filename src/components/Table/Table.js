import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa"
import Popup from '../Popup/Popup'
import { getDatabase, ref, onValue } from "firebase/database";
import SingleBuilding from '../SingleBuilding/SingleBuilding'
import styles from './Table.module.css'

const Table = () => {
    const [data, setData] = useState([])
    const [action, setAction] = useState()
    const [building, setBuilding] = useState([])
    const [visibility, setVisibility] = useState(false);
    const [keys, setKeys] = useState([]);

    const popupCloseHandler = () => {
        setVisibility(false);
    };

    useEffect(() => {
        const db = getDatabase();
        const dataRef = ref(db, 'buildings/');
        onValue(dataRef, (snapshot) => {
            const buildings = snapshot.val();
            const allData = []
            const allkeys = []
            for (let id in buildings) {
                allData.push(buildings[id])
                allkeys.push(+id)
            }
            setData(allData)
            setKeys(allkeys)
        });
    }, [])

    const updateRow = (pickedBuilding) => {
        setBuilding(pickedBuilding)
        setAction('update')
        setVisibility(true)
    }

    const deleteRow = (pickedBuilding) => {
        setBuilding(pickedBuilding)
        setAction('delete')
        setVisibility(true)
    }

    const addRow = () => {
        setAction('add')
        setVisibility(true)
    }

    return (
        <div className={styles.container}>
            <FaPlus className={`${styles.addIcon} ${styles.icon}`} onClick={addRow} />
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr} >
                        <th>Id</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Location</th>
                        <th className={styles.centerRow}>Image</th>
                        <th className={styles.centerRow}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, index) => (
                            <SingleBuilding
                                key={index}
                                building={el}
                                updateRow={updateRow}
                                deleteRow={deleteRow}
                            />
                        ))
                    }
                </tbody>
            </table>
            <Popup
                onClose={popupCloseHandler}
                visibility={visibility}
                building={building}
                action={action}
                keys={keys}
            >
            </Popup>
        </div>
    )
}

export default Table