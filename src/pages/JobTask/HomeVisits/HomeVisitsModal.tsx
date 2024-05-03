import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormInput } from "../../../components";

interface HomeVisitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEditable: boolean;
  eventData?: any;
  onRemoveData?: () => void;
  onUpdateData?: (data: any) => void;
  onAddData?: (data: any) => void;
}
const HomeVisitsModal: React.FC<HomeVisitsModalProps> = ({
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
      title: yup.string().required("Please enter patients name"),
      date: yup.string().required("Please select date "),
      address: yup.string().required("Please enter Client address"),
      paid: yup.string().required("Please enter paid amount"),
      phone: yup.string().required("Please enter phone number"),
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
                label="Client Name"
                name="title"
                className="form-control"
                placeholder="Insert Client Name"
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
                label="Client Address"
                name="address"
                className="form-control"
                placeholder="Insert Client Address"
                containerClass={"mb-3"}
                register={register}
                key="address"
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <FormInput
                type="date"
                label="Date"
                name="date"
                className="form-control"
                placeholder="Insert Date Number"
                containerClass={"mb-3"}
                register={register}
                key="date"
                errors={errors}
                control={control}
              />
            </Col>

            <Col lg={6}>
              <FormInput
                type="text"
                label="Phone"
                name="phone"
                className="form-control"
                placeholder="Insert Phone Number"
                containerClass={"mb-3"}
                register={register}
                key="phone"
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
export default HomeVisitsModal;
