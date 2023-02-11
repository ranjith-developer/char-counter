import './Styles.css'

const UserInput = props => {
  const {inputDetails} = props
  const {userText, textLength} = inputDetails

  return (
    <li className="list-item">
      <p>
        {userText} : {textLength}
      </p>
    </li>
  )
}

export default UserInput
