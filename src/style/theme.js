import { createMuiTheme } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
		typography: {
			fontFamily: '',
		},
    primary: {
      main: indigo[500],
    },
  },
})

export default theme
