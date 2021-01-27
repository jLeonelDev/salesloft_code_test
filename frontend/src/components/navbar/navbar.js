import "./navbar.css";
import React from "react";
import PeopleContext from "./../../contexts/people/peopleContext";

class NavBar extends React.Component {
  render() {
    let {
      isLoading,
      currentPage,
      nextPage,
      moveToNextPage,
      moveToPreviousPage,
    } = this.context;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu p_always-display">
          <div className="navbar-start">
            <button
              className={
                isLoading
                  ? "button is-primary is-medium is-loading p_fixed-button-size"
                  : "button is-primary is-medium p_fixed-button-size"
              }
              onClick={moveToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
          </div>

          <div className="navbar-item">
            <h1 className="title">Page {currentPage}</h1>
          </div>

          <div className="navbar-end">
            <button
              className={
                isLoading
                  ? "button is-primary is-medium is-loading p_fixed-button-size"
                  : "button is-primary is-medium p_fixed-button-size"
              }
              onClick={moveToNextPage}
              disabled={nextPage === null}
            >
              Next Page
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.contextType = PeopleContext;

export default NavBar;
