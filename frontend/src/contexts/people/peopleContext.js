import React from "react";

const PeopleContext = React.createContext({
  peopleList: [],
  currentPage: 1,
  previousPage: null,
  nextPage: null,
  isLoading: false,
  moveToNextPage: () => {},
  moveToPreviousPage: () => {},
});

export default PeopleContext;
