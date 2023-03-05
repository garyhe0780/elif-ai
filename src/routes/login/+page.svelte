<script lang="ts"></script>

<div class="min-h-full m-auto">
	<div
		class="flex flex-1 flex-col justify-center py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<svg data-name="OpenAI Logo" width="24px" height="24px" viewBox="140 140 520 520"
					><defs
						><linearGradient id="linear" x1="100%" y1="22%" x2="0%" y2="78%"
							><stop offset="0%" stop-color="rgb(131,211,231)" /><stop
								offset="2%"
								stop-color="rgb(127,203,229)"
							/><stop offset="25%" stop-color="rgb(86,115,217)" /><stop
								offset="49%"
								stop-color="rgb(105,80,190)"
							/><stop offset="98%" stop-color="rgb(197,59,119)" /><stop
								offset="100%"
								stop-color="rgb(197,59,119)"
							/></linearGradient
						></defs
					><path
						id="logo"
						d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"
						fill="#202123"
					/></svg
				>
				<h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div class="mt-8">
				<div class="mt-6">
					<form method="POST" class="space-y-6" action="?/login">
						<div>
							<label for="email" class="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div class="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									class="block w-full rounded-md border-0 p-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="space-y-1">
							<label for="password" class="block text-sm font-medium leading-6 text-gray-900">
								Password
							</label>
							<div class="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									class="block w-full rounded-md border-0 p-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									class="h-4 w-4 rounded border-gray-300 text-black focus:black"
								/>
								<label for="remember-me" class="ml-2 block text-sm text-gray-900">
									Remember me
								</label>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="flex w-full justify-center rounded-sm bg-black py-4 px-6 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
