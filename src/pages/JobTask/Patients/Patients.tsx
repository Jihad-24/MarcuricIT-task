import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";
import { records as data } from "../data";
import ContractsModal from "./PatientsModal";

const Patients = () => {
  const [showAddEditEvent, setShowAddEditEvent] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const onCloseModal = () => setShowAddEditEvent(false);
  const onOpenModal = () => setShowAddEditEvent(true);

  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };
  const EditEvent = () => {
    setIsEditable(true);
    onOpenModal();
  };

  // Columns configuration for the table
  const columns = [
    {
      Header: "#",
      accessor: "id",
      sort: true,
    },
    {
      Header: "Code",
      accessor: "code",
      sort: true,
    },
    {
      Header: "Patient",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Phone",
      accessor: "phone",
      sort: true,
    },
    {
      Header: "Email",
      accessor: "email",
      sort: true,
    },
    {
      Header: "Total",
      accessor: "total",
      sort: true,
    },
    {
      Header: "Paid",
      accessor: "paid",
      sort: true,
    },
    {
      Header: "Due",
      accessor: "due",
      sort: true,
    },
    {
      Header: "Action",
      accessor: "",
      sort: false,
      Cell: () => (
        <Dropdown>
          <Dropdown.Toggle
            as="a"
            className="cursor-pointer text-muted arrow-none"
          >
            <i className="uil uil-ellipsis-v fs-14 "></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={EditEvent}>
              <i className="uil uil-edit-alt me-2"></i>Edit
            </Dropdown.Item>
            <Dropdown.Item className="text-danger">
              <i className="uil uil-trash me-2"></i>Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  // Size per page list for pagination
  const sizePerPageList = [
    { text: "5", value: 5 },
    { text: "10", value: 10 },
    { text: "25", value: 25 },
    { text: "50", value: 50 },
    { text: "All", value: data?.length },
  ];

  return (
    <div>
      <PageTitle
        breadCrumbItems={[
          { label: "Patients", path: "/jobtask/patients" },
          {
            label: "Patients",
            path: "/jobtask/patients",
            active: true,
          },
        ]}
        title={"Patients"}
      />
      <div
        className="flex justify-between mb-6 "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h1 className="text-xl font-bold"> Patients</h1>
          <p className="mt-1 font-bold text-[#4D5154] ">JobTask / Patients</p>
        </div>
        <div>
          <Button
            variant="primary"
            className="mt-2 me-1"
            id="btn-new-event"
            onClick={createNewEvent}
          >
            <i className="bi bi-plus-lg" style={{ marginRight: "8px" }}></i>
            Create Patients
          </Button>
        </div>
      </div>

      {showAddEditEvent && (
        <ContractsModal
          isOpen={showAddEditEvent}
          onClose={onCloseModal}
          isEditable={isEditable}
          //   eventData={eventData}
          //   onUpdateData={onUpdateData}
          //   onRemoveData={onRemoveData}
          //   onAddData={onAddData}
        />
      )}

      <Table
        columns={columns}
        data={data}
        pageSize={5}
        sizePerPageList={sizePerPageList}
        isSortable={true}
        pagination={true}
        isSearchable={true}
      />
    </div>
  );
};

export default Patients;
