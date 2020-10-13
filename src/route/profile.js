import Profile from '../page/profile/profile/Profile'

import routes from './routes'

const profile = [
	{
		exact: false,
		path: routes.profile,
		component: Profile,
		key: routes.profile,
	},
]

export default profile
