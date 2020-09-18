import React, {Fragment} from 'react';
import {I18nextProvider} from 'react-i18next'
import i18n from './locale/i18n'
import Main from './page/landing/main/Main'
import { ThemeProvider } from '@material-ui/core'
import theme from './style/theme'

const App = () => {  
	return <Fragment>
		<I18nextProvider i18n={i18n}>
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		</I18nextProvider>
	</Fragment>
}

export default App;
