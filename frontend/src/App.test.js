import { render, screen, act } from '@testing-library/react'
import App from './App'
import ApiClient from './api/client'

test('renders learn react link', () => {
	render(<App />)
	const linkElement = screen.getByText('People List')
	expect(linkElement).toBeInTheDocument()
})

test('Test Application people is shown correctly', async () => {
	ApiClient.getPeopleRequest = jest.fn().mockReturnValue({
		metadata: {
			filtering: {},
			paging: {
				current_page: 1,
				next_page: 2,
				per_page: 100,
				prev_page: null,
			},
			sorting: {
				sort_by: 'updated_at',
				sort_direction: 'DESC NULLS LAST',
			},
		},
		data: [
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
		],
	})

	await act(async () => render(<App />))

	const pageTextElement = screen.getByText('Page 1')
	const peopleElement = screen.getAllByTestId('people-list')
	expect(pageTextElement).toBeInTheDocument()
	expect(peopleElement.length).toEqual(2)
})
