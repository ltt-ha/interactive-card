import './card-confirm.styles.scss'
import {ReactComponent as IconComplete} from '../../assets/images/icon-complete.svg'
const CardConfirm=({onClickFunc})=>{
    return <div className='card-confirm-container'>
    <IconComplete className='icon'/>
    <h2>THANK YOU!</h2>
    <p>We've added your card details</p>
    <button onClick={onClickFunc} type="button" className="btn btn-dark button">Continue</button>

</div>
}
export default CardConfirm