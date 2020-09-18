import Inbox from '../page/chat/inbox/Inbox'
import Conversation from '../page/chat/conversation/Conversation'

const chat = [
	{
		exact: false,
		path: '/inbox',
		component: Inbox,
		key: 'inbox',
	},
	{
		exact: false,
		path: '/conversation/:id',
		component: Conversation,
		key: 'converation',
	},
]

export default chat
