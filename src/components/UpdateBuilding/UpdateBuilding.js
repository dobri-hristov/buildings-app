import React, { useState, useEffect } from 'react'
import addBuilding from '../../firebase/addBuilding'
import Form from '../Form/Form'

const UpdateBuilding = ({ building, setShow, onClose, action }) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [location, setLocation] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        if (building) {
            setId(building.id)
            setName(building.name)
            setArea(building.area)
            setLocation(building.location)
            setImg(building.img)
        }
    }, [building])

    const handleSubmit = (event) => {
        event.preventDefault();
        addBuilding(id, name, area, location, img)
        setShow(false)
        onClose(false);
    }
    return (
        <Form
            handleSubmit={handleSubmit}
            id={id}
            name={name}
            setName={setName}
            area={area}
            setArea={setArea}
            location={location}
            setLocation={setLocation}
            img={img}
            setImg={setImg}
            action={action}
        />
    );
}

export default UpdateBuilding
