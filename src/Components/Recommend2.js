import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from './Images/placeholder.png'
import './CSS/Recommend2.css'

export default function Rec2ommend2() {
    return (
        <div>
            <div className="rec2-cont">
                <div className="rec2-head">
                    <p>Recommended Products for your Oily Skin</p>
                </div>
                <div className="rec2-cards">
                    <div className="row">
                        <div className="rec2-cont col s3">
                            <div className="rec2-card-cont">
                                <div className="rec2-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec2-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="rec2-cont col s3">
                            <div className="rec2-card-cont">
                                <div className="rec2-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec2-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div><div className="rec2-cont col s3">
                            <div className="rec2-card-cont">
                                <div className="rec2-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec2-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div><div className="rec2-cont col s3">
                            <div className="rec2-card-cont">
                                <div className="rec2-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec2-card-btn">
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
