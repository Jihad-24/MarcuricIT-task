import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormInput } from "../../../../components";
interface UsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEditable: boolean;
  eventData?: any;
  onRemoveData?: () => void;
  onUpdateData?: (data: any) => void;
  onAddData?: (data: any) => void;
  data?: { role: string }[];
}
const UsersModal: React.FC<UsersModalProps> = ({
  isOpen,
  onClose,
  isEditable,
  eventData,
  onRemoveData,
  onUpdateData,
  onAddData,
  data,
}) => {
  const [event] = useState(eventData);
  const [selectedRole, setSelectedRole] = useState(
    data && data.length > 0 ? data[0].role : ""
  );

  // form validation schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required("Please enter user name"),
      role: yup.string().required("Please select a role "),
      email: yup.string().required("Please enter email address"),
    })
  );

  // form methods
  const methods = useForm({ defaultValues: event, resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  // handle form submission
  const onSubmitEvent = (data: any) => {
    if (isEditable && onUpdateData) {
      onUpdateData(data);
    } else if (!isEditable && onAddData) {
      onAddData(data);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="pb-2 px-4 border-bottom-0">
        <Modal.Title id="modal-title">
          <h5> {isEditable ? "Edit Home Visits" : "Create Home Visits"} </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 pb-4 pt-0">
        <form
          noValidate
          name="chat-form"
          id="chat-form"
          onSubmit={handleSubmit(onSubmitEvent)}
        >
          <Row>
            <Col lg={12}>
              <FormInput
                type="text"
                label="User Name"
                name="title"
                className="form-control"
                placeholder="Insert User Name"
                containerClass={"mb-3"}
                register={register}
                key="title"
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FormInput
                type="text"
                label="Email"
                name="email"
                className="form-control"
                placeholder="Insert Email Address"
                containerClass={"mb-3"}
                register={register}
                key="email"
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormInput
                type="select"
                label="Select Role"
                name="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="form-control"
                containerClass={"mb-3"}
                register={register}
                key="role"
                errors={errors}
                control={control}
              >
                {data?.map((item, index) => (
                  <option key={index} value={item.role}>
                    {item.role}
                  </option>
                ))}
              </FormInput>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              {isEditable ? (
                <Button variant="danger" onClick={onRemoveData}>
                  Delete
                </Button>
              ) : null}
            </Col>
            <Col xs={8} className="text-end">
              <Button
                className="btn btn-light me-1"
                onClick={onClose}
                style={{ marginRight: "10px" }}
              >
                Close
              </Button>
              <Button
                variant="success"
                type="submit"
                className="btn btn-success"
              >
                {isEditable ? "Save" : "Create"}
              </Button>
            </Col>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default UsersModal;
