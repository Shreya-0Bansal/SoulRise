import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="title">SoulRise</h1>
          </div>
          <div className="col-md-3">
            <ul className="nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Objectives
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/create/createId" className="nav-link">
                  Campaign Marketplace
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="nav">
              <li className="nav-item">
                <Link href="/contact/contactId" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="title">Follow us:</h3>
            <div className="profile">
              <a target="_blank" href="https://www.instagram.com" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                <i className="fab fa-instagram"></i>
              </a>
              <a target="_blank" href="https://github.com" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Like us">
                <i className="fab fa-github"></i>
              </a>
              <a target="_blank" href="https://www.whatsapp.com" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
