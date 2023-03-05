import type { User } from '@supabase/supabase-js'
import { redirect } from '@sveltejs/kit'
import { parse } from 'superjson'
import { getChannelByUser } from '../../model/channel'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ url, cookies }) => {
	const maybeUser = cookies.get('sessionid')
	const path = url.pathname

	if (!maybeUser) {
		throw redirect(303, '/login')
	}

	const user = parse(maybeUser) satisfies User
	const channels = await getChannelByUser(user)

	return {
		path,
		user,
		channels
	}
}) satisfies LayoutServerLoad
