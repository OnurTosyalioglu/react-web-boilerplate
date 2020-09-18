import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'

import styles from './styles'
import props from './props'
import { useTranslation } from 'react-i18next'

import {

} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const Signup = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		
	</Fragment>
}

Signup.propTypes = props

export default  withStyles(styles)(Signup)
