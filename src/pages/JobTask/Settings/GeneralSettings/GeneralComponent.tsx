import { Col, Form, InputGroup, Row } from "react-bootstrap";
const currencies = [
  "United States Dollar (USD)",
  "Taka (BDT)",
  "Pound Sterling (GBP)",
  "Canadian Dollar (CAD)",
  "Australian Dollar (AUD)",
  "Japanese Yen (JPY)",
  "Renminbi (CNY)",
  "Indian Rupee (INR)",
  "Euro (EUR)",
  "Brazilian Real (BRL)",
  "Russian Ruble (RUB)",
  "South Korean Won (KRW)",
  "Mexican Peso (MXN)",
  "Indonesian Rupiah (IDR)",
  "Turkish Lira (TRY)",
  "Saudi Riyal (SAR)",
  "South African Rand (ZAR)",
  "Nigerian Naira (NGN)",
  "Argentine Peso (ARS)",
  "Egyptian Pound (EGP)",
  "Thai Baht (THB)",
  "Swiss Franc (CHF)",
];

const GeneralComponent = () => {
  return (
    <form>
      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              {" "}
              <i className="uil uil-file-edit-alt"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"ExtremeLab"}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Select aria-label="Floating label select example">
              {currencies?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
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
              <i className="uil uil-search-alt"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"Egypt"}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <i className="uil uil-phone"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"00201063955280"}
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
              <i className="uil uil-envelope"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"support@extremelab.tech"}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <i className="uil uil-globe"></i>
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"https://www.extremelab.tech"}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={12} className="mb-3">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Username"
              value={"All rights are reserved ExtremeLabCompany@2021"}
            />
          </InputGroup>
        </Col>
      </Row>
    </form>
  );
};

export default GeneralComponent;
