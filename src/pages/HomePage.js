import React from 'react'
import Header from '../components/Common/Header'
import MainComponent from '../components/LandingPage/MainComponent'
import Footer from '../components/Common/Footer';
import dashboarimg from '../assets/crypto1.png';
import coinPageimg from '../assets/COSMOS.png';
import comparePageimg  from '../assets/cryptoman.png';
import watchlistPageimg  from '../assets/black1.png';
import coinsfalling from '../assets/coinieee.png';
import AppDetails from '../components/LandingPage/AppDetails';
import Carousel from '../components/Carousel';



function HomePage() {

  


  return (
    <div>
      <Header/>
      <MainComponent/>
      <img className="mainsection" src={coinPageimg}></img>
      <Carousel/>
      <section className="mainsection">
      <img className="mainsection" src ={comparePageimg}></img>
      </section>
      <section className="mainsection">
      <img className="mainsection" src={comparePageimg}></img>
      </section>
      <img className="mainsection" src={coinsfalling}></img>

      <Footer/>
    </div>
  )
}

export default HomePage