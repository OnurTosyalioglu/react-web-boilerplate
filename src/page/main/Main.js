import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'

import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import props from './props'

import routes from '../../route/routes'
import index from '../../route/index'

import Navbar from '../../component/main/navbar/Navbar'
import Footer from '../../component/main/footer/Footer'

const Main = (props) => {
	const { t, i18n } = useTranslation()
	const { classes } = props

	useEffect(() => {  })

	return <Fragment>
		<BrowserRouter>
			<Navbar />
			<Switch>
				{
					index.map(v => <Route 
						key={v.key} 
						component={v.component} 
						path={v.path} 
						exact={v.exact}/>)
				}
				<Footer />
			</Switch>
		</BrowserRouter>
	</Fragment>
}

Main.propTypes = props

export default withStyles(styles)(Main)

