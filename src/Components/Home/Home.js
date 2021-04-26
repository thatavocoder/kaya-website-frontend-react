import React from 'react'
import IntroBox from './IntroBox'
import Recommend from './Recommend'
import Recommend2 from './Recommend2'
import SlideShow from './SlideShow'
import Footer from '../Footer'
import SubMenu from '../SubMenu'

export default function Home() {
    return (
        <div>
            <SubMenu/>
            <IntroBox />
            <Recommend />
            <Recommend2 />
            <SlideShow/>
            <Footer />
        </div>
    )
}
