import React from "react";
import NavBar from "./components/navbar/navbar";
import PeopleContextProvider from "./contexts/people/peopleContextProvider";

class App extends React.Component {
  render() {
    return (
      <PeopleContextProvider>
        <NavBar></NavBar>
      </PeopleContextProvider>
    );
  }
}

export default App;
