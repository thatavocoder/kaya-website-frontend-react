import React from 'react'
import { Link } from 'react-router-dom'
import acnefacials from './Images/acnefacials.png'
import './CSS/ImageScan.css'

export default function ImageScan() {
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
                    <div className='imgscan'>
                        <span className='circle'></span>
                    </div>
                </div>
                <div className='imgeditbtns col s12 m12 l6'>
                    <div className='imgdispnext  valign-wrapper'>
                        <Link><span>Next &nbsp; &nbsp; &gt;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
