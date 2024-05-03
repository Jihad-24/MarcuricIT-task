import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormInput } from "../../../components";

const ContractsModal = ({
  isOpen,
  onClose,
  isEditable,
  eventData,
  onRemoveEvent,
  onUpdateEvent,
  onAddEvent,
  EventData,
}) => {
  const [event] = useState(eventData);
  console.log(EventData);

  // form validation schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required("Please enter contractor name"),
      company: yup.string().required("Please enter company name"),
      discount: yup.string().required("Please enter discount Rate"),
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
  const onSubmitEvent = (data) => {
    if (isEditable && onUpdateEvent) {
      onUpdateEvent(data);
    } else if (!isEditable && onAddEvent) {
      onAddEvent(data);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="pb-2 px-4 border-bottom-0">
        <Modal.Title id="modal-title">
          <h5> {isEditable ? "Edit Contract" : "Add Contract"} </h5>
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
            <Col sm={12}>
              <FormInput
                type="text"
                label="Contractor Name"
                name="title"
                className="form-control"
                placeholder="Insert Contractor Name"
                value={EventData?.name}
                containerClass={"mb-3"}
                register={register}
                key="title"
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <FormInput
                type="text"
                label="Company Name"
                name="company"
                className="form-control"
                value={EventData?.company}
                placeholder="Insert Company Name"
                containerClass={"mb-3"}
                register={register}
                key="company"
                errors={errors}
                control={control}
              />
            </Col>
            <Col sm={6}>
              <FormInput
                type="text"
                label="Discount %"
                name="discount"
                value={EventData?.discount}
                className="form-control"
                placeholder="Insert Discount %"
                containerClass={"mb-3"}
                register={register}
                key="discount"
                errors={errors}
                control={control}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              {isEditable ? (
                <Button variant="danger" onClick={onRemoveEvent}>
                  Delete
                </Button>
              ) : null}
            </Col>
            <Col xs={8} className="text-end">
              <Button className="btn btn-light me-1" onClick={onClose}>
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
export default ContractsModal;
