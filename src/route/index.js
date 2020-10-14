import auth from './auth'
import landing from './landing'
import chat from './chat'
import inbox from './inbox'
import profile from './profile'
import search from './search'
import share from './share'

const index = [
	...landing,
	...auth,
	...inbox,
	...chat,
	...profile,
	...share,
	...search,
]

export default index
