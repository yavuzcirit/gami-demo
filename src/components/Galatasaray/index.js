import { ReactComponent as Letters} from '../../assets/galatasarayLetters.svg'
import "./style.scss"
const Galatasaray = () => {
  return (
    <div className='card'>
        <div className='inner-card'>
          <div className="galatasaray"><Letters/></div>
        </div>
    </div>
  )
}

export default Galatasaray