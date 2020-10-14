import Inbox from '../page/inbox/inbox/Inbox'

import routes from './routes'

const inbox = [
	{
		exact: false,
		path: routes.inbox,
		component: Inbox,
		key: routes.inbox,
	},
]

export default inbox
