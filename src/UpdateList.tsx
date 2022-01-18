import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface UpdateListProps {
  elementId: string;
  getList: (elementId: string) => void;
  handleChange: () => void;
  singleData: any;
  categories: any;
  updateList: (elementId: string) => void;
}

const UpdateList = ({
  elementId,
  getList,
  handleChange,
  singleData,
  categories,
  updateList,
}: UpdateListProps) => {
  console.log(singleData);
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
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <input
              type="text"
              placeholder="title"
              name="title"
              value={singleData.title}
              onChange={handleChange}
            ></input>
            <br></br>
            <input
              type="text"
              placeholder="author"
              name="author"
              value={singleData.author}
              onChange={handleChange}
            ></input>
            <br></br>
            <Form.Select name="category" onChange={handleChange}>
              {categories.map((item: any) => (
                <option
                  key={item.id}
                  selected={item.id === singleData.category}
                  value={item.id}
                >
                  {item.title}
                </option>
              ))}
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateList(elementId)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateList;
