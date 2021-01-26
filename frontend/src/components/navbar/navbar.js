import "./navbar.css";

function NavBar() {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu p_always-display">
        <div className="navbar-start">
          <button class="button is-primary is-medium p_fixed-button-size">
            Previous Page
          </button>
        </div>

        <div className="navbar-item">
          <h1 class="title">Page</h1>
        </div>

        <div className="navbar-end">
          <button class="button is-primary is-medium p_fixed-button-size">
            Next Page
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
