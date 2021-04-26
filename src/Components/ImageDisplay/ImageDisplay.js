import React from 'react'
import {Link} from 'react-router-dom'
import acnefacials from './Images/acnefacials.png'

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
            <div className='displayimg'>
                <img src={acnefacials}></img>
            </div>
            <div className='deletebtn'>
                <Link><i class="material-icons-outlined">delete</i><p>Delete</p></Link>
            </div>
        </div>
    )
}
