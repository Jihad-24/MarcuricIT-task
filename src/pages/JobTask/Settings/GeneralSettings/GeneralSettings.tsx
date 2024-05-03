import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";

// Define the components for each tab
import GeneralComponent from "./GeneralComponent";
import LogosComponent from "./LogosComponent";
import SocialComponent from "./SocialComponent";

interface TabContentType {
  id: number;
  title: string;
  icon?: string;
}

const tabContents: TabContentType[] = [
  {
    id: 1,
    title: "General",
    icon: "uil-bright",
  },
  {
    id: 2,
    title: "Social",
    icon: "uil-whatsapp",
  },
  {
    id: 3,
    title: "Logos",
    icon: "uil-envelope",
  },
];

const NavTabs = () => {
  return (
    <Card>
      <Card.Body>
        <Tab.Container defaultActiveKey="General">
          <Nav as="ul" variant="tabs">
            {(tabContents || []).map((tab, index) => {
              return (
                <Nav.Item as="li" key={index}>
                  <Nav.Link eventKey={tab.title}>
                    <span className="">{tab.title}</span>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
          <Tab.Content className="text-muted">
            {(tabContents || []).map((tab, index) => {
              return (
                <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index}>
                  {tab.title === "General" && <GeneralComponent />}
                  {tab.title === "Social" && <SocialComponent />}
                  {tab.title === "Logos" && <LogosComponent />}
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

const GeneralSettings = () => {
  return (
    <Row>
      <NavTabs />
      <Col xs={8} className="text-start">
        <Button variant="primary" type="submit" className="btn btn-primary">
          <i className="uil uil-check"></i> Save
        </Button>
      </Col>
    </Row>
  );
};

export default GeneralSettings;
