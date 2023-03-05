onmessage = async (e) => {
	postMessage('loading')

	await fetch('/api/channel', {
		method: 'POST',
		body: JSON.stringify(e.data)
	})

	postMessage('success')
}

export {}
