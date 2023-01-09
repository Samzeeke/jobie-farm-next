import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DialogModal from "../DialogModal";

interface LoginDialogProp {
  show: boolean;
  handleClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProp> = ({
  show,
  handleClose,
}: LoginDialogProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    console.log("call login api");
    setLoading(true);
    console.log({
      email,
      password,
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <DialogModal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In into your account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleLogin}>
          {loading ? "Please wait..." : "Login"}
        </Button>
      </Modal.Footer>
    </DialogModal>
  );
};

export default LoginDialog;
