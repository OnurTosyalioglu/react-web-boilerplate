import React from 'react'
import { render } from '@testing-library/react'
import Social from './Social'

test('Social component test', () => {
  const Render = render(<Social />)

	expect(true).toBe(true)
})
