import Login from '../page/auth/login/Login'
import Signup from '../page/auth/signup/Signup'
import Recover from '../page/auth/recover/Recover'

const auth = [
	{
		exact: false,
		path: '/login',
		component: Login,
		key: 'login',
	},
	{
		exact: false,
		path: '/signup',
		component: Signup,
		key: 'signup',
	},
	{
		exact: false,
		path: '/recover',
		component: Recover,
		key: 'recover',
	},
]

export default auth
