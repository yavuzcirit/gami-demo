import { ReactComponent as Logo } from '../../assets/gamiLogo.svg'
import './style.scss'

const Topbar = () => {
  return (
    <div className='topbar-wrapper'>
        <div className='topbar-main'>
            <div className='logo-part'><Logo/></div>
            <div className='nav-selections'>
                <div className='nav-element'>LAUNCHPAD</div>
                <div className='nav-element'>MOVE</div>
                <div className='nav-element'>MIDLE</div>
                <div className='nav-element'>ASSIST</div>
                <div className='nav-element'>TOOLS</div>
                <button className='buy-gami'>Buy GAMI</button>
            </div>
        </div>
    </div>
  )
}

export default Topbar