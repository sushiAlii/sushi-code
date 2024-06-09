import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header id="navbar">
      <div>
        <Link to="/">
          <h2>Sushi Code</h2>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
