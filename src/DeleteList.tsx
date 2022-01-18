import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface DeleteListProps {
  elementId: string;
  getList: (elementId: string) => void;
  singleData: any;
  deleteList: (e: any, id: string) => void;
}

const DeleteList = ({
  elementId,
  getList,
  singleData,
  deleteList,
}: DeleteListProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Button
        variant="primary"
        onClick={(e) => {
          handleShow();
          getList(elementId);
        }}
      >
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <input
              type="text"
              placeholder="title"
              name="title"
              value={singleData.title}
              disabled={true}
            ></input>
            <br></br>

            <input
              type="text"
              placeholder="author"
              name="author"
              value={singleData.author}
              disabled={true}
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(event) => deleteList(event, elementId)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteList;
