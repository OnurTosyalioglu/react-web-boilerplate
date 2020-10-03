import React, { Fragment } from 'react'

import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from '@material-ui/core'

import store from './redux/store/index'
import i18n from './locale/i18n'
import theme from './style/theme'
import Main from './page/landing/main/Main'

const App = () => {
  return <Fragment>
		<Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </I18nextProvider>
		</Provider>
  </Fragment>
}

export default App
