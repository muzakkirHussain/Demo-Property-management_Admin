import React, { useState } from "react";
import "./Navbar/Navbar.scss";
import home_selected from "../assets/Navbar/selected/solace_nav_selected-1.svg";
import solaceLogo from "../assets/Navbar/Solace_Logo.svg";
import properties_selected from "../assets/Navbar/selected/solace_nav_selected-2.svg";
import contacts_selected from "../assets/Navbar/selected/solace_nav_selected-3.svg";
import tenancies_selected from "../assets/Navbar/selected/solace_nav_selected-4.svg";
import progressions_selected from "../assets/Navbar/selected/solace_nav_selected-5.svg";
import accounts_selected from "../assets/Navbar/selected/solace_nav_selected-6.svg";
import eSignature_selected from "../assets/Navbar/selected/solace_nav_selected-7.svg";
import bulkUpload_selected from "../assets/Navbar/selected/solace_nav_selected-8.svg";
import report_selected from "../assets/Navbar/selected/solace_nav_selected-9.svg";
import tools_selected from "../assets/Navbar/selected/solace_nav_selected-10.svg";
import home_unselected from "../assets/Navbar/unselected/solace_nav_unselected-1.svg";
import properties_unselected from "../assets/Navbar/unselected/solace_nav_unselected-2.svg";
import contacts_unselected from "../assets/Navbar/unselected/solace_nav_unselected-3.svg";
import tenancies_unselected from "../assets/Navbar/unselected/solace_nav_unselected-4.svg";
import progressions_unselected from "../assets/Navbar/unselected/solace_nav_unselected-5.svg";
import accounts_unselected from "../assets/Navbar/unselected/solace_nav_unselected-6.svg";
import eSignature_unselected from "../assets/Navbar/unselected/solace_nav_unselected-7.svg";
import bulkUpload_unselected from "../assets/Navbar/unselected/solace_nav_unselected-8.svg";
import report_unselected from "../assets/Navbar/unselected/solace_nav_unselected-9.svg";
import tools_unselected from "../assets/Navbar/unselected/solace_nav_unselected-10.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const navData = [
    {
      id: 1,
      title: "Home",
      selected_image: home_selected,
      unSelected_image: home_unselected,
      url: "/",
      subDrop: [],
    },
    {
      id: 2,
      title: "Properties",
      selected_image: properties_selected,
      unSelected_image: properties_unselected,
      url: "/properties",
      subDrop: [],
    },
    {
      id: 3,
      title: "Contacts",
      selected_image: contacts_selected,
      unSelected_image: contacts_unselected,
      url: "/contacts",
      subDrop: [],
    },
    {
      id: 4,
      title: "Tenancies",
      selected_image: tenancies_selected,
      unSelected_image: tenancies_unselected,
      url: "/tenancies",
      subDrop: [],
    },
    {
      id: 5,
      title: "Progressions",
      selected_image: progressions_selected,
      unSelected_image: progressions_unselected,
      url: "/progressions",
      subDrop: [],
    },
    {
      id: 6,
      title: "Accounts",
      selected_image: accounts_selected,
      unSelected_image: accounts_unselected,
      url: "/accounts",
      subDrop: [],
    },
    {
      id: 7,
      title: "E-Signature",
      selected_image: eSignature_selected,
      unSelected_image: eSignature_unselected,
      url: "/e-signature",
      subDrop: [],
    },
    {
      id: 8,
      title: "Bulk Upload",
      selected_image: bulkUpload_selected,
      unSelected_image: bulkUpload_unselected,
      url: "/bulk-upload",
      subDrop: [],
    },
    {
      id: 9,
      title: "Report",
      selected_image: report_selected,
      unSelected_image: report_unselected,
      url: "/report",
      subDrop: [],
    },
    {
      id: 10,
      title: "Tools",
      selected_image: tools_selected,
      unSelected_image: tools_unselected,
      url: "/tools",
      subDrop: [],
    },
  ];
  const navigate = useNavigate();
  const handleSelect = (index) => {
    setSelected(index);
  };
  return (
    <>
      <div className="sideBar">
        <div className="sideBarTopContent">
          <img src={solaceLogo} alt="" height={"45px"} />
        </div>
        <div className="sideBarCenterContent">
          <div className="sideBarInner">
            {navData.map((item, index) => (
              <div
                key={index}
                className={`navItemsMainDiv ${index === selected && "active"}`}
                onClick={() => {
                  navigate(item.url);
                  setSelected(index);
                }}
              >
                <div className="navItemsDiv">
                  <img
                    src={
                      index === selected
                        ? item.selected_image
                        : item.unSelected_image
                    }
                    alt={index}
                    height={"40px"}
                    width={"40px"}
                  />
                  <span className="navItemsSpan">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="sideBarBottomContent">
            <div className="navItemsMainDiv">
              <div className="navItemsDiv">
                <span className="navItemsSpan">logout</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
