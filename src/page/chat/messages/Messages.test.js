import React from 'react'
import { render } from '@testing-library/react'
import Messages from './Messages'

test('Messages component test', () => {
  const Render = render(<Messages />)

	expect(true).toBe(true)
})
