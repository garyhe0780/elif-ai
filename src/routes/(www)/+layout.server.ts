import type { User } from '@supabase/supabase-js'
import { redirect } from '@sveltejs/kit'
import { parse } from 'superjson'
import { getChannelByUser } from '../../model/channel'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ url, cookies, params }) => {
	const maybeUser = cookies.get('sessionid')
	if (!maybeUser) {
		throw redirect(303, '/login')
	}

	const user = parse(maybeUser) satisfies User
	const channels = await getChannelByUser(user)
	const cid = params.cid;

	return {
		cid,
		user,
		channels
	}
}) satisfies LayoutServerLoad
