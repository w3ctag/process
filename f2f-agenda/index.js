Mavo.hooks.add("render-start", function (env) {
	if (this.id === "w3ctag_breakouts") {
		let breakout_x_participants = {};

		for (let row of env.data) {
			for (let person in row) {
				let breakout = row[person];

				breakout_x_participants[breakout] ||= [];
				if (breakout && breakout != "x" && !breakout_x_participants[breakout].includes(person)) {
					breakout_x_participants[breakout].push(person);
				}
			}
		}

		env.data = breakout_x_participants;
	}
});

function breakoutsWithoutIssues(breakout_x_participants, slotsWithTopics) {
	slotsWithTopics = slotsWithTopics.map(x => Mavo.value(x));

	let slotsWithPeople = Object.keys(breakout_x_participants).filter(x => !slotsWithTopics.includes(x) && x !== "undefined");

	return slotsWithPeople.map(slot => ({
		slot, participants: breakout_x_participants[slot]
	}));
}

function getBreakouts(rows) {
	let breakouts = {};

	for (let issue of rows) {
		let slot = issue.Slot;
		let o = breakouts[slot];

		if (!breakouts[slot]) {
			o = breakouts[slot] = {
				slot,
				issues: []
			};
		}

		o.issues.push({
			name: issue.Name,
			url: issue.URL,
			comment: issue.Comments
		});
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