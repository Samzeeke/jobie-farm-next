import React from "react";
import { Modal } from "react-bootstrap";

interface DialogModalProps {
  show: boolean;
  handleClose: () => void;
  children?: any;
}

const DialogModal: React.FC<DialogModalProps> = ({
  show,
  handleClose,
  children,
}: DialogModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      {children}
    </Modal>
  );
};

export default DialogModal;
