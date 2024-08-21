import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navigation = ({ loggedInUser, setLoggedInUser, scrollToFooter }) => {
  return (
    <nav
      className="bg-primary p-2 fs-2"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {loggedInUser ? (
        <>
          <NavLink
            to="/"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            to="#footer"
            className="text-white"
            style={{ textDecoration: "none" }}
            onClick={scrollToFooter}
          >
            About Us
          </NavLink>
          <NavLink
            to="/login"
            className="text-white"
            style={{ textDecoration: "none" }}
            onClick={() => setLoggedInUser(null)}
          >
            <Button variant="dark">Logout</Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-white"
            }
            style={{ textDecoration: "none" }}
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-white"
            }
            style={{ textDecoration: "none" }}
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
