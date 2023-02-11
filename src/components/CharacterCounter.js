import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from './UserInput'
import './Styles.css'

class CharacterCounter extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  handleUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  addUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInput = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-input-image"
      />
    ) : (
      userInputList.map(eachInput => (
        <UserInput key={eachInput.id} inputDetails={eachInput} />
      ))
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <div className="app-container">
        <div className="character-counter-container">
          <h1 className="left-heading">
            Count the characters like a <br /> Boss...
          </h1>
          <ul className="input-list">{this.renderUserInput()}</ul>
        </div>
        <div className="input-container">
          <h1 className="counter-heading">Character Counter</h1>
          <form onSubmit={this.addUserInput}>
            <input
              type="text"
              value={userInput}
              onChange={this.handleUserInput}
              placeholder="Enter the characters here"
              className="input"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
