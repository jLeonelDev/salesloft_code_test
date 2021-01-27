import PeopleList from "./peopleList";
import EmailLetters from "./emailLetters";
import DuplicateEmails from "./duplicateEmails";

function PeopleContainer() {
  return (
    <div className="container is-fluid mt-5">
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1 className="title is-5">People List</h1>
            </div>
            <PeopleList></PeopleList>
          </div>
        </div>
        <div className="column is-2">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1 className="title is-5">Email Letters Count</h1>
              <EmailLetters></EmailLetters>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1 className="title is-5">Possible Duplicate Mails</h1>
              <DuplicateEmails></DuplicateEmails>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleContainer;
