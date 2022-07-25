function getBreakouts(rows) {
	let breakouts = {};

	for (let issue of rows) {
		let slot = issue.Slot;
		let o = breakouts[slot];

		if (!breakouts[slot]) {
			o = breakouts[slot] = {
				slot,
				participants: [],
				issues: []
			};
		}

		o.issues.push({
			name: issue.Name,
			url: issue.URL,
			comment: issue.Comments
		});

		// Get participants
		for (let prop in issue) {
			if (slot
				 && issue[prop] === slot
				 && !["Slot", "Assigned?", "Comments"].includes(prop)
				 && !o.participants.includes(prop)) {
				o.participants.push(prop);
			}
		}
	}

	return Object.values(breakouts).sort((a, b) => {
		[a, b] = [a.slot, b.slot];

		if (!b || a < b) {
			return -1;
		}
		if (!a || a > b) {
			return 1;
		}
		return 0;
	});
}

function intersection(arr1, arr2) {
	let set2 = new Set(arr2);

	return arr1.filter(x => set2.has(x));
}