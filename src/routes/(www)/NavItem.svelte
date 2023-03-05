<script lang="ts">
	import type { LayoutServerData } from './$types'

	export let data: LayoutServerData['channels'][0]
	export let active = false;
</script>

<a
	href={`/chat/${data.cid}`}
	class={`group px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-slate-300 hover:rounded-sm ${active ? 'bg-slate-300 hover:rounded-sm' : ''}`}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="18"
		height="18"
		fill="currentColor"
		><path fill="none" d="M0 0h24v24H0z" /><path
			d="M14.45 19L12 22.5 9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6.55zm-1.041-2H20V5H4v12h6.591L12 19.012 13.409 17z"
		/></svg
	>
	{data.title}
	<div class="flex-1 justify-end flex items-center gap-2">
		<button class={`group-hover:text-gray-600 ${active ? 'text-gray-600' : 'text-white'}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="18"
				height="18"
				fill="currentColor"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"
				/></svg
			>
		</button>
		<button class={`group-hover:text-gray-600 ${active ? 'text-gray-600' : 'text-white'}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="18"
				height="18"
				fill="currentColor"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"
				/></svg
			>
		</button>
	</div>
</a>
