import { ReactComponent as Gami } from '../../assets/gamiBig.svg'
import { ReactComponent as Button } from '../../assets/buttonSearch.svg'
import './style.scss'

const Opener = () => {
  return (
    <div className='opener-wrapper'>
        <div className='part-one'>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.     Mauris molestie velit sem, id tincidunt orci dignissim nec. Quisque malesuada justo</div>
            <div className='button'><Button/></div>
        </div>
        <div className='part-two'><Gami/></div>
    </div>
  )
}

export default Opener