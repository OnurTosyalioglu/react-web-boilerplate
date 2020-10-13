import React from 'react'
import { render } from '@testing-library/react'
import PrivateRoute from './PrivateRoute'

test('PrivateRoute component test', () => {
  const Render = render(<PrivateRoute />)

	expect(true).toBe(true)
})
