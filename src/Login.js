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
      className="mt-5 p-4"
      style={{
        maxWidth: "400px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        background: "linear-gradient(135deg, #ffffff, #e9ecef)",
      }}
    >
      <h1 className="text-center mb-4" style={{ color: "#333" }}>
        Login
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              borderRadius: "8px",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            }}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              borderRadius: "8px",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-4"
          style={{
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          Login
        </Button>
      </Form>
      {errorMessage && (
        <Alert
          variant="danger"
          className="mt-4"
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default Login;
