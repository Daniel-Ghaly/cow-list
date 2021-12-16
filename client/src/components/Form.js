import React from 'react'


class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
      <input placeholder = 'Name' onChange = {this.props.handleNameInput}></input>
      <input placeholder='Description' onChange = {this.props.handleDescriptionInput}></input>
      <button onClick = {this.props.handleSubmit}>Add Cow</button>
      </>
    )
  }
}

export default Form