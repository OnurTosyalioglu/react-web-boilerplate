import Login from '../page/auth/login/Login'
import Signup from '../page/auth/signup/Signup'
import Recover from '../page/auth/recover/Recover'

import routes from './routes'

const auth = [
	{
		exact: false,
		path: routes.login,
		component: Login,
		key: routes.login,
	},
	{
		exact: false,
		path: routes.signup,
		component: Signup,
		key: routes.signup,
	},
	{
		exact: false,
		path: routes.recover,
		component: Recover,
		key: routes.recover,
	},
]

export default auth
