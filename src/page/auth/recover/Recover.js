import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import styles from './styles'
import props from './props'

import {

} from '@material-ui/core'

const Recover = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		
	</Fragment>
}

Recover.propTypes = props

export default  withStyles(styles)(Recover)
