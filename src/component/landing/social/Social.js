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

} from '@material-ui/core'

const Social = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		
	</Fragment>
}

Social.propTypes = props

export default withStyles(styles)(Social)

