'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'
export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState('')
    const imageInput = useRef()

    function handlePickClick(){
        imageInput.current.click()
    }

    function handleImageChange(event){
        const file = event.target.files[0]

        if(!file){
            setPickedImage(null)
        }

        const reader = new FileReader()

        reader.onload = () => {
            setPickedImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='Picked Image' fill/>}
                </div>
                <input
                 className={classes.input}
                 type='file' 
                 id={name}
                 accept='.jpg,.jpeg,.png' 
                 name={name}
                 ref={imageInput}
                 onChange={handleImageChange}
                 required
                 />
                 <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                 </button>
            </div>
        </div>
    )
}