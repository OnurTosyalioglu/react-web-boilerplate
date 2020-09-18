import React from 'react'
import { render } from '@testing-library/react'
import Redirect from './Redirect'

test('Redirect component test', () => {
  const Render = render(<Redirect />)

	expect(true).toBe(true)
})
