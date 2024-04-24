import React, { useState } from "react";
import { Table } from "../../Components/ReactTable";
import { Button } from "../../Components/Button";
import { Heading } from "../../Components/Heading";
import AdministratorPopup from "../../Components/Popups/AdministratorPopup";
import "./Styles/Tools.scss";

const Administrator = (props) => {
  const columns = [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Email",
      accessor: "Email",
    },
    {
      Header: "Role",
      accessor: "Role",
    },
    {
      Header: "Status",
      accessor: "Status",
    },
    // {
    //   Header: "Download",
    //   accessor: "download",
    //   Cell: (row) => {
    //     return <p className="customDownload">Receipts</p>;
    //   },
    // },
  ];

  const data = [
    {
      date: "25-03-2024",
      description: `Rent for the month 
(2024-03-25 to 2024-04-25)`,
      debit: "4615.38",
      credit: "4615.38",
      download: "Download",
    },
  ];
  const filters = [
    { label: "All", count: 10, background: "#F7F9FB" },
    { label: "Super Admin", count: 10, background: "#BFE4FF" },
    { label: "Property Manager", count: 10, background: "#AC7AFF" },
  ];
  const ADMINpaths = [
    { title: "Tools", url: "/tools" },
    { title: "Administration", url: "" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={["search"]} />
      <div className="administratorSection">
        <span>Administrator</span>
        <Button
          title="Add Administration"
          active={true}
          handleClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: "100%", height: "100%" }}>
          <Table
            columns={columns}
            data={data}
            addons={["Filters"]}
            filterList={filters}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
            // setSearchString={setSearchString}
          />
        </div>
      </div>
      <AdministratorPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { Administrator };
