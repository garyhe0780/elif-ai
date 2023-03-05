<script lang="ts">
	import type { CreateCompletionResponse } from 'openai'
	import { SSE } from 'sse.js'

	let prompt = ''
	let context = ''
	let loading = false
	let error = false
	let answer = ''

	const handleSubmit = async () => {
		loading = true
		error = false
		answer = ''

		const eventSource = new SSE('/api/explain', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ context, prompt })
		})

		context = ''

		eventSource.addEventListener('error', (e) => {
			error = true
			loading = false
			alert('Something went wrong!')
		})

		eventSource.addEventListener('message', (e) => {
			try {
				loading = false

				if (e.data === '[DONE]') {
					return
				}

				const completionResponse: CreateCompletionResponse = JSON.parse(e.data)

				const [{ text }] = completionResponse.choices

				answer = (answer ?? '') + text
			} catch (err) {
				error = true
				loading = false
				console.error(err)
				alert('Something went wrong!')
			}
		})

		eventSource.stream()
	}

	const setPrompt = (val: string) => {
		prompt = val
	}
</script>

<div class="flex-1 flex flex-col items-center mt-12 gap-4">
	<h1 class="text-2xl mb-6">ChatGPT Playground</h1>
	<div class="bg-red-500 text-white px-4 py-2 rounded-md">
		You need to set a prompt(aka role) first for ChatGPT API to work
	</div>
	<div class="flex flex-col gap-2">
		<span>Below are some prompt you can use:</span>
		<ul class="flex flex-col gap-2">
			<li>
				<button
					class="px-4 py-2 bg-gray-100 rounded-sm flex items-center gap-2"
					on:click={() => setPrompt("you are kid garden teacher who love to answer kid's question")}
				>
					you are kid garden teacher who love to answer kid's question
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
						><path fill="none" d="M0 0h24v24H0z" /><path
							d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
						/></svg
					>
				</button>
			</li>
			<li>
				<button
					class="px-4 py-2 bg-gray-100 rounded-sm flex items-center gap-2"
					on:click={() => setPrompt("you are kid garden teacher who love to answer kid's question")}
				>
					you are kid garden teacher who love to answer kid's question
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
						><path fill="none" d="M0 0h24v24H0z" /><path
							d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
						/></svg
					>
				</button>
			</li>
		</ul>
	</div>
</div>
<div class="absolute bottom-12 left-0 right-0">
	<form class="flex flex-col lg:mx-auto lg:max-w-3xl" on:submit|preventDefault={() => handleSubmit()}>
		<div class="flex items-center gap-4 border border-gray-200 py-2 px-4 rounded-md w-full shadow-md mb-2">
			<div class="flex-1 h-[24px]">
				<textarea
					disabled={!prompt}
					bind:value={context}
					class="outline-none appearance-none resize-none h-[20px] max-h-[200px] w-full"
				/>
			</div>
			<button class="flex items-center" disabled={!prompt}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
					><path fill="none" d="M0 0h24v24H0z" /><path
						d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
					/></svg
				>
			</button>
		</div>
		{#if !prompt}
			<p class="text-xs text-gray-400">You need to choose one of those prompts or create your own first to start a new conversion with ChatGPT</p>
		{/if}
	</form>
</div>
