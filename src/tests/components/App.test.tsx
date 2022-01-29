import React from 'react'
import { render } from '@testing-library/react'

import App from '../../components/App'

test('Should render h1 element with expected text', () => {
  const { getByText, debug } = render(<App />)
  expect(getByText('ReactJS App')).toBeTruthy()
  debug(getByText('ReactJS App'))
})
