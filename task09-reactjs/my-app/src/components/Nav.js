import React from 'react'
import LangButton from './buttons/LangButton';
import './css/styles.css';
import Link from './Link';
import Logo from './Logo';
// import {appendScript} from './scripts/appendScript'

class Nav extends React.Component {
  
  constructor() {
    super();
    this.state = {showMenu : false};
    this.displayMenu = this.displayMenu.bind(this);
  }

  displayMenu () {
    this.setState({showMenu : !this.state.showMenu})
  }

  render() {
    return (
      <>
      <nav class="side-margin">
        <button class="nav__menu fa-solid fa-bars"></button>
        <img class="nav__logo" src="images/logo.png" alt="" />
        <div class="nav__dropdown">
          <a href="/" >Home</a>
          <a href="/characters.html">Characters</a>
          <a href="/islands">Islands</a>
          <a href="/mist-objects">Mist Objects</a>
          <div class="nav__dropdown-language">
            <button class="language-btn color--grey"><h2>English</h2><img src="images/flag_en.png" alt="" class="flag" /></button>
            <button class="language-btn"><h2>Spanish</h2><img src="images/flag_es.png" alt="" class="flag" /></button>
          </div>
        </div>
      </nav>
      </>
    )    
  }
}

export default Nav;
