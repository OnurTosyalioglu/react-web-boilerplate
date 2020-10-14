import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './Navbar'

test('Navbar component test', () => {
  const Render = render(<Navbar />)

	expect(true).toBe(true)
})
