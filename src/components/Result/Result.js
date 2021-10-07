import React from 'react'
import { Scene } from '../Scene/Scene'
import { Question } from '../Question/Question'
import { Image } from '../Image/Image'

/**
 * Present the result of a survey.
 */
export const Result = ({ resultText, resultImage, imageText }) => {
  return (
    <Scene>
      <Question text={ resultText } />
      <Image character={ resultImage } text={ imageText } />
    </Scene>
  )
}

