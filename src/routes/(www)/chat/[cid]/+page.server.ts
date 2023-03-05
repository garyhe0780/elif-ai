import type { PageServerLoad } from './$types'
import { parse } from 'superjson'
import { redirect } from '@sveltejs/kit'
import type { User } from '@supabase/supabase-js'
import { getChannelById } from '../../../../model/channel'

export const load = (async ({ cookies, params }) => {
	const maybeUser = cookies.get('sessionid')
	if (!maybeUser) {
		throw redirect(303, '/login')
	}

	const cid = params.cid
	const user = parse(maybeUser) satisfies User
	const channel = await getChannelById(cid, user)

	return {
		user,
		channel
	}
}) satisfies PageServerLoad
