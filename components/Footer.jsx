function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-5">
            <a className="brand footer-brand" href="#">
              <span className="brand-icon">
                <i className="bi bi-house-heart-fill"></i>
              </span>
              StayNest
            </a>
            <p className="footer-text">
              A frontend UI recreation project built with React and Bootstrap
              for FEWD Lab Activity 2.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h4>Explore</h4>
            <a href="#stays">Stays</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">About</a>
          </div>

          <div className="col-6 col-md-2">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#safety">Safety</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="col-12 col-md-3">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <span>© 2026 StayNest. FEWD Lab Mini Project.</span>
          <span>Privacy · Terms · Sitemap</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;