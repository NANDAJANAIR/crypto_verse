import React from 'react'
import Header from '../components/Common/Header'
import MainComponent from '../components/LandingPage/MainComponent'
import Footer from '../components/Common/Footer';
import firstimage from '../assets/firstimage.png';
import thirdimage  from '../assets/thirdimage.png';
import lastimage from '../assets/lastimage.png';
import Carousel from '../components/Carousel';



function HomePage() {

  


  return (
    <div>
      <Header/>
      <MainComponent/>
      <img className="mainsection" src={firstimage}></img>
     
      
      <img className="mainsection" src ={thirdimage}></img>
      <Carousel/>
      
      
      
      <img className="mainsection" src={lastimage}></img>

      <Footer/>
    </div>
  )
}

export default HomePage