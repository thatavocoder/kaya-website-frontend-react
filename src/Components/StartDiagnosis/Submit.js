import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/GeneralDetails.css'

export default function Submit() {
    return (
        <div>
            <Link to='/UploadImage'><input type='submit' value='Next      &gt;' className='nextbtn'></input></Link>
        </div>
    )
}
