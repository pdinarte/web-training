import React from 'react'
import './css/styles.css';
import Link from './Link';
import Logo from './Logo';
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
        <Logo type="nav" />
        <div className ="nav__dropdown">
          <Link to="/" title="Home" />
          <Link to="/characters.html" title="Characters" />
          <Link to="/islands" title="Islands" />
          <Link to="/mist-objects" title="Mist Objects" />
          <div className ="nav__dropdown-language">
            <button className ="language-btn color--grey"><h2>English</h2><img src="images/flag_en.png" className ="flag" alt=""/></button>
            <button className ="language-btn"><h2>Spanish</h2><img src="images/flag_es.png" className ="flag" alt=""/></button>
          </div>
        </div>
      </nav>
      </>
    )    
  }
}

export default Nav;
