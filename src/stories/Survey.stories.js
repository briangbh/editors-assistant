import React from 'react'
import { Survey } from '../components/'

export default {
  title: 'Pages/Survey',
  component: Survey
}

const Template = (args) => <Survey { ...args } />

export const WeekendPlans = Template.bind({})
WeekendPlans.args = {
  questionText: 'What do you like to do on the weekend?',
  questionName: 'weekend_plans',
  option1: 'Netflix Night',
  option2: 'Tinder Swiping',
  option3: 'Dinner With Friends',
  option4: 'In Da Club',
  label: 'Next Question!',
  kind:  'Pages/Survey',
  story: 'BodyType'
}

export const BodyType = Template.bind({})
BodyType.args = {
  questionText: 'How would you describe your body?',
  questionName: 'body_type',
  option1: 'Thin',
  option2: 'Thicc',
  option3: 'Athleisure-ish',
  option4: 'Body Positive',
  label: 'Next Question!',
  kind:  'Pages/Survey',
  story: 'DanceMove'
}

export const DanceMove = Template.bind({})
DanceMove.args = {
  questionText: 'What is your go-to dance move?',
  questionName: 'dance_move',
  option1: 'The Robot',
  option2: 'The Dougie',
  option3: 'Gangnam Style',
  option4: 'Twerk',
  label: 'Next Question!',
  kind:  'Pages/Survey',
  story: 'FriendsImpression'
}

export const FriendsImpression = Template.bind({})
FriendsImpression.args = {
  questionText: 'How would your friends describe you?',
  questionName: 'friends_impression',
  option1: 'Quite Artistic',
  option2: 'Super Funny',
  option3: 'Always Loyal',
  option4: 'A Little Embarassing',
  label: 'Next Question!'
}

