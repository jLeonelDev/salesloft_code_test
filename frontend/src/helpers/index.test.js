import Helpers from './index'

test('function getPossibleDuplicateEmails - finding duplicates', () => {
	const result = Helpers.getPossibleDuplicateEmails([
		{
			email: 'sakatius@gmail.com',
			job_title: 'Software Engineer',
			name: 'Steven Pease',
		},
		{
			email: 'sakatiuss@gmail.com',
			job_title: 'My Job',
			name: 'Possibly Duplicate',
		},
	])

	expect(result[0].person1).toEqual(
		expect.objectContaining({
			email: 'sakatius@gmail.com',
		})
	)

	expect(result[0].person2).toEqual(
		expect.objectContaining({
			email: 'sakatiuss@gmail.com',
		})
	)
})

test('function getPossibleDuplicateEmails - not finding duplicates', () => {
	const result = Helpers.getPossibleDuplicateEmails([
		{
			email: 'sakatius@gmail.com',
			job_title: 'Software Engineer',
			name: 'Steven Pease',
		},
		{
			email: 'xd@gmail.com',
			job_title: 'My Job',
			name: 'Possibly Duplicate',
		},
	])

	expect(result).toEqual([])
})

test('function getEmailLetterCount - obtain letter number', () => {
	const result = Helpers.getEmailLetterCount([
		{
			email: 'leo@leo.com',
			job_title: 'Software Engineer',
			name: 'Steven Pease',
		},
	])

	expect(result.length).toEqual(7)
	expect(result[0]).toEqual(
		expect.objectContaining({
			letter: 'o',
			count: 3,
		})
	)
	expect(result[1]).toEqual(
		expect.objectContaining({
			letter: 'l',
			count: 2,
		})
	)
	expect(result[2]).toEqual(
		expect.objectContaining({
			letter: 'e',
			count: 2,
		})
	)
	expect(result[3]).toEqual(
		expect.objectContaining({
			letter: '@',
			count: 1,
		})
	)
	expect(result[4]).toEqual(
		expect.objectContaining({
			letter: '.',
			count: 1,
		})
	)
	expect(result[5]).toEqual(
		expect.objectContaining({
			letter: 'c',
			count: 1,
		})
	)
	expect(result[6]).toEqual(
		expect.objectContaining({
			letter: 'm',
			count: 1,
		})
	)
})
