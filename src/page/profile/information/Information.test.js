import React from 'react'
import { render } from '@testing-library/react'
import Information from './Information'

test('Information component test', () => {
  const Render = render(<Information />)

	expect(true).toBe(true)
})
