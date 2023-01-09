import './style.scss'
import Card from '../Card'

const WhatWeDo = () => {
  return (
    <div className='section-wrapper'>
      <div className='header'>What We Do</div>
      <div className='card-wrapper'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default WhatWeDo