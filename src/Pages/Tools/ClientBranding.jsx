import React, { useState } from "react";
import { Table } from "../../Components/ReactTable";
import { Heading } from "../../Components/Heading";
import "./Styles/Tools.scss";
import { ClientBrandingPopup } from "../../Components/Popups/ClientBrandingPopup";
const ClientBranding = () => {
  const columns = [
    {
      Header: "Point of Contact",
      accessor: "Point of Contact",
      disableSortBy: true,
    },
    {
      Header: "Primary Phone",
      accessor: "Primary Phone",
    },
    {
      Header: "Primary Email",
      accessor: "Primary Email",
    },
    {
      Header: "Address",
      accessor: "Address",
    },
  ];

  const data = [
    {
      "Point of Contact": "John Doe",
      "Primary Phone": "123-456-7890",
      "Primary Email": "john@example.com",
      Address: "123 Main St, City, Country",
    },
    {
      "Point of Contact": "Jane Smith",
      "Primary Phone": "987-654-3210",
      "Primary Email": "jane@example.com",
      Address: "456 Elm St, City, Country",
    },
    {
      "Point of Contact": "Alice Johnson",
      "Primary Phone": "111-222-3333",
      "Primary Email": "alice@example.com",
      Address: "789 Oak St, City, Country",
    },
  ];
  const ADMINpaths = [
    { title: "Tools", url: "/tools" },
    { title: "Client & Branding", url: "" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleRowClick = (data) => {
    console.log("Click detected", data);
    setIsOpen(true);
  };

  return (
    <div className="mainSection">
      <Heading paths={ADMINpaths} addons={["search"]} />
      <div className="administratorSection">
        <span>Client & Branding</span>
      </div>
      <div className="mainSectionBottom">
        <div style={{ width: "100%", height: "100%" }}>
          <Table
            columns={columns}
            data={data}
            handleRowClick={handleRowClick}
          />
        </div>
      </div>
      <ClientBrandingPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { ClientBranding };
