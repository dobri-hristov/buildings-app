import React from 'react'
import ImgUploader from '../ImgUploader/ImgUploader'
import styles from './Form.module.css'

const Form = ({ handleSubmit, id, name, setName, area, setArea, location, setLocation, img, setImg, action }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.label}>
                Id*
                <input
                    name="id"
                    type="number"
                    disabled
                    value={id}
                />
            </label>
            <br />
            <label className={styles.label}>
                Name*
                <input
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label className={styles.label}>
                Area*
                <input
                    name="area"
                    type="number"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)} />
            </label>
            <br />
            <label className={styles.label}>
                Location
                <input
                    name="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
            </label>
            <div className={styles.imgBtnContainer}>
                {
                    img &&
                    <div className={styles.imgContainer}>
                        <img src={img} alt="building" />
                    </div>
                }
                <ImgUploader title={!img ? 'Upload Image' : 'Change Image'} setImg={setImg} />
            </div>
            <br />
            <button type="submit" className={styles.submitBtn}>
                {action === 'update' ? 'Update Building' : 'Add Building'}
            </button>
        </form>
    );
}

export default Form