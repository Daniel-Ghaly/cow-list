import React from 'react'


class EditForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
      <div>Edit Cow:</div>
      <form onSubmit = {() => {this.props.handleEditForm(event)}}>
      <input type = 'text' placeholder = 'New Name' ></input>
      <input type = 'text' placeholder='New Description' ></input>
      <button type = "submit">Edit Cow</button>
      </form>
      </>

    )
  }
}

export default EditForm