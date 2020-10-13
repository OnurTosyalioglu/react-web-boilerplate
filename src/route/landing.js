import Home from '../page/landing/home/Home'

import routes from './routes'

const landing = [
	{
		exact: true,
		path: '/',
		component: Home,
		key: routes.home,
	},
]

export default landing
