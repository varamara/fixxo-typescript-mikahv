import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import notFoundImg from '../assets/images/error-404.png'

const NotFoundView: React.FC  = () => {
  return (
    <>
    <MainMenuSection />
    <div className="container d-flex justify-content-center align-items-center" style={ { height: "700px" } }>
      <img src={notFoundImg} className="not-found" alt="not-found" style={{ height: "700px" }}  />
    </div>
    <FooterSection />
    </>
  )
}

export default NotFoundView