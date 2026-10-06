function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top site-navbar">
      <div className="container">
        <a className="brand" href="#">
          <span className="brand-icon">
            <i className="bi bi-house-heart-fill"></i>
          </span>
          StayNest
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto nav-links">
            <li className="nav-item">
              <a className="nav-link active" href="#stays">Stays</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experiences">Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="host-btn">Become a host</button>
            <button className="profile-btn" aria-label="Profile">
              <i className="bi bi-list"></i>
              <i className="bi bi-person-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;