import React from 'react'
import './CSS/GeneralDetails.css'

export default function GeneralDetails() {
    return (
        <div>
            <div className='details row'>
                <p className='details-head genhead col s10'><span className='head'>General Details</span></p>
                <div className='details-head skip col s2 row'>
                    <p className='col s5' style={{'display': 'inline'}}>Skip</p>
                    <i className="material-icons outlined col s6" style={{'display':'inline'}}>east</i>
                </div>
                <div className='ques'><p>1</p> <p>Medical Condition</p></div>
                <div className='checkopts row'>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>Asthma/ Allergies</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>Hypertension</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>Diabetes</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>Keloid Tendency</label>
                    <label className='col s4 m2 l2 checkcont' style={{'display':'inline'}}><input type="checkbox"/><span className='checkmark'></span>Other</label>
                    <label className='col s8 m4 l6 checkcont' style={{'display':'inline'}}><input type="text" style={{'height':'3.5vmin', 'width':'70%', 'marginLeft':'2vmin'}}></input></label>
                    <br/>
                    <label className='curmeds'>Current Medications:</label>
                    <label style={{'marginLeft':'3vmin'}}><input type='text' style={{'width':'50%', 'height':'3.5vmin'}}></input></label>
                </div>
                <div className='ques'><p>2</p> <p>Are you pregnant?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>Yes</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>No</label>
                </div>
                <div className='ques'><p>3</p> <p>Are you breastfeeding?</p></div>
                <div className='checkopts row'>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>Yes</label>
                    <label className='col s12 m6 l4 checkcont'><input type="checkbox"/><span className='checkmark'></span>No</label>
                </div>
            </div>
        </div>
    )
}
