import { ChangeEvent, useRef } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const LogosComponent = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Handle the file upload
    if (file) {
      console.log("File uploaded:", file);
    }
  };

  return (
    <form>
      <Row className="align-items-center">
        <Col md={12} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup onClick={handleClick} style={{ cursor: "pointer" }}>
            <Form.Control
              id="inlineFormInputGroup"
              value={"Choose Report Logo [100 X 100]"}
              readOnly
            />
            <InputGroup.Text>Browse</InputGroup.Text>
            <InputGroup.Text>
              <i className="uil uil-image text-primary"></i>
            </InputGroup.Text>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup onClick={handleClick} style={{ cursor: "pointer" }}>
            <Form.Control
              id="inlineFormInputGroup"
              value={"Choose Logo [100 X 100]"}
              readOnly
            />
            <InputGroup.Text>Browse</InputGroup.Text>
            <InputGroup.Text>
              <i className="uil uil-image text-primary"></i>
            </InputGroup.Text>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </InputGroup>
        </Col>
      </Row>
    </form>
  );
};

export default LogosComponent;
