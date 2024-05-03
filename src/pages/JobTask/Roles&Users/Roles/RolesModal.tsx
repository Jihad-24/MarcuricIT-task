import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormInput } from "../../../../components";

interface RolesModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEditable: boolean;
  eventData?: any;
  onRemoveData?: () => void;
  onUpdateData?: (data: any) => void;
  onAddData?: (data: any) => void;
}
const RolesModal: React.FC<RolesModalProps> = ({
  isOpen,
  onClose,
  isEditable,
  eventData,
  onRemoveData,
  onUpdateData,
  onAddData,
}) => {
  const [event] = useState(eventData);

  // form validation schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required("Please enter role name"),
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
          <h5> {isEditable ? "Edit Role Name" : "Create Role Name"} </h5>
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
                label="Roles Name"
                name="title"
                className="form-control"
                placeholder="Insert Roles Name"
                containerClass={"mb-3"}
                register={register}
                key="title"
                errors={errors}
                control={control}
              />
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
export default RolesModal;
