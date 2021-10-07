import React from 'react'
import { withLinks } from '@storybook/addon-links'
import { Button } from '../components/'

export default {
  title: 'Resources/Button',
  component: Button,
  decorators: [withLinks]
}

const Template = (args) => <Button { ...args } />

export const Standard = Template.bind({})
Standard.args = {
  label: 'Click Here',
  kind:  'Resources/Button',
  story: 'Standard'
}

