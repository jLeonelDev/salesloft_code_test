import React from "react";
import Person from "./person";
import PeopleContext from "./../../contexts/people/peopleContext";

class PeopleList extends React.Component {
  render() {
    let { peopleList } = this.context;
    return peopleList.length > 0
      ? peopleList.map((person) => (
          <div data-testid="people-list" className="column is-4" key={person.email}>
            <Person
              name={person.name}
              email={person.email}
              job_title={person.job_title}
            ></Person>
          </div>
        ))
      : null;
  }
}

PeopleList.contextType = PeopleContext;

export default PeopleList;
