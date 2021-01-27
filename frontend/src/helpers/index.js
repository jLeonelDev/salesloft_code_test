function getPossibleDuplicateEmails(peopleList) {
	const differential = 2
	let result = []

	for (let i = 0; i < peopleList.length; i++) {
		if (peopleList[i].email) {
			for (let k = 0; k < peopleList.length; k++) {
				// Same person, there is no email to compare, email to compare has less characters
				if (
					i === k ||
					!peopleList[k].email ||
					peopleList[i].email.length > peopleList[k].email.length
				) {
					continue
				} else {
					const [iEmail, iDomain] = peopleList[i].email.split('@')
					const [kEmail, kDomain] = peopleList[k].email.split('@')

					// We only validate if domain is the same
					if (iDomain === kDomain) {
						const iEmailSubstring = iEmail.slice(
							differential - 1,
							-differential
						)
						if (
							iEmailSubstring !== '' &&
							kEmail.includes(iEmailSubstring)
						) {
							result.push({
								person1: peopleList[i],
								person2: peopleList[k],
								substring: iEmailSubstring,
							})
						}
					}
				}
			}
		}
	}

	return result
}

function getEmailLetterCount(peopleList) {
	let results = []

	for (const person of peopleList) {
		if (person.email) {
			for (const letter of person.email) {
				let letterCount = results.find(
					(letterCount) => letterCount.letter === letter
				)

				if (letterCount) {
					letterCount.count++
				} else {
					letterCount = { letter: letter, count: 1 }

					results.push(letterCount)
				}
			}
		}
	}

	results = results.sort(
		(letterCount, letterCount2) => letterCount2.count - letterCount.count
	)

	return results
}

const exported_functions = {
	getPossibleDuplicateEmails,
	getEmailLetterCount,
}

export default exported_functions
