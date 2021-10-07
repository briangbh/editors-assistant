import React from 'react'
import { Scene } from '../Scene/Scene'
import { Question } from '../Question/Question'
import { Response } from '../Response/Response'
import { Button } from '../Button/Button'

/**
 * Ask a question, with a set of responses and a button.
 */
export const Survey = ({
  questionText, questionName, option1, option2, option3, option4,
  label, kind, story
}) => {
  return (
    <Scene>
      <Question text={ questionText } />
      <Response question={ questionName }
                option1={ option1 } 
                option2={ option2 }
                option3={ option3 }
                option4={ option4 } />
      <Button label={ label } kind={ kind } story={ story } />
    </Scene>
  )
}

