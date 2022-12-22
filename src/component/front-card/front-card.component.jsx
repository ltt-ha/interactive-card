import './front-card.styles.scss'
import {ReactComponent as CardLogo} from '../../assets/images/card-logo.svg' 

const FrontCard=({cardNumber,cardName,mm, yy})=>{
return <div className='front-card-container'>
    {/* <img className='bg-img' src={frontImg} alt='front'/> */}
    <CardLogo className='card-logo' />
    <span className='in-card card-number'>{cardNumber}</span>
    <span className='in-card name'>{cardName}</span>
    <span className='in-card valid-date'>{mm}/{yy}</span>
</div>
}
export default FrontCard