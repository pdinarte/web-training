import React from 'react'

const LangButton = ({color, lang}) => {
  return (
    <button className ={`language-btn ${color === "grey" ? "color--grey" : ""}`}>
      <h2>{lang === "en" ? "English" : "Spanish"}</h2>
      <img src={`images/flag_${lang}.png`} className ="flag" alt=""/>
    </button>
  )
}

export default LangButton;
