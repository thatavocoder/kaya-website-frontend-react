import React from 'react'
import './CSS/KnowSkin.css'
import SubMenu from '../SubMenu'

export default function KnowSkin() {
    return (
        <div>
            <SubMenu />
            <p className='knowskin'>Know Your Skin</p>
            <div className='ksdetails row'>
                <p className='col s10'><span className='skintypehead'>Skin Type</span></p>
                <div className='ksskip col s2 row'>
                    <i className="material-icons col s6" style={{ 'display': 'inline' }}>edit</i>
                    <p className='col s5' style={{ 'display': 'inline' }}>Edit</p>
                </div>
                <div className='ksques'><p>1</p> <p>How does the skin on the forehead and nose bridge usually feel?</p></div>
                <div className='checkopts'>
                    <li>Oily</li>
                </div>
                <div className='ksques'><p>2</p> <p>How does the skin on the sides of your nose feel?</p></div>
                <div className='checkopts'>
                    <li>Oily</li>
                </div>
                <div className='ksques'><p>3</p> <p>How does the skin on your cheeks feel?</p></div>
                <div className='checkopts'>
                    <li>Oily</li>
                </div>
                <div className='ksques'><p>4</p> <p>Which of the following statements would you agree with?</p></div>
                <div className='checkopts'>
                    <li>Oily skin- My skin looks extremely shiny and feels sticky</li>
                </div>
                <div className='ksques'><p>5</p> <p>Please select the option that best fits your skin current skin behavior after washing your face</p></div>
                <div className='checkopts'>
                    <li>Oily skin- Feels fresh and rejuvenated, shine on cheeks, forehead and nose</li>
                </div>
                <div className='ksques'><p>6</p> <p>How does your skin respond to sun exposure/hot humid climate?</p></div>
                <div className='checkopts'>
                    <li>My skin feels sticky and looks dark-oily</li>
                </div>
            </div>
        </div>
    )
}
