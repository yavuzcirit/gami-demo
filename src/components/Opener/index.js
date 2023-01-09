import { useState,useEffect } from 'react'
import { ReactComponent as Gami } from '../../assets/gamiBig.svg'
import { ReactComponent as Button } from '../../assets/buttonSearch.svg'
import Flash from 'react-reveal/Flash';
import Swing from 'react-reveal/Swing';
import Slide from 'react-reveal/Slide'
import './style.scss'

const Opener = () => {
  const [name,setName] = useState(false)
//console.log(name)
  useEffect(()=>{
    const interval = setInterval(() => {
      setName(!name)
    }, 900);
    return ()=> clearInterval(interval)
    
  })
  return (
    <div className='opener-wrapper'>
        <div className='part-one'>
          <Slide left>
              <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.     Mauris molestie velit sem, id tincidunt orci dignissim nec. Quisque malesuada justo</div>
              <div className='button'><Button/></div>
          </Slide>
        </div>
        <Slide right>
          <Flash>
             <div className={name ? 'part-two' : "part-two-light"}><Swing><Gami/></Swing></div>
          </Flash>
        </Slide>
    </div>
  )
}

export default Opener