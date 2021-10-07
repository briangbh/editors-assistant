import React from 'react'
import { Scene } from '../components/'

export default {
  title: 'Resources/Scene',
  component: Scene
}

const Template = (args) => <Scene { ...args } />

export const Standard = Template.bind({})
Standard.args = {
  children: []
}

