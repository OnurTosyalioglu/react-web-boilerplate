import React from 'react'
import { render } from '@testing-library/react'
import Auth from './Auth'

test('Auth component test', () => {
  const Render = render(<Auth />)

	expect(true).toBe(true)
})
