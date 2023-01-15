import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DialogModal from "../DialogModal";

interface signupDialogProp {
  show: boolean;
  handleClose: () => void;
}
interface signupDialogProp {
  show: boolean;
  handleClose: () => void;
}

const signupDialog: React.FC<signupDialogProp> = ({
  show,
  handleClose,
}: signupDialogProp) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    console.log("call signup api");
    setLoading(true);
    console.log({
      name,
      email,
      password,
      confirm password,
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  return (
    <DialogModal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up with us</Modal.Title>
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
          <Form.Group>
            <Form.Label>confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleLogin}>
          {loading ? "Please wait..." : "signup"}
        </Button>
      </Modal.Footer>
    </DialogModal>
  );
};
export default App;