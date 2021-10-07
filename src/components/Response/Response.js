import React from 'react'

const responseStyle = {
  fontSize: '1.25em',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  color: '#003366'
}

/**
 * Select a response to a question. List of choices, in the center of a scene.
 */
export const Response = ({ question, option1, option2, option3, option4 }) => {
  return (
    <div style={ responseStyle }>
      <div>
        <input type="radio" name={ question } id={ option1 } value={ option1 } checked="checked" />
        <label for={ option1 }>{ option1 }</label>
      </div>

      <div>
        <input type="radio" name={ question } id={ option2 } value={ option2 } />
        <label for={ option2 }>{ option2 }</label>
      </div>

      <div>
        <input type="radio" name={ question } id={ option3 } value={ option3 } />
        <label for={ option3 }>{ option3 }</label>
      </div>

      <div>
        <input type="radio" name={ question } id={ option4 } value={ option4 } />
        <label for={ option4 }>{ option4 }</label>
      </div>
    </div>
  )
}

