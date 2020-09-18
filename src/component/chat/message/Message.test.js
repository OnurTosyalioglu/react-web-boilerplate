import React from 'react'
import { render } from '@testing-library/react'
import Message from './Message'

test('Message component test', () => {
  const Render = render(<Message />)

	expect(true).toBe(true)
})
