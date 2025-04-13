import { useContext } from "react";
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
import { TaskContext } from "../TaskContext";

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

const Addnewtaskbutton = () => {
  const {
    isOpen,
    setIsOpen,
    values,
    setValues,
    todos,
    setTodos,
    editTaskId,
  }: any = useContext(TaskContext);

  const onclicksidebar = () => {
    setIsOpen(!isOpen);
  };

  console.log("Hello", editTaskId);

  const buttonText = editTaskId !== null ? "Update Task" : "Add New Task";

  const onValueChange = (field: string, value: any) => {
    let newData = { ...values, [field]: value };
    setValues(newData);

    editTaskId !== null &&
      sessionStorage.setItem("values", JSON.stringify(newData));
  };

  const onSubmit = () => {
    if (editTaskId !== null) {
      let todosCopy = JSON.parse(JSON.stringify(todos));
      todosCopy.splice(editTaskId, 1, values);
      setTodos(todosCopy);
    } else {
      setTodos([values, ...todos]);
    }

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
        centered // This makes the modal open in the center
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
              className="form-control w-100"
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
        <Button color="" className="btnbackground" onClick={onclicksidebar}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Addnewtaskbutton;
