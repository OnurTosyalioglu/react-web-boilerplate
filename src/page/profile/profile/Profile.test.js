import React from 'react'
import { render } from '@testing-library/react'
import Profile from './Profile'

test('Profile component test', () => {
  const Render = render(<Profile />)

	expect(true).toBe(true)
})
