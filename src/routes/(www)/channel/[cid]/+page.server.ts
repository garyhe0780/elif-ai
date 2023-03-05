import type { PageServerLoad } from './$types'
import { parse } from 'superjson'
import { redirect } from '@sveltejs/kit'
import type { User } from '@supabase/supabase-js'
import { getChannelByUser } from '../../../../model/channel'

export const load = (async ({ cookies }) => {
	const maybeUser = cookies.get('sessionid')
	if (!maybeUser) {
		throw redirect(303, '/login')
	}

	const user = parse(maybeUser) satisfies User
	const channels = await getChannelByUser(user)

	return {
		user,
		channels
	}
}) satisfies PageServerLoad
