import React, { useState, useEffect } from 'react'
import addBuilding from '../../firebase/addBuilding'
import Form from '../Form/Form'

const AddBuilding = ({ setShow, onClose, keys, action }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [area, setArea] = useState('')
  const [location, setLocation] = useState('')
  const [img, setImg] = useState('')

  useEffect(() => {
    for (let index = 1; index <= 100; index++) {
      if (!keys.includes(index)) {
        setId(index)
        break;
      }
    }
  }, [keys])

  const handleSubmit = (event) => {
    event.preventDefault();
    addBuilding(id, name, area, location, img)
    setShow(false)
    onClose(false);
    setId('')
    setName('')
    setArea('')
    setLocation('')
    setImg('')
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

export default AddBuilding
