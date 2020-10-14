import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('Header component test', () => {
  const Render = render(<Header />)

	expect(true).toBe(true)
})
