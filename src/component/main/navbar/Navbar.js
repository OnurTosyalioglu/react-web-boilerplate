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

import AppIcon from '../appIcon/AppIcon'
import AppName from '../appName/AppName'

const Navbar = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		<AppBar>
			<Toolbar>
				<Grid container justify={'center'}>
					<AppIcon />
					<AppName />
					<LocaleSwitch />
				</Grid>
			</Toolbar>
		</AppBar>
		<div className={classes.toolbar} />
	</Fragment>
}

Navbar.propTypes = props

export default withStyles(styles)(Navbar)
