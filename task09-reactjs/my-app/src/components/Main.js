import React from 'react'

class Main extends React.Component {

  render() {
    return (
      <>
      {/* <!-- characters --> */}
      <div class="main__section-header side-margin">
        <h2>Characters</h2>
        <a class="text-btn" href="/characters"><p class="p-medium">See all</p></a>
      </div>
      <div id="characters-section" class="card-grid side-padding" />
      {/* <!-- islands --> */}
      <div class="main__section-header side-margin">
        <h2>Islands</h2>
        <a class="text-btn" href="/islands"><p class="p-medium">See all</p></a>
      </div>
      <div id="islands-section" class="card-grid side-padding"></div>
      {/* <!-- mist objects --> */}
      <div class="main__section-header side-margin">
        <h2>Mist objects</h2>
        <a class="text-btn" href="/mist-objects"><p class="p-medium">See all</p></a>
      </div>
      <div id="myst-section" class="mist-grid side-padding"></div>
      </>
    )
  }
}

export default Main;
