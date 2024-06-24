import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <button type="button">Crop Data</button>
        </Link>
        <Link to="/data">
        <button type="button">All Data</button>
        </Link>
        <Link to="/yield">
        <button type="button">Aggregrate Data</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
