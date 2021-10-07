import React from 'react'
import { Result } from '../components/'

export default {
  title: 'Pages/Result',
  component: Result
}

const Template = (args) => <Result { ...args } />

export const Pomeranian = Template.bind({})
Pomeranian.args = {
  resultText: 'Your dog breed is ...',
  resultImage: 'pomeranian',
  imageText: 'pomeranian'
}

