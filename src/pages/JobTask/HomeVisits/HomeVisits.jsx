import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";
import DeleteModal from "../DeleteModal";
import { records as EventData } from "../data";
import "./BasicSwitch.css";
import HomeVisitsModal from "./HomeVisitsModal";

const HomeVisits = () => {
  const [switchStates, setSwitchStates] = useState(
    Array(EventData.length).fill(false)
  );
  const [showAddEditEvent, setShowAddEditEvent] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [selectEventData, setselectEventData] = useState(null);

  const onCloseModal = () => setShowAddEditEvent(false);
  const onOpenModal = () => setShowAddEditEvent(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditableDelete, setIsEditableDelete] = useState(false);
  const onCloseDeleteModal = () => setShowDeleteModal(false);
  const onOpenDeleteModal = () => setShowDeleteModal(true);

  const deleteEvent = () => {
    setIsEditableDelete(true);
    onOpenDeleteModal();
  };

  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };

  const createNewEditEvent = (rowData) => {
    setIsEditable(true);
    setselectEventData(rowData);
    console.log(rowData);
    onOpenModal();
  };
  console.log(selectEventData);

  const handleChange = (index: number) => {
    setSwitchStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Columns configuration for the table
  const columns = [
    {
      Header: "#",
      accessor: "id",
      sort: true,
    },
    {
      Header: "Client Name",
      accessor: "name",
      sort: true,
    },
    {
      Header: "Phone",
      accessor: "phone",
      sort: true,
    },
    {
      Header: "Address",
      accessor: "address",
      sort: true,
    },
    {
      Header: "Visit Date",
      accessor: "date",
      sort: true,
    },

    {
      Header: "Viewed",
      accessor: "",
      sort: false,
      Cell: () => (
        <Dropdown>
          <Dropdown.Toggle
            as="a"
            className="cursor-pointer text-muted arrow-none"
          >
            <i className="uil uil-check fs-14"></i>
          </Dropdown.Toggle>
        </Dropdown>
      ),
    },
    {
      Header: "Status",
      accessor: "",
      sort: false,
      Cell: ({ row }: { row: any }) => (
        <Dropdown>
          <Dropdown.Toggle
            as="a"
            className="cursor-pointer text-muted arrow-none"
          >
            <label className="switch">
              <input
                type="checkbox"
                checked={switchStates[row.index]}
                onChange={() => handleChange(row.index)}
              />
              <div
                className={`slider ${switchStates[row.index] ? "checked" : ""}`}
              >
                <span className="text">
                  {switchStates[row.index] ? "Completed" : "Pending"}
                </span>
              </div>
            </label>
          </Dropdown.Toggle>
        </Dropdown>
      ),
    },
    {
      Header: "Action",
      accessor: "",
      sort: false,
      Cell: ({ row }) => (
        <Dropdown>
          <Dropdown.Toggle
            as="a"
            className="cursor-pointer text-muted arrow-none"
          >
            <i className="uil uil-ellipsis-v fs-14 "></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => createNewEditEvent(row.original)}>
              <i className="uil uil-edit-alt me-2"></i>Edit
            </Dropdown.Item>
            <Dropdown.Item className="text-danger" onClick={deleteEvent}>
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
    { text: "All", value: EventData?.length },
  ];

  return (
    <div>
      <PageTitle
        breadCrumbItems={[
          { label: "Home Visits", path: "/jobtask/home-visits" },
          {
            label: "Home Visits",
            path: "/jobtask/home-visits",
            active: true,
          },
        ]}
        title={"Home Visits"}
      />
      <div
        className="flex justify-between mb-6 "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h1 className="text-xl font-bold"> Home Visits</h1>
          <p className="mt-1 font-bold text-[#4D5154] ">
            JobTask / Home Visits
          </p>
        </div>
        <div>
          <Button
            variant="primary"
            className="mt-2 me-1"
            id="btn-new-event"
            onClick={createNewEvent}
          >
            <i className="bi bi-plus-lg" style={{ marginRight: "8px" }}></i>
            Create Home Visits
          </Button>
        </div>
      </div>

      {showAddEditEvent && (
        <HomeVisitsModal
          isOpen={showAddEditEvent}
          onClose={onCloseModal}
          isEditable={isEditable}
          EventData={selectEventData}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          onClose={onCloseDeleteModal}
          isEditable={isEditableDelete}
        />
      )}
      <Table
        columns={columns}
        data={EventData}
        pageSize={5}
        sizePerPageList={sizePerPageList}
        isSortable={true}
        pagination={true}
        isSearchable={true}
      />
    </div>
  );
};

export default HomeVisits;
