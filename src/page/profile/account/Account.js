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

const Account = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		
	</Fragment>
}

Account.propTypes = props

export default withStyles(styles)(Account)

