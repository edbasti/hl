import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface CreateListProps {
  handleChange: (e?: any) => void;
  singleData: any;
  createList: () => void;
}

const CreateList = ({
  singleData,
  handleChange,
  createList,
}: CreateListProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Create New List
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <input
              type="text"
              placeholder="title"
              name="title"
              value={singleData.title}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="author"
              name="author"
              value={singleData.author}
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createList}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CreateList;
