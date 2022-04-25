import React from 'react'

const MainSection = (props) => {
  return (
    <div className="main__section-header side-margin">
        <h2>{props.title}</h2>
        <a className="text-btn" href={props.to}><p className="p-medium">See all</p></a>
      </div>
  )
}

export default MainSection;
