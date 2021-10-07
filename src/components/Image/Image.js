import React from 'react'
import profImage from '../../static/prof.png'
import dogImage from '../../static/pomeranian.png'

const imageStyle = {}

/**
 * An image of a Sleepio character.
 */
export const Image = ({ character, text }) => {
  return (
    <img src={ (character == 'prof') ? profImage : dogImage }
         alt={ text }
         width="200"
         height="200" />
  )
}

