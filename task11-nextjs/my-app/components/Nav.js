import React from 'react'
import LangButton from './buttons/LangButton';
// import './css/styles.css';
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
      <nav className="side-margin">
        <button className ={`nav__menu fa-solid fa-bars ${this.state.showMenu ? "fa-xmark" : ""}`}
                onClick={this.displayMenu}>
        </button>
        <Logo type="nav" />
        <div className ={`nav__dropdown ${this.state.showMenu ? 'visible' : ''}`}>
          <Link to="/" title="Home" />
          <Link to="/characters.html" title="Characters" />
          <Link to="/islands" title="Islands" />
          <Link to="/mist-objects" title="Mist Objects" />
          <div className ="nav__dropdown-language">
            <LangButton color='grey' lang='en' />
            <LangButton lang='es'/>
          </div>
        </div>
      </nav>
      </>
    )    
  }
}

export default Nav;
