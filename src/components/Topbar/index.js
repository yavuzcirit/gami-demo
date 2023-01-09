import { ReactComponent as Logo } from '../../assets/gamiLogo.svg'
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';
import './style.scss'

const Topbar = () => {
  return (
    <div className='topbar-wrapper'>
        <div className='topbar-main'>
            <div className='logo-part'><RubberBand><Logo/></RubberBand></div>
            <div className='nav-selections'>
              <Slide top><div className='nav-element'>LAUNCHPAD</div></Slide>
              <Slide top><div className='nav-element'>MOVE</div></Slide>
              <Slide top><div className='nav-element'>MIDLE</div></Slide>
              <Slide top><div className='nav-element'>ASSIST</div></Slide>
              <Slide top><div className='nav-element'>TOOLS</div></Slide>
              <Slide top><button className='buy-gami'>Buy GAMI</button></Slide>  
          </div>
        </div>
    </div>
  )
}

export default Topbar