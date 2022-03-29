import React from 'react'

const Logo = (props) => {
  return (
    <img className={props.type === "nav" ? "nav__logo" : "main__hero-logo"} width={props.w} height={props.h} src="images/logo.png" />
  )
}

export default Logo;
