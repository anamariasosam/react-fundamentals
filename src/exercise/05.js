// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, color, children}) => (
  <div
    className={`box box--${size}`}
    style={{backgroundColor: color, fontStyle: 'italic'}}
  >
    {children}
  </div>
)

Box.defaultProps = {
  size: 'default',
}

function App() {
  return (
    <div>
      <Box size="small" color="lightblue">
        small lightblue box
      </Box>
      <Box size="medium" color="pink">
        medium pink box
      </Box>
      <Box size="large" color="orange">
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
