const compare = (original, updated) => {
	const diff = {}

	for (const key in updated) {
		if (updated[key] !== original[key]) {
			diff[key] = updated[key]
		}
	}

	return {
		diff,
		isEql: Object.keys(diff).length === 0
	}
}
