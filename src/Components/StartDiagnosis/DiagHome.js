import React from 'react'
import GeneralDetails from './GeneralDetails'
import SkinType from './SkinType'
import Submit from './Submit'

export default function DiagHome() {
    return (
        <div>
            <form className='row'>
                <GeneralDetails />
                <SkinType />
                <Submit/>
            </form>
        </div>
    )
}
