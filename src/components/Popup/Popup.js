import React, { useEffect, useState } from "react";
import AddBuilding from '../AddBuilding/AddBuilding'
import DeleteBuilding from '../DeleteBuilding/DeleteBuilding'
import UpdateBuilding from '../UpdateBuilding/UpdateBuilding'
import styles from "./Popup.module.css";

const Popup = ({ visibility, building, onClose, action, keys }) => {
    const [show, setShow] = useState(false);
    
    const closeHandler = () => {
        setShow(false);
        onClose(false);
    };

    useEffect(() => {
        setShow(visibility);
    }, [visibility]);

    return (
        <div
            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className={styles.overlay}
        >
            <div className={styles.popup}>
                {action === 'add' && <h2>Add new building</h2>}
                {action === 'update' && <h2>{building.name}</h2>}
                {action === 'delete' && <h2>Are you sure you want to delete {building.name}?</h2>}
                <span className={styles.close} onClick={closeHandler}>
                    &times;
                </span>
                <div className={styles.content}>
                    {action === 'add' && <AddBuilding setShow={setShow} onClose={onClose} keys={keys} action={action} />}
                    {action === 'update' && <UpdateBuilding building={building} setShow={setShow} onClose={onClose} action={action} />}
                    {action === 'delete' && <DeleteBuilding building={building} setShow={setShow} onClose={onClose} />}
                </div>
            </div>
        </div>
    );
};

export default Popup;
