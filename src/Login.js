import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Login = ({ users, loggedInUser, setLoggedInUser, setMovies }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser =
      users &&
      users.find((user) => user.email === email && user.password === password);
    if (foundUser) {
      setErrorMessage("");
      setLoggedInUser(foundUser);
      fetchData();
      navigate("/");
    } else {
      setErrorMessage("Invalid Credentials");
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      fetchData();
    }
  }, [loggedInUser]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://hoblist.com/api/movieList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        }),
      });
      const data = await response.json();
      setMovies(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      className="mt-4"
      style={{ maxWidth: "400px", border: "2px solid #555", padding: "40px" }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Login
        </Button>
      </Form>
      {errorMessage && (
        <Alert variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default Login;
