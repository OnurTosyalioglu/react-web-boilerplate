import Home from '../page/landing/home/Home'

import routes from './routes'

const landing = [
	{
		exact: true,
		path: routes.home,
		component: Home,
		key: routes.home,
	},
]

export default landing
