import React from "react";

const PeopleContext = React.createContext({
  peopleList: [],
  currentPage: 1,
  previousPage: null,
  nextPage: null,
  isLoading: false,
  moveToNextPage: null,
  moveToPreviousPage: null
});

export default PeopleContext;
