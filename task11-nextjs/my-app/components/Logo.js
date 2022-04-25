import React from 'react'

const Logo = ({type}) => {
  return (
    <img className={type === "nav" ? "nav__logo" : "main__hero-logo"}  src="images/logo.png" alt=""/>
  )
}

export default Logo;
