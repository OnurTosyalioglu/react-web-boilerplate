import Search from '../page/share/share/Share'
import SearchDetail from '../page/share/shareDetail/ShareDetail'

const search = [
	{
		exact: false,
		path: '/search',
		component: Search,
		key: 'search',
	},
	{
		exact: false,
		path: '/search_detail',
		component: SearchDetail,
		key: 'search_detail',
	},
]

export default search
