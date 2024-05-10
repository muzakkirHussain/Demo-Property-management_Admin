import React, { useState } from "react";
import { Table } from "../../Components/ReactTable";
import { Button } from "../../Components/Button";
import { Heading } from "../../Components/Heading";
import AdministratorPopup from "../../Components/Popups/AdministratorPopup";
import "./Styles/Tools.scss";
import { CustomCheckBox } from "../../Components/CustomCheckBox";
import { MaintenanceCheckListPopup } from "../../Components/Popups/MaintenanceCheckListPopup";

const ArrearsNotifications = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "8-14 days",
    },
    {
      id: 2,
      name: "30+ days",
    },
    {
      id: 3,
      name: "15-20 days",
    },
    {
      id: 4,
      name: "0-7 days",
    },
  ]);

  const columns = [
    {
      Header: "Arrears Type",
      accessor: "name",
    },
    {
      Header: "Remainder Day",
      accessor: "active",
      Cell: ({ row }) => <p>02</p>,
    },
  ];

  const handleCheckboxChange = (id) => {
    setData((prevData) => {
      return prevData.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            active: !row.active,
          };
        }
        return row;
      });
    });
  };

  const ADMINpaths = [
    { title: "Tools", url: "/tools" },
    { title: "Arrear Reminder List", url: "" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={[]} />
      <div className="administratorSection">
        <span>Arrear Reminder List</span>
        <Button
          title="Create CheckList"
          active={true}
          handleClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: "100%", height: "100%" }}>
          <Table columns={columns} data={data} />
        </div>
      </div>
      <MaintenanceCheckListPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { ArrearsNotifications };
