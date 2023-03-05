import type { User } from '@supabase/supabase-js'
import { supabase } from '$lib/supabase'

export type Channel = {
	cid: string
	title: string
	uid: string
	prompt: string
}

export async function getChannelByUser(user: User): Promise<Channel[]> {
	const { data, error } = await supabase
		.from<'channels', Channel>('channels')
		.select('*')
		.eq('uid', user.id)

	if (error) {
		console.error(`getChannelByUser# error: ${error.message}`)

		return []
	}

	return data as Channel[]
}

export async function getChannelById(cid: Channel['cid'], user: User): Promise<Channel | null> {
	const { data, error } = await supabase
		.from<'channels', Channel>('channels')
		.select('*')
		.match({ cid: cid, uid: user.id })
		.maybeSingle()

	if (error) {
		console.error(`getChannelById# error: ${error.message}`)

		return null
	}

	return data as Channel
}

export async function createChannel(
	user: User,
	title: string,
	prompt: string
): Promise<Channel | null> {
	const { data, error } = await supabase
		.from('channels')
		.insert({
			title,
			uid: user.id,
			prompt,
			created_at: new Date().toISOString()
		})
		.select()
		.maybeSingle()

	if (error) {
		console.error(`createChannel# error: ${error.message}`)

		return null
	}

	return data as Channel
}
