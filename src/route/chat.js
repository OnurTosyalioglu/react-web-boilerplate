import Chat from '../page/inbox/chat/Chat'
import Conversation from '../page/inbox/conversation/Conversation'

import routes from './routes'

const chat = [
	{
		exact: false,
		path: routes.chat,
		component: Chat,
		key: routes.chat,
	},
	{
		exact: false,
		path: routes.conversation,
		component: Conversation,
		key: routes.conversation,
	},
]

export default chat
