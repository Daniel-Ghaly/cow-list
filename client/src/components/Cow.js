import React from 'react'


class Cow extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
    return(
      <li onClick = {() => {this.props.handleCowClick(this.props.index)}}>{this.props.cow.name}</li>
    )
  }
}

export default Cow