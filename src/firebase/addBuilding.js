import { getDatabase, ref, set } from "firebase/database";

function addBuilding(id, name, area, location, img) {
    const db = getDatabase();
    set(ref(db, 'buildings/' + id), {
        id,
        name,
        area,
        location,
        img
    })
}

export default addBuilding