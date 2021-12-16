import React from 'react'
import axios from 'axios'
import Cow from './Cow.js'
import Form from './Form.js'
import Popup from './Popup.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cows:[],
      nameInput:'',
      descriptionInput:'',
      selectedCow: null
    }
  }

  componentDidMount() {


    axios({
      url: '/cows',
      method: 'get'
    })
    .then((res)=> {
      var cows = res.data.slice()
      this.setState({cows:cows})
      console.log(res.data)
    })
    .catch(error=> {
      console.log(error)
    })

  }

  handleNameInput(e) {
    console.log('t')
    this.setState({nameInput:e.target.value})
  }


  handleDescriptionInput(e) {
    this.setState({descriptionInput:e.target.value})
  }


  handleSubmit() {
    var cow = {name:this.state.nameInput, description: this.state.descriptionInput}
    axios({
      url: '/cows',
      data: cow,
      method: 'post'
    })
    .then(res => {
      console.log(res)
      var cows = this.state.cows.slice()
      cows.push(cow)
      this.setState({cows: cows})
    })
    .catch(err => {
      console.log(err)
    })


  }

  handleCowClick(index) {
    var cows = this.state.cows.slice()
    var selectedCow = cows[index]
    this.setState({selectedCow: selectedCow})
  }



  render() {

    if (this.state.selectedCow) {
      return (
        <>
          <Form handleDescriptionInput = {this.handleDescriptionInput.bind(this)} handleSubmit = {this.handleSubmit.bind(this)} handleNameInput = {this.handleNameInput.bind(this)}/>
          <Popup cow = {this.state.selectedCow}/>
          {this.state.cows.map((cow, index) => {
            console.log(index);
            return <Cow index = {index} handleCowClick = {this.handleCowClick.bind(this)} cow = {cow}/>
          })}
        </>
      )
    }

    return(
      <>

        <Form handleDescriptionInput = {this.handleDescriptionInput.bind(this)} handleSubmit = {this.handleSubmit.bind(this)} handleNameInput = {this.handleNameInput.bind(this)}/>
        {this.state.cows.map((cow, index) => {
          console.log(index);
          return <Cow index = {index} handleCowClick = {this.handleCowClick.bind(this)} cow = {cow}/>
        })}
      </>
    )
  }
}

export default App