import React from 'react'
import './css/styles.css';
// import {appendScript} from './scripts/appendScript'

class Nav extends React.Component {
  // componentDidMount() {
  //   appendScript("./scripts/main.js");
  // }

  render() {
    return (
      <>
      <nav className="side-margin">
        <button className ="nav__menu fa-solid fa-bars"></button>
        <img className ="nav__logo" src="images/logo.png" />
        <div className ="nav__dropdown">
          <a href="/" >Home</a>
          <a href="/characters.html">Characters</a>
          <a href="/islands">Islands</a>
          <a href="/mist-objects">Mist Objects</a>
          <div className ="nav__dropdown-language">
            <button className ="language-btn color--grey"><h2>English</h2><img src="images/flag_en.png" className ="flag"/></button>
            <button className ="language-btn"><h2>Spanish</h2><img src="images/flag_es.png" className ="flag"/></button>
          </div>
        </div>
      </nav>
      </>
    )    
  }
}

export default Nav;
