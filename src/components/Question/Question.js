import React from 'react'

const questionStyle = {
  fontSize: '2.5em',
  fontFamily: 'sans-serif',
  color: 'white'
}

/**
 * Ask the patient a question. Large font, above the center of the scene.
 */
export const Question = ({ text }) => {
  return (
    <h2 style={ questionStyle }>
      { text }
    </h2>
  )
}

