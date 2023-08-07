import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { RWebShare } from 'react-web-share';

function Button({text,outlined}) {

  const navigate = useNavigate();
  
  return (
    <div>
      {text === "Share"?(
        <RWebShare
        data={{
          text:"A CryptoApp Where you Can track Crypto Coins Live!!!!",
          url:"https://crypto-verse-tan.vercel.app/",
          title:"Nandaja"
        }}
        >
          <button onClick={()=> navigate('/dashboard')} className='outlined-btn'>{text}</button>
        </RWebShare>):
        (<button onClick={()=> navigate('/dashboard')} className='btn'>{text}</button>)}
    </div>
  )
}

export default Button;