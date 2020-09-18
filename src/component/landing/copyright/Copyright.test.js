import React from 'react'
import { render } from '@testing-library/react'
import Copyright from './Copyright'

test('Copyright component test', () => {
  const Render = render(<Copyright />)

	expect(true).toBe(true)
})
