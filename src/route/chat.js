import Inbox from '../page/chat/inbox/Inbox'
import Conversation from '../page/chat/conversation/Conversation'

import routes from './routes'

const chat = [
	{
		exact: false,
		path: routes.inbox,
		component: Inbox,
		key: 'inbox',
	},
	{
		exact: false,
		path: routes.conversation,
		component: Conversation,
		key: routes.conversation,
	},
]

export default chat
