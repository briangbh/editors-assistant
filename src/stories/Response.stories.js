import React from 'react'
import { Response } from '../components/'

export default {
  title: 'Resources/Response',
  component: Response
}

const Template = (args) => <Response { ...args } />

export const Standard = Template.bind({})
Standard.args = {
  question: 'what_is_your_sleep_score',
  option1: '1.0',
  option2: '3.5',
  option3: '7.5',
  option4: '10.0'
}

