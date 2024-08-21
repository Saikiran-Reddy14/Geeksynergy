import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

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
        className="mt-5 p-4"
        style={{
          maxWidth: "500px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        }}
      >
        <h1 className="text-center mb-4" style={{ color: "#333" }}>
          Signup
        </h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                borderRadius: "8px",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
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

          <Form.Group controlId="formPhone" className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              style={{
                borderRadius: "8px",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Group>

          <Form.Group controlId="formProfession" className="mt-3">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              as="select"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              style={{
                borderRadius: "8px",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <option value="">Select your profession</option>
              {professions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Form.Control>
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
            Submit
          </Button>
        </Form>
      </Container>

      {errorMessage && (
        <Alert
          variant="danger"
          className="m-3 mx-auto"
          style={{
            maxWidth: "500px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {errorMessage}
        </Alert>
      )}
    </>
  );
};

export default Signup;
