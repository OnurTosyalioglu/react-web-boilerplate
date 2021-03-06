import React, { Fragment, useState, useEffect } from 'react'

import { Router, Switch, Route } from 'react-router-dom'

import ReactGA from 'react-ga'
import analytics from '../../config/analytics'
import { createBrowserHistory } from 'history'

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
  const history = createBrowserHistory()

  history.listen((location) => {
    ReactGA.initialize(analytics.trackingId)
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  })

  useEffect(() => {})

  return (
    <Fragment>
      <Router history={history}>
        <Navbar />
        <Switch>
          {index.map((v) => (
            <Route
              key={v.key}
              component={v.component}
              path={v.path}
              exact={v.exact}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  )
}

Main.propTypes = props

export default withStyles(styles)(Main)
