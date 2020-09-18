import React from 'react'
import { render } from '@testing-library/react'
import Login from './Login'

test('Login component test', () => {
  const Render = render(<Login />)

	expect(true).toBe(true)
})
