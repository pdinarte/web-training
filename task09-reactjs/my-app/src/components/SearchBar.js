import React from 'react'

class SearchBar extends React.Component {

  render() {
    return (
      <>
      {/* <!-- search-bar --> */}
      <section className="main__search-bar side-margin">
        <i className="fa-solid fa-magnifying-glass"></i>
        <p className="p-medium">Search Characters, Islands or Objects</p>
      </section>
      </>
    )
  }  
}

export default SearchBar;
