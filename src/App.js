import logo from './logo.svg';
import './App.scss';
// import CardInfoForm from './component/card-info/card-info.component';
import InputMask from 'react-input-mask';
import { useState, useEffect } from 'react'
import BackCard from './component/back-card/back-card.component';
import FrontCard from './component/front-card/front-card.component';
import CardConfirm from './component/card-confirm/card-confirm.component';

function App() {
  const [Cardname, setName]=useState('Jane Applesed');
  const [Cardnumber, setNumber]=useState('0000 0000 0000 0000');
  const [month, setMonth]=useState('00');
  const [year, setYear]=useState('00');
  const [CVC, setCVC]=useState('000');
  const [isNumber,setIsNumber]=useState(true);
  const [onConfirm,setOnConfirm]=useState(false);
  const onClickHandler=()=>{
return setOnConfirm(!onConfirm)
  }
    useEffect(()=>{
      var letters = "^[0-9 ]+$";
      if(Cardnumber.toString().match(letters)) {
      setIsNumber(true); }
      else  {
      setIsNumber(false); }
    },[Cardnumber])
return <div>
<BackCard CVC={CVC} />
<FrontCard cardName={Cardname.toUpperCase()} cardNumber={Cardnumber} mm={month} yy={year}/>
{onConfirm? <CardConfirm onClickFunc={onClickHandler}/>:
<div className='main-container'>
<div className="form-container">
      <div className="field-container">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input id="name" maxLength="20" type="text" placeholder='e.g. Jane Applesed' 
          onChange={(event)=>setName(event.target.value)} />
      </div>
      <div className="field-container">
          <label htmlFor="cardnumber">CARD NUMBER</label>
          <InputMask mask='**** **** **** ****' maskChar=''id="cardnumber"    placeholder='1234 5678 9123 0000'
              onChange={(event)=>setNumber(event.target.value)} />
          {/* <span className={isNaN(+Cardnumber) ?'alert':'hidden'}>Wrong format, number only</span> */}
          <span className={isNumber ?'hidden':'alert'}>Wrong format, number only</span>
      </div>
      <div className="field-container">
          <label htmlFor="exp-mm">EXP. DATE (MM/YY)</label>
          <InputMask mask='99' maskChar='' id="exp-mm" type="text" pattern="[0-9]*" inputMode="numeric" placeholder='MM'
              onChange={(event)=>setMonth(event.target.value)} />
          <span className={month.length ?'hidden':'alert'}>Can't be blank</span>
      </div>
      <div className="field-container">
          <label htmlFor="exp-yy" className='hidden'>   .  </label>
          <InputMask mask='99' maskChar='' id="exp-yy" type="text" pattern="[0-9]*" inputMode="numeric" placeholder='YY'
              onChange={(event)=>setYear(event.target.value)}/>
              <span className={year.length ?'hidden':'alert'}>Can't be blank</span>
      </div>
      <div className="field-container">
          <label htmlFor="CVC">CVC</label>
          <InputMask mask='999' maskChar='' id="CVC" type="text" pattern="[0-9]*" inputMode="numeric" placeholder='e.g. 123'
              onChange={(event)=>setCVC(event.target.value)}/>
              <span className={CVC.length ?'hidden':'alert'}>Can't be blank</span>
      </div>
      <button onClick={onClickHandler} type="button" className="btn btn-dark button">Confirm </button>
  </div>
  
</div>}
</div>
}

export default App;
