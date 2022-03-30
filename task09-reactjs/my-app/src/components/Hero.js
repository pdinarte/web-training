import React from 'react'
import './css/styles.css';

class Hero extends React.Component {

  constructor() {
    super();
    this.state = {
      readText : 'All',
      read : false,
      readState : '',
    };
    this.changeReadState = this.changeReadState.bind(this);
    this.URL = 'https://static.akurey.com/trainings/OnePieceInformation.json';
  }
  
  changeReadState () {
    if(!this.state.read){
      this.setState({readText : 'Less', read : true, readState : 'visible'})}
    else {
      this.setState({readText : 'All', read : false, readState : '',})
    }
  }
  
  render () {
    return (
      <>
      <div className="main__hero">
        {/* <!-- main image --> */}
        <div className="main__hero-img"> 
          <img src="images/everyone.png" alt=""/>
        </div>
        {/* <!-- read more logo --> */}
        <img className={`main__hero-logo ${this.state.readState}`} src="images/logo.png" alt=""/>
        {/* <!-- sinopsis-box --> */}
        <section className="main__hero-sinopsis side-margin">
          <h1>Sinopsis</h1>
          <p className={`p-medium show-text ${this.state.readState}`} >
            Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.
            <br /><br />
            It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.
            <span className="more-text">
              <br /><br />  
              This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.
              <br /><br />
              Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.
              <br /><br />
              It is located in the Red Line and is the geographical antipode of Mary Geoise.
            </span>
          </p>
          <hr />
          <button className="text-btn read-more-btn" onClick={this.changeReadState}>
            <i className={`fa-solid fa-chevron-${this.state.read ? "down" : "up"}`}></i>
            <p className="p-large">Read {this.state.readText}</p>
          </button>
        </section>
      </div>
      </>
    )
  }
};


export default Hero;
