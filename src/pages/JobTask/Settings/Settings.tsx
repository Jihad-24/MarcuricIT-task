import { Card, Row } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import NavPills from "./NavPills";
import tabContents from "./tabContents";
import './NavPills.css'

const Settings = () => {
  return (
    <div>
      <PageTitle
        breadCrumbItems={[
          { label: "Settings", path: "/jobtask/settings" },
          {
            label: "Settings",
            path: "/jobtask/settings",
            active: true,
          },
        ]}
        title={"Settings"}
      />
      <Card>
          <h5 className="title">Settings</h5>
        <Card.Body>
          <Row>
            <NavPills tabContents={tabContents} />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Settings;
