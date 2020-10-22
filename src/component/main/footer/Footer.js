import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import props from './props'

import {
	Grid,
} from '@material-ui/core'

import Social from '../social/Social'
import Copyright from '../copyright/Copyright'
import Mobile from '../mobile/Mobile'

const Footer = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		<Grid container>
		</Grid>
	</Fragment>
}

Footer.propTypes = props

export default withStyles(styles)(Footer)

