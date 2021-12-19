import React from 'react'


class Cow extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
    return(
      <li onClick = {() => {this.props.handleCowClick(this.props.index)}}>{this.props.cow.name}
      <button onClick = {() => {this.props.handleDelete(this.props.index)}}>Delete</button>
      </li>
    )
  }
}

export default Cow