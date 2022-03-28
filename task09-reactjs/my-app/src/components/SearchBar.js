import React from 'react'

class SearchBar extends React.Component {

  render() {
    return (
      <>
      {/* <!-- search-bar --> */}
      <section class="main__search-bar side-margin">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p class="p-medium">Search Characters, Islands or Objects</p>
      </section>
      </>
    )
  }  
}

export default SearchBar;
