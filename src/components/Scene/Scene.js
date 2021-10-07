import React from 'react'

const sceneStyle = {
  backgroundColor: '#18c3e5'
}

/**
 * A collection of props to present a concept to a patient.
 */
export const Scene = ({ children }) => {
  return (
    <div style={ sceneStyle }>
      { children }
    </div>
  )
}

