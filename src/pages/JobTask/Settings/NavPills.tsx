import { useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

import GeneralSettings from "./GeneralSettings/GeneralSettings";
import "./NavPills.css";
interface TabContentType {
  id: number;
  title: string;
  icon?: string;
}

interface NavPillsProps {
  tabContents: TabContentType[];
}

const NavPills: React.FC<NavPillsProps> = ({ tabContents }) => {
  const [activeTab, setActiveTab] = useState(
    tabContents.length > 0 ? tabContents[0].title : ""
  );

  const tabComponentMap: { [key: string]: JSX.Element } = {
    General: <GeneralSettings />,
  };

  const handleSelect = (tabTitle: string | null) => {
    if (tabTitle) {
      setActiveTab(tabTitle);
    }
  };

  return (
    <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
      <Row>
        <Col sm={2}>
          <Nav as="ul" justify className="flex-column">
            {(tabContents || []).map((tab, index) => {
              return (
                <Nav.Item as="li" key={index}>
                  <Nav.Link
                    className={`cursor-pointer ${
                      activeTab === tab.title ? "active" : ""
                    }`}
                    eventKey={tab.title}
                  >
                    <span className="d-block d-sm-none">{tab.title}</span>
                    <span className="d-none d-sm-block text-start">
                      <i className={tab.icon || ""}></i> {tab.title}
                    </span>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
        <Col sm={10}>
          <Card>
            <h5 className="title2">General Settings</h5>
            <Card.Body>
              <Tab.Content className="text-muted">
                {(tabContents || []).map((tab, index) => {
                  return (
                    <Tab.Pane
                      eventKey={tab.title}
                      id={String(tab.id)}
                      key={index}
                    >
                      {tabComponentMap["General"]}
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default NavPills;
