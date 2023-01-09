import './style.scss'

const Card = ({svg,text}) => {
  return (
    <div className='card'>
        <div className='inner-card'>
            <div className='logos'></div>
            <div className='text'></div>
            <div className='visit'></div>
        </div>
    </div>
  )
}

export default Card