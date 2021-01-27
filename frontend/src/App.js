import React from "react";
import NavBar from "./components/navbar/navbar";
import PeopleContainer from "./components/people/peopleContainer";
import PeopleContextProvider from "./contexts/people/peopleContextProvider";

class App extends React.Component {
  render() {
    return (
      <PeopleContextProvider>
        <NavBar></NavBar>
        <PeopleContainer></PeopleContainer>
      </PeopleContextProvider>
    );
  }
}

export default App;
