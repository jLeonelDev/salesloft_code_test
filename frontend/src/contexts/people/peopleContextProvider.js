import React, { useState, useEffect } from 'react'
import PeopleContext from './peopleContext'
import ApiClient from './../../api/client'

const PeopleContextProvider = ({ children }) => {
	const [peopleList, setPeopleList] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [previousPage, setPreviousPage] = useState(null)
	const [nextPage, setNextPage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const moveToNextPage = async () => {
		if (nextPage != null) {
			setCurrentPage(currentPage + 1)
		}
	}

	const moveToPreviousPage = async () => {
		if (currentPage >= 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	useEffect(() => {
		async function getPeople() {
			setIsLoading(true)
			const people = await ApiClient.getPeopleRequest(currentPage)
			setPeopleList(people.data)
			setPreviousPage(people.metadata.paging.prev_page)
			setNextPage(people.metadata.paging.next_page)
			setIsLoading(false)
		}

		getPeople()
	}, [currentPage])

	const peopleContextState = {
		peopleList,
		currentPage,
		previousPage,
		nextPage,
		isLoading,
		moveToNextPage,
		moveToPreviousPage,
	}

	return (
		<PeopleContext.Provider value={peopleContextState}>
			{children}
		</PeopleContext.Provider>
	)
}

export default PeopleContextProvider
