/* eslint-disable no-undef */
import React from 'react'
import styles from './ImgUploader.module.css'

const ImgUploader = ({ title, setImg }) => {
    const handleClick = (event) => {
        event.preventDefault();
        const myWidget = cloudinary.createUploadWidget({
            cloudName: 'dfwwzfev2',
            apiKey: '653766559683928',
            uploadPreset: 'buildings-app'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                setImg(result.info.url)
            }
        })
        myWidget.open()
    }

    return (
        <button
            id="upload_widget"
            className={styles.btn}
            onClick={handleClick}>
            {title}
        </button>
    )
}

export default ImgUploader