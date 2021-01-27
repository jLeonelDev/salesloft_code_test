import React from 'react'
import PeopleContext from './../../contexts/people/peopleContext'
import Helpers from './../../helpers/'

class EmailLetters extends React.Component {
	render() {
		let { peopleList } = this.context

		const emailLettersList = Helpers.getEmailLetterCount(peopleList)

		return (
			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Letter</th>
						<th>Count</th>
					</tr>
				</thead>
				<tbody>
					{emailLettersList.length > 0
						? emailLettersList.map((emailLetter) => (
								<tr key={emailLetter.letter}>
									<td>{emailLetter.letter}</td>
									<td>{emailLetter.count}</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		)
	}
}

EmailLetters.contextType = PeopleContext

export default EmailLetters
