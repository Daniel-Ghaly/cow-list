import React from 'react'


class Popup extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
    return(
      <>
        <div id = 'name-popup'>{this.props.cow.name}</div>
        <div id = 'description-popup'>{this.props.cow.description}</div>
      </>
    )
  }
}

export default Popup