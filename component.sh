#!/bin/bash

mkdir ./$1

echo "import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import props from './props'

import {

} from '@material-ui/core'

const ${1^} = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		
	</Fragment>
}

${1^}.propTypes = props

export default withStyles(styles)(${1^})
" >> $1/${1^}.js

echo "import React from 'react'
import { render } from '@testing-library/react'
import ${1^} from './${1^}'

test('${1^} component test', () => {
  const Render = render(<${1^} />)

	expect(true).toBe(true)
})
" >> $1/${1^}.test.js

echo "import propTypes from 'prop-types'

export default {

}" >> $1/props.js

echo "const styles = theme => ({

})

export default styles
" >> $1/styles.js

yarn prettier --write $1/*

