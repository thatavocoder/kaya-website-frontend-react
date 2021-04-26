import React from 'react'
import {Link} from 'react-router-dom'
import './CSS/UploadImage.css'
import image from './Images/image.png'

export default function UploadImage() {
    return (
        <div className='container'>
            <div className="imgheadercont row">
                <div className="image col s2">
                    <p>Image</p>
                </div>
                <div className="imgheader col s10">
                </div>
            </div>
            <div className="file-field input-field imageinput">
                <div className='btn imgbtn'>
                    <span><img src={image}></img><p>Image</p></span>
                    <input type='file' className='imageinput'></input>
                </div>

                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" />
                </div>
            </div>
            <Link to='/ImageDisplay' className='btn imgnextbtn'>Next    &gt;</Link>
        </div>
    )
}
