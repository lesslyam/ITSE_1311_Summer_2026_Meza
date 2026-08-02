import { Link } from "react-router-dom";

function SiteNavbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="brand">
          <img
            src="/images/logo.png"
            alt="Restaurant Logo"
            className="logo"
          />

          <span>Futu-Frenchie Snack Shack</span>
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteNavbar;