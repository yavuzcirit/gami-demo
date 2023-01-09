import './style.scss'
import { ReactComponent as LaunchPad } from '../../assets/launchpad.svg'
import { ReactComponent as Midle} from '../../assets/midle.svg'
import { ReactComponent as GamiMove} from '../../assets/gamimove.svg'
import { ReactComponent as Tools} from '../../assets/tools.svg'

const Card = ({svg,text,key}) => {
    console.log(svg,text,key)

  return (
    <div className='card'>
        <div className='inner-card'>
            <div className='logos'>{
                svg===0 ? <LaunchPad/> : svg===1 ? <Midle /> : svg===2 ? <GamiMove /> : svg===3 || svg ===4 ? <Tools /> : ""
            }</div>
            <div className='text'>{text}</div>
            <div className='visit'>Visit</div>
        </div>
    </div>
  )
}

export default Card