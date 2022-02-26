import { getDatabase, ref, remove } from "firebase/database";

function deleteBuilding(id, setShow, onClose, location, img) {
    const db = getDatabase();
    remove(ref(db, `buildings/${id}`))
    setShow(false)
    onClose(false);
}

export default deleteBuilding