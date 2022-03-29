import React from 'react'
import CardGrid from './CardGrid';
import MainSection from './MainSection';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      islands : [],
      characters : [],
      mysticObjects : []
    };
    this.URL = 'https://static.akurey.com/trainings/OnePieceInformation.json';
  }

  componentDidMount () {
    fetch( this.URL )
    .then( response => response.json() )
    .then( response => {
      response.characters.sort(this.sortByName);
      response.islands.sort(this.sortByName);
      response.mysticObjects.sort(this.sortByName);
      this.setState(response);
    })
    .catch((e) => console.log('Something went wrong while fetching data from '+this.URL+'. See error below:\n'+ e))
  }

  sortByName = (object1, object2) => {
    let name1 = object1.name.toLowerCase();
    let name2 = object2.name.toLowerCase();
    if (name1 < name2) {return -1;}
    if (name1 > name2) {return 1;}
    return 0;
  };

  render () {    
    return (
      <>
      {/* <!-- characters --> */}
      <MainSection title="Characters" to="/characters" />
      <CardGrid type="character" items={this.state.characters.slice(0,4)}/>
      {/* <!-- islands --> */}
      <MainSection title="Islands" to="/islands" />
      <CardGrid type="island" items={this.state.islands.slice(0,3)}/>
      {/* <!-- mist objects --> */}
      <MainSection title="Mystic objects" to="/mysticObjects" />
      <CardGrid type="mystic" items={this.state.mysticObjects.slice(0,4)}/>
      </>
    )
  }
}

export default Main;
