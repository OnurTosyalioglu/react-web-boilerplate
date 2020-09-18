import React from 'react'
import { render } from '@testing-library/react'
import Body from './Body'

test('Body component test', () => {
  const Render = render(<Body />)

	expect(true).toBe(true)
})
