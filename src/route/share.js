import Share from '../page/share/share/Share'
import ShareDetail from '../page/share/shareDetail/ShareDetail'

import routes from './routes'

const share = [
	{
		exact: false,
		path: routes.share,
		component: Share,
		key: routes.share,
	},
	{
		exact: false,
		path: routes.shareDetail,
		component: ShareDetail,
		key: routes.shareDetail,
	},
]

export default share
