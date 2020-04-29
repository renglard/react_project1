import React from "react";

function NavBar(props) {
  return (
    <div className="full-body">
      <nav className="nav-bar">
        <div className="right-nav">
          <NavLink link={"SERVICES"}></NavLink>
          <NavLink link={"WORK"}></NavLink>
          <NavLink link={"THE TEAM"}></NavLink>
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
    <a
      href="#"
      className="nav-link"
      style={{
        textDecoration: props.link == "THE TEAM" ? "underline" : "none",
      }}
    >
      {props.link}
    </a>
  );
}
