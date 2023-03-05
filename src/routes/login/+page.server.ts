import type { PageServerLoad, Actions } from './$types'
import { stringify } from 'superjson'
import { fail, redirect } from '@sveltejs/kit'
import { loginWithEmail } from '../../model/user'

export const load = (async ({ cookies }) => {
	const user = cookies.get('sessionid')

	if (user) {
		throw redirect(303, '/')
	}
}) satisfies PageServerLoad

export const actions: Actions = {
	login: async ({ cookies, request, url }) => {
		const data = await request.formData()
		const email = data.get('email') as string
		const password = data.get('password') as string

		if (!email) {
			return fail(400, { email, missing: true })
		}

		if (!password) {
			return fail(400, { email, incorrect: true })
		}

		const user = await loginWithEmail(email, password)
		if (!user) {
			return fail(400, { email, incorrect: true })
		}

		cookies.set(
			'sessionid',
			stringify({
				id: user.id,
				email
			})
		)

		throw redirect(303, (url.searchParams.has('redirectTo') || '/') as string)
	}
}
