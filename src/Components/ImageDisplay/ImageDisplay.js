import React from 'react'
import { Link } from 'react-router-dom'
import acnefacials from './Images/acnefacials.png'
import './CSS/ImageDisplay.css'

export default function ImageDisplay() {
    return (
        <div className='container'>
            <div className="imgheadercont row">
                <div className="image col s2">
                    <p>Image</p>
                </div>
                <div className="imgheader col s10">
                </div>
            </div>
            <div className='grid-container row'>
                <div className='displayimg col s12 m12 l6 center-align'>
                    <img src={acnefacials}></img>
                </div>
                <div className='imgeditbtns col s12 m12 l6'>
                    <div className='deletebtn valign-wrapper'>
                        <Link><span><i class="material-icons">delete</i>Delete</span></Link>
                    </div>
                    <p className='or'>OR</p>
                    <div className='otherimgbtn  valign-wrapper'>
                        <Link><span><i class="material-icons">photo_camera</i>Upload another image</span></Link>
                    </div>
                    <div className='imgdispnext  valign-wrapper'>
                        <Link to='/ImageScan'><span>Next &nbsp; &nbsp; &gt;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
