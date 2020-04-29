import React from "react";

function NavBar(props) {
  return (
    <div className="full-body">
      <nav className="nav-bar">
        <div className="right-nav">
          <NavLink link={"Services"}></NavLink>
          <NavLink link={"Work"}></NavLink>
          <NavLink link={"The Team"}></NavLink>
        </div>
        <div className="left-nav">
          <i class="fas fa-mobile-alt"></i>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

function NavLink(props) {
  return (
    <a href="#" className="nav-link">
      {props.link}
    </a>
  );
}
