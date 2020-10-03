import auth from './auth'
import landing from './landing'
import chat from './chat'
import profile from './profile'
import search from './search'
import share from './share'

const index = [
	...landing,
	...auth,
	...chat,
	...profile,
	...search,
	...share,
]

export default index
