import { useEffect } from 'react'
import Opener from '../../components/Opener'
import WhatWeDo from '../../components/WhatWeDo'
import Footer from '../../components/Footer'

const Main = () => {
  return (
    <div className='main-wrapper'>
        <Opener />
        <WhatWeDo />
        <Footer />
    </div>
  )
}

export default Main