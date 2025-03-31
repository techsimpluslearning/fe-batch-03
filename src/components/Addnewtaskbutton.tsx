import { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import "./Addnewtaskbutton.css"; 

const AddNewTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    priority: "medium",
    description: "",
    dueDate: "",
    status: "progress",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset form when opening modal
      setFormData({
        title: "",
        priority: "medium",
        description: "",
        dueDate: "",
        status: "progress",
      });
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
      createdAt: new Date().toISOString().split("T")[0], // Date formatting
    };

    console.log("Submitted Data:", task);
    setIsOpen(false); // Close modal after submission
  };

  return (
    <div className="main-container">
      {/* Modal for Adding New Task */}
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
                placeholder="Enter task title"
                required
              />
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
                placeholder="Enter task description"
                required
              ></textarea>
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

            {/* Status Select */}
            <div className="mb-3">
              <label htmlFor="status" className="form-label fw-bold">
                Status
              </label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="progress">In Progress</option>
                <option value="success">Success</option>
                <option value="complete">Complete</option>
              </select>
            </div>


{/* Due Date */}
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label fw-bold">
                Due Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <Button className="custom-btn" type="submit">
              Create Task
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Open Modal Button */}
      <Button className="custom-btn" onClick={toggleModal}>
        Create New Task
      </Button>
    </div>
  );
};

export default AddNewTaskButton;