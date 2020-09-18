import React from 'react'
import { render } from '@testing-library/react'
import Main from './Main'

test('Main component test', () => {
  const Render = render(<Main />)

	expect(true).toBe(true)
})
