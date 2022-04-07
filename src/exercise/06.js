// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// eslint-disable-next-line no-unused-vars
export const FormWithError = ({onSubmitUsername}) => {
  const inputRef = React.useRef()
  const [error, setError] = React.useState()

  const validInput = () => {
    const value = inputRef.current.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const value = inputRef.current.value
    if (!error) {
      onSubmitUsername(value)
    }
    // onSubmitUsername(e.target.elements.username.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} onChange={validInput} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function UsernameForm2({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [value, setValue] = React.useState('')

  const handleInput = () => {
    setValue(inputRef.current.value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={value}
          ref={inputRef}
          onChange={handleInput}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm2 onSubmitUsername={onSubmitUsername} />
}

export function AppWithErrorMessage() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <FormWithError onSubmitUsername={onSubmitUsername} />
}

export default App
