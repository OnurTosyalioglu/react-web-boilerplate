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

import Account from '../account/Account'
import Information from '../information/Information'

import Header from '../../../component/profile/header/Header'

const Profile = (props) => {
  const { t, i18n } = useTranslation()
  const { classes } = props
  const [index, setIndex] = useState(0)

  useEffect(() => {})

  const tabHandler = (e, index) => setIndex(index)

  return (
    <Fragment>
      <Container maxWidth={'sm'}>
        <Grid container>
          <Header />

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
                label={t('information')}
                className={classes.tab}
              />
              <Tab
                label={t('account')}
                className={classes.tab}
              />
            </Tabs>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}>
              {index === 0 && <Information />}
              {index === 1 && <Account />}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

Profile.propTypes = props

export default withStyles(styles)(Profile)
