import type { User } from '@supabase/supabase-js'
import { supabase } from '$lib/supabase'
import type { Channel } from './channel'

export type Message = {
	id: string
	cid: string
	content: string
	uid: string
	prompt: string
}

export async function getMessageByChannel(channel: Channel): Promise<Message[]> {
	const { data, error } = await supabase
		.from<'messages', Message>('messages')
		.select('*')
		.eq('cid', channel.cid)

	if (error) {
		console.error(`getMessageByChannel# error: ${error.message}`)

		return []
	}

	return data as Message[]
}

export async function createMessage(
	user: User,
	channel: Channel,
	content: string,
	prompt: string
): Promise<Message | null> {
	const { data, error } = await supabase
		.from('messages')
		.insert({
			cid: channel.cid,
			content,
			uid: user.id,
			prompt,
			created_at: new Date().toISOString()
		})
		.select()
		.maybeSingle()

	if (error) {
		console.error(`createMessage# error: ${error.message}`)

		return null
	}

	return data as Message
}
