import React from 'react'

const buttonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1em',
  border: 'none',
  borderRadius: '.75rem',
  padding: '1rem',
  marginLeft: '500px'
}

/**
 * A clickable button. Moves to the next scene.
 */
export const Button = ({ label, kind, story }) => {
  return (
    <button style={ buttonStyle } data-sb-kind={ kind } data-sb-story={ story }>
      { label }
    </button>
  )
}

