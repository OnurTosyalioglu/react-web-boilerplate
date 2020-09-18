import React from 'react'
import { render } from '@testing-library/react'
import Account from './Account'

test('Account component test', () => {
  const Render = render(<Account />)

	expect(true).toBe(true)
})
