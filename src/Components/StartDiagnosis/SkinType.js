import React from 'react'
import './CSS/GeneralDetails.css'

export default function SkinType() {
    return (
        <div>
            <div className='details row'>
                <p className='details-head genhead col s12'><span className='head'>Skin Type</span></p>
                <div className='ques row'><p className='col s1'>1</p> <p className='col s10'>How does the skin on the forehead and nose bridge usually feel?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Oily</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Normal</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Changes as per environment</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Hot and Flushed</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Dry</label>
                </div>
                <div className='ques row'><p className='col s1'>2</p> <p className='col s10'>How does the skin on the sides of your nose feel?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Oily</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Normal</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Changes as per environment</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Hot and Flushed</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Dry</label>
                </div>
                <div className='ques row'><p className='col s1'>3</p> <p className='col s10'>How does the skin on your cheeks feel?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Oily</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Normal</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Changes as per environment</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Hot and Flushed</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox" /><span className='checkmark'></span>Dry</label>
                </div>
                <div className='ques row'><p className='col s1'>4</p> <p className='col s10'>Which of the following statements would you agree with?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Oily skin- My skin looks extremely shiny and feels sticky</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Normal skin- My Skin Is Neither Very Oily Nor Very Dry</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Combination skin- My cheeks feel a little dry but nose and forehead (T-Zone) feel fresh and shiny</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Sensitive skin- My skin feels hot,red and flushed with change of temperature/sun exposure</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Dry skin- None Of The Above</label>
                </div>
                <div className='ques row'><p className='col s1'>5</p> <p className='col s10'>Please select the option that best fits your skin current skin behavior after washing your face</p></div>
                <div className='checkopts row'>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Oily skin- Feels fresh and rejuvenated, shine on cheeks, forehead and nose</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Normal skin- My skin feels dry immediately after washing but normalizes in sometime</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Combination skin- My cheeks feel a little dry but nose and forehead(T-Zone) feel fresh and shiny</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Sensitive skin- My skin feels red and itchy immediately after washing</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Dry skin- My skin feels stretched, dry and lifeless</label>
                </div>
                <div className='ques row'><p className='col s1'>6</p> <p className='col s10'>How does your skin respond to sun exposure/hot humid climate?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>My skin feels sticky and looks dark-oily</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>My skin feels the same-normal</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>The skin on my nose and forehead tend to become very sticky and shiny-combination</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>My face feels hot ,flushed and red-sensitive</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>My face looks lifeless, dull and patchy-dry</label>
                </div>
                <div className='ques row'><p className='col s1'>7</p> <p className='col s10'>Please select the option that best describes your skin behavior to Moisturisers/Cosmetics</p></div>
                <div className='checkopts row'>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Oily-I cannot use anything on my face,I tend to get pimples immediately</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Normal- I don’t usually need a moisturiser and am comfortable with cosmetics</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Combination- I usually only apply moisturiser on my cheeks and don’t get the right kind of cosmetics. The skin on my T-Zone differs from full face</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Sensitive- My skin tends to breakout into rashes,so I use only particular products</label>
                    <label className='col s12 checkcont'><input type="checkbox" /><span className='checkmark'></span>Dry- My skin feels stretched, lifeless, patchy .Need to apply moisturiser atleast 1-2 times a day</label>
                </div>
            </div>
        </div>
    )
}
