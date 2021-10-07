export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'sleepio',
    values: [{ name: 'sleepio', value: '#18c3e5' }]
  },
  playroom: { url: 'http://localhost:9000' }
}
