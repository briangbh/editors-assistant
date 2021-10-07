import React from 'react'
import { Question } from '../components/'

export default {
  title: 'Resources/Question',
  component: Question
}

const Template = (args) => <Question { ...args } />

export const Standard = Template.bind({})
Standard.args = {
  text: 'What is your Sleep Score?'
}

