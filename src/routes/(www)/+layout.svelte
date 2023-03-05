<script lang="ts">
	import type { LayoutServerData } from './$types'
	import NavItem from './NavItem.svelte'

	export let data: LayoutServerData
</script>

<div class="flex h-screen w-screen">
	<aside class="flex flex-col px-2 py-4 gap-12 w-64 border-r  border-gray-200">
		<nav class="flex flex-col gap-2 px-2">
			<a href="/chat" class="px-4 py-2 border rounded-sm flex gap-2 items-center text-gray-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="currentColor"
					><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" /></svg
				>
				New chat
			</a>
			<ul>
				{#each data.channels as channel}
					<li>
						<NavItem data={channel} />
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main class="flex-1 overflow-hidden flex flex-col gap-2 relative">
		<div class="h-auto overflow-y-scroll mb-24">
			<slot />
		</div>
	</main>
</div>
