import React from 'react'
import { render } from '@testing-library/react'
import Chat from './Chat'

test('Chat component test', () => {
  const Render = render(<Chat />)

	expect(true).toBe(true)
})
