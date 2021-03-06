import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import props from './props'

import {
  Container,
  Grid,
  Tabs,
  Tab,
} from '@material-ui/core'

import Favorites from '../favorites/Favorites'
import Notifications from '../notifications/Notifications'

const Inbox = (props) => {
  const { t, i18n } = useTranslation()
  const { classes } = props
  const [index, setIndex] = useState(0)

  useEffect(() => {})

  const tabHandler = (e, index) => setIndex(index)

  return (
    <Fragment>
      <Container maxWidth={'sm'}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}>
            <Tabs
              variant={'fullWidth'}
              onChange={tabHandler}
              value={index}>
              <Tab
                label={t('favorites')}
                className={classes.tab}
              />
              <Tab
                label={t('notifications')}
                className={classes.tab}
              />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}>
            {index === 0 && <Favorites />}
            {index === 1 && <Notifications />}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

Inbox.propTypes = props

export default withStyles(styles)(Inbox)
