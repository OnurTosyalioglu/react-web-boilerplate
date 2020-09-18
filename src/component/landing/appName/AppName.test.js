import React from 'react'
import { render } from '@testing-library/react'
import AppName from './AppName'

test('AppName component test', () => {
  const Render = render(<AppName />)

	expect(true).toBe(true)
})
