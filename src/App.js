import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const initialUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState(initialUsers);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const saveUsers = (newUser) => {
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BrowserRouter>
      <Navigation
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        scrollToFooter={scrollToFooter}
      />
      <Routes>
        {loggedInUser ? (
          <Route
            path="/"
            element={
              <HomePage movies={movies} setLoggedInUser={setLoggedInUser} />
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <Login
                users={users}
                setLoggedInUser={setLoggedInUser}
                setMovies={setMovies}
                loggedInUser={loggedInUser}
              />
            }
          />
        )}
        <Route
          path="/signup"
          element={<Signup saveUsers={saveUsers} users={users} />}
        />
        <Route
          path="/login"
          element={
            <Login
              users={users}
              setLoggedInUser={setLoggedInUser}
              setMovies={setMovies}
              loggedInUser={loggedInUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
