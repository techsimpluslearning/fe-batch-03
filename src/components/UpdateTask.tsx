import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
} from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { FaEdit } from "react-icons/fa";

interface dropdownOptionTypes {
  value: string;
  label: string;
}

export interface valuesType {
  title: string;
  description: string;
  status: null | dropdownOptionTypes;
  dueDate: Date;
  importance: null | dropdownOptionTypes;
}

const statusOptions: dropdownOptionTypes[] = [
  { value: "todo", label: "ToDo" },
  { value: "inprogress", label: "In-Progress" },
  { value: "completed", label: "Completed" },
];

const impOptions: dropdownOptionTypes[] = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

interface updateButtonType  {
  todos: valuesType[],
}

const UpdateTask = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const {todos} = props;

  const [values, setValues] = useState<valuesType>({
    title: "",
    description: "",
    status: null,
    dueDate: new Date(),
    importance: null,
  });


  const onclicksidebar = () => {
    setValues(todos);
    setIsOpen(!isOpen);
  };

  const buttonText = "Update Task";

  const onValueChange = (field: string, value: any) => {
    setValues({ ...values, [field]: value });
  };

  const onSubmit = () => {
    setValues({
      title: "",
      description: "",
      status: null,
      dueDate: new Date(),
      importance: null,
    });
    setIsOpen(false);
  };

  return (
    <div>
      <Modal 
        className="model"
        isOpen={isOpen}
        toggle={onclicksidebar}
        centered 
      >
        <ModalHeader toggle={onclicksidebar} className="modalheader">
          {buttonText}
        </ModalHeader>
        <ModalBody>
          <Input
            onChange={(e) => onValueChange("title", e.target.value)}
            value={values.title}
            type="text"
            placeholder="Title"
            className="mb-2"
          />
          <Input
            onChange={(e) => onValueChange("description", e.target.value)}
            value={values.description}
            type="textarea"
            placeholder="Description"
            className="mb-2"
          />

          <Select
            onChange={(e) => onValueChange("status", e)}
            options={statusOptions}
            isClearable
            value={values.status}
            className="mb-2"
          />

          <div className="w-100">
            <DatePicker
              onChange={(e) => {
                onValueChange("dueDate", e);
              }}
              selected={values.dueDate}
              className="form-control w-100 mb-2"
              dateFormat="dd-MMM-yyyy"
            />
          </div>

          <Select
            onChange={(e) => onValueChange("importance", e)}
            options={impOptions}
            isClearable
            value={values.importance}
            className="mb-2"
          />
        </ModalBody>
        <ModalFooter>
          <Button className="mt-2" color="primary" onClick={onSubmit}>
            {buttonText}
          </Button>
        </ModalFooter>
      </Modal>

      <div>
        <FaEdit className="edit-todo" onClick={onclicksidebar}/>

      </div>
    </div>
  );
};

export default UpdateTask;

function setTodos(arg0: any[]) {
    throw new Error("Function not implemented.");
}
