import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>PetGuide</h1>
      <nav>
        <ul>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/signin">
            <li>Sign In</li>
          </Link>
          <Link to="/">
            <li>Dashboard</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
