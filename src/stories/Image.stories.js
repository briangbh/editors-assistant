import React from 'react'
import { Image } from '../components/'

export default {
  title: 'Resources/Image',
  component: Image
}

const Template = (args) => <Image { ...args } />

export const Standard = Template.bind({})
Standard.args = {
  character: 'prof',
  text: 'your favorite Scottish professor'
}

