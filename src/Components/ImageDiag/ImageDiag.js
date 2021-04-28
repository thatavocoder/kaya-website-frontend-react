import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from './Images/placeholder.png'
import acnefacials from './Images/acnefacials.png'
import './CSS/ImageDiag.css'

export default function ImageDiag() {
    return (
        <div>
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
                    <div className='diagresults col s12 m12 l6'>
                        <div className='condn valign-wrapper'>
                            <p className='col s12'>
                                <span>Condition of the skin</span>
                                <ul>
                                    <li className='blueli'>Dark Spots</li>
                                    <li className='redli'>Scars</li>
                                    <li className='purpleli'>Pigmented scar</li>
                                    <li className='greenli'>Acne</li>
                                </ul>
                            </p>
                        </div>
                        <div className='condntype  valign-wrapper'>
                            <p className='col s12'>
                                <span>Type of condition of the skin</span>
                                <ol>
                                    <li>Fungal Infection</li>
                                    <li>Pigmentation disorder</li>
                                    <li>Bacterial infection</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drec-cont">
                <div className="drec-head">
                    <p>Recommended Products for your Oily Skin</p>
                </div>
                <div className="drec-cards">
                    <div className="row">
                        <div className="drec-cont col l3 m6 s6">
                            <div className="drec-card-cont">
                                <div className="drec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="drec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="drec-cont col l3 m6 s6">
                            <div className="drec-card-cont">
                                <div className="drec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="drec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div><div className="drec-cont col l3 m6 s6">
                            <div className="drec-card-cont">
                                <div className="drec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="drec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div><div className="drec-cont col l3 m6 s6">
                            <div className="drec-card-cont">
                                <div className="drec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="drec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
