import { useState } from "react";
import "./Styles/Tools.scss";
import { Heading } from "../../Components/Heading";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import arrow_selected from "../../assets/Tools/Arrow_selected.svg";
import arrow_unselected from "../../assets/Tools/Arrow_unselected.svg";
import { Administrator } from "./Administrator";
import { Table } from "../../Components/ReactTable";

const Tools = () => {
  const toolsData = [
    { id: 1, title: "Administrator", url: "/tools/administrator" },
    { id: 2, title: "Client & Branding", url: "/tools/client-branding" },
    { id: 3, title: "Unassigned Records", url: "/tools/unassigned-records" },
    {
      id: 4,
      title: "Maintenance Check List",
      url: "/tools/maintenance-checklist",
    },
    { id: 5, title: "Charge Items", url: "/tools/charge-items" },
    {
      id: 6,
      title: "Arrears Notifications",
      url: "/tools/arrears-notifications",
    },
    { id: 7, title: "Progressions", url: "/tools/progressions" },
    { id: 0, title: "Solace File", url: "/tools/solace-file" },
    {
      id: 9,
      title: "Bulk Upload Templates",
      url: "/tools/bulk-upload-templates",
    },
  ];
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const paths = [{ title: "Tools", url: "" }];

  const [searchString, setSearchString] = useState("");

  return (
    <div className="mainSection">
      {selected === "" && (
        <>
          <Heading paths={paths} addons={[]} />
          <div className="mainSectionCenter">
            <Button
              title="System Administration"
              active={true}
              handleClick={() => {}}
            />
            <Button title="Templates" active={false} handleClick={() => {}} />
          </div>
          <div className="mainSectionBottom">
            <>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "8px",
                }}
              >
                Welcome to Group Set-up for Solace
              </p>
              <div className="toolsContainer">
                {toolsData.map((item, index) => (
                  <div
                    key={index}
                    className={` ${index === selected && "active"}`}
                    onClick={() => {
                      navigate(item.url);
                      setSelected(item.title);
                    }}
                    style={{ width: "100%" }}
                  >
                    <div
                      className={`toolsItemsDiv ${
                        index === selected && "toolsItemsDivActive"
                      }`}
                    >
                      <p className="toolsItemsSpan">{item.title}</p>
                      <img
                        src={
                          index === selected ? arrow_selected : arrow_unselected
                        }
                        alt={index}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        </>
      )}
      {/* {selected === "Administrator" && (
        <Administrator setSelected={setSelected} />
      )} */}
      <Outlet />
    </div>
  );
};

export { Tools };
