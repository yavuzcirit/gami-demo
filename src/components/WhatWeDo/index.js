import './style.scss'
import Card from '../Card'
import Galatasaray from '../Galatasaray'

const WhatWeDo = () => {
  const data = [0,1,2,3,4]
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie velit sem, id tincidunt orci dignissim nec. Quisque malesuada justo"
  return (
    <div className='section-wrapper'>
      <div className='header'>What We Do</div>
      <div className='card-wrapper'>
       {data.map((item,index)=><Card text={text} key={index} svg={item} />) }
       <Galatasaray />
      
      </div>
    </div>
  )
}

export default WhatWeDo