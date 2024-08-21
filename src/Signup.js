import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = ({ saveUsers, users }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [profession, setProfession] = useState("");
  const professions = ["Developer", "Designer", "Manager", "Other"];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, password, email, phone, profession };
    const userExist = users.find(
      (user) => user.email === email || user.phone === phone
    );

    if (userExist) {
      setErrorMessage(
        "A user with this email address or phone number already exists!"
      );
    } else {
      saveUsers(newUser);
      alert("Signup Successful!");
      setName("");
      setPassword("");
      setEmail("");
      setPhone("");
      setProfession("");
      navigate("/login");
    }
  };

  return (
    <>
      <Container
        className="mt-4"
        style={{ maxWidth: "400px", border: "2px solid #555", padding: "40px" }}
      >
        <h1 style={{ textAlign: "center" }}>Signup</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
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
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
          </Form.Group>

          <Form.Group controlId="formProfession">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              as="select"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option value="">Select profession</option>
              {professions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
        </Form>
      </Container>
      {errorMessage && (
        <Alert
          variant="danger"
          className="m-3 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          {errorMessage}
        </Alert>
      )}
    </>
  );
};

export default Signup;
