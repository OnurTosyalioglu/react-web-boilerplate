import React from 'react'
import { render } from '@testing-library/react'
import Mobile from './Mobile'

test('Mobile component test', () => {
  const Render = render(<Mobile />)

	expect(true).toBe(true)
})
