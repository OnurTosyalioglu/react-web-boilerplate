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
	Button,
	Grid,
	Container,
} from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook'

const Login = (props) => {
	const { t, i18n } = useTranslation()
  const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		<Container maxWidth={'sm'}>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Button className={ classes.login }>{t('login')}</Button>
					<Button startIcon={<FacebookIcon/>}>{t('continueWithFacebook')}</Button>
				</Grid>
			</Grid>
		</Container>	
	</Fragment>
}

Login.propTypes =  props

export default withStyles(styles)(Login)
