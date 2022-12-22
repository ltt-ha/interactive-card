import './back-card.styles.scss'
const BackCard=({CVC})=>{
    return <div className='back-card-container'>
    {/* <img className='bg-img' src={frontImg} alt='front'/> */}
    <span className='cvv-number'>{CVC}</span>

</div>
}
export default BackCard