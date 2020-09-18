import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

test('Home component test', () => {
  const Render = render(<Home />)

	expect(true).toBe(true)
})
