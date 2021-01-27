import React from "react";
import PeopleContext from "./../../contexts/people/peopleContext";
import Helpers from "./../../helpers/";

class DuplicateEmails extends React.Component {
  render() {
    let { peopleList } = this.context;
    const posibleDuplicates = Helpers.getPossibleDuplicateEmails([
      ...peopleList,
    ]);

    return (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Email</th>
            <th>Possible Duplicate</th>
          </tr>
        </thead>
        <tbody>
          {posibleDuplicates.length > 0
            ? posibleDuplicates.map((posibleDuplicate) => (
                <tr key={posibleDuplicate.person1.email}>
                  <td>{posibleDuplicate.person1.email}</td>
                  <td>{posibleDuplicate.person2.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
}

DuplicateEmails.contextType = PeopleContext;

export default DuplicateEmails;
