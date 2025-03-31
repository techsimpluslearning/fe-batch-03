import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddNewTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    priority: "medium",
    description: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset form when opening
      setFormData({ title: "", priority: "medium", description: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      ...formData,
      createdAt: new Date().toISOString().split("T")[0],
    };
    console.log("Submitted Data:", task);

    setIsOpen(false); // Close modal after submission
  };

  return (
    <div  className="main-container">
      <Modal isOpen={isOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Add New Task</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-bold">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
              />
            </div>

            {/* Priority Select */}
            <div className="mb-3">
              <label htmlFor="priority" className="form-label fw-bold">
                Priority
              </label>
              <select
                className="form-select"
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-bold">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button className="btnbackground" type="submit">Create new task</Button>
          </Form>
        </ModalBody>
      </Modal>

      <Button className="btnbackground" onClick={toggleModal}>Create new task</Button>
    </div>
  );
};

export default AddNewTaskButton;
