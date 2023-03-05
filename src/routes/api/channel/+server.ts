import type { RequestHandler } from './$types'
import { parse, stringify } from 'superjson'
import { error, type Config } from '@sveltejs/kit'
import { createChannel } from '../../../model/channel'
import type { User } from '@supabase/supabase-js'

export const config: Config = {
	runtime: 'edge'
}

export const POST: RequestHandler = async ({ request, cookies }) => {
	try {
		const requestData = await request.json()
		const maybeUser = cookies.get('sessionid')

		if (!maybeUser) {
			throw error(401, 'An error occurred')
		}

		const user = parse(maybeUser) satisfies User

		if (!requestData) {
			throw new Error('Request data missing')
		}

		const { title, prompt } = requestData

		if (!prompt) {
			throw new Error('No context provided')
		}

		if (!title) {
			throw new Error('No context provided')
		}

		const channel = await createChannel(user, title, prompt)

		return new Response(
			stringify({
				channel
			})
		)
	} catch (err) {
		console.error(err)
		throw error(500, 'An error occurred')
	}
}
