import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './PassChar';

function App() {

  let [uppercase, setuppercase] = useState(false)
  let [lowercase, setlowercase] = useState(false)
  let [Symbols, setsymbols] = useState(false)
  let [number, setnumber] = useState(false)
  let [passwordlen, setPasswordlen] = useState(10)
  let [fpass, setpass] = useState('')

  let createPassword=()=>{
    let charSet =''
    let finalPass=''
    if(uppercase || lowercase ||number ||Symbols){
        if(uppercase) charSet+=UC;
        if(lowercase) charSet+=LC;
        if(number) charSet+=NC;
        if(Symbols) charSet+=SC;
        for(let i=0;i<passwordlen;i++){
          finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        setpass(finalPass);
    }
    else{
      alert("please select atleast one")
    }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      <div className='passwordBoxin'>
        <input type='text' readOnly  value={fpass}/> <button onClick={copypass}>Copy</button>
      </div>

      <div className='passlength'>
        <lable>Password length</lable>
        <input type='number' max={15} min={5} value={passwordlen} onChange={(e)=>setPasswordlen(e.target.value)} />
      </div>

      <div className='passlength'>
        <lable>Include uppercase letters</lable>
        <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)} />
      </div>

      <div className='passlength'>
        <lable>Include lowecase letters</lable>
        <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
      </div>

      <div className='passlength'>
        <lable>Include numbers</lable>
        <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
      </div>

      <div className='passlength'>
      <lable>Include Symbols</lable>
      <input type='checkbox' checked={Symbols} onChange={()=>setsymbols(!Symbols)}/>
    </div>

    <button className='btn' onClick={createPassword}>Generator password</button>

    </div>
  );
}

export default App;
