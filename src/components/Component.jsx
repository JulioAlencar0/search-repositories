
import './../App.css'

export default function Component(props) {
  return (
    <div className='components'>
            <div className='boxlocation'>
                <img id='location' src={props.img} alt="" />
            </div>
            <div className="text">
                <h4 >{props.title}</h4>
                <span  >{props.subtitle}</span>
                <a href='#'className='link'>{props.link}</a>
            </div>
            </div>
  )}
    