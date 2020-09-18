import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'

import styles from './styles'
import props from './props'
import { useTranslation } from 'react-i18next'

import {
	AppBar,
	Toolbar,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const Navbar = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>

	</Fragment>
}

Navbar.propTypes = props

export default withStyles(styles)(Navbar)
