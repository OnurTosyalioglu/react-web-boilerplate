import React from 'react'
import { render } from '@testing-library/react'
import Share from './Share'

test('Share component test', () => {
  const Render = render(<Share />)

	expect(true).toBe(true)
})
