import { Col, Form, InputGroup, Row } from "react-bootstrap";

const SocialComponent = () => {
  return (
    <form>
      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <i className="uil uil-facebook-f"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"https://facebook.com"}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <i className="uil uil-twitter"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"https://twitter.com"}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              {" "}
              <i className="uil uil-instagram-alt"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"https://instagram.com"}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <i className="uil uil-youtube"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"https://youtube.com"}
            />
          </InputGroup>
        </Col>
      </Row>
    </form>
  );
};

export default SocialComponent;
