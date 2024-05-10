import React, { useEffect, useState } from "react";
import "../../Styles/Components/Popup/UnassignedClients.scss";
import { Button } from "../Button";
import { CustomSelect } from "../CustomSelect";
import remove from "../../assets/Common/close.svg";
import Select from "react-select";

const UnassignedClientsPopup = (props) => {
  const { isOpen, setIsOpen, data } = props;
  const [formData, setFormData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedList, setSelectedList] = useState([]);
  const [options, setOptions] = useState([
    { value: "manager 1", label: "manager 1" },
    { value: "manager 2", label: "manager 2" },
    { value: "manager 3", label: "manager 3" },
  ]);
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleAddClick = () => {
    if (selectedOption) {
      setSelectedList([...selectedList, selectedOption.label]);
      setOptions(
        options.filter((option) => option.label !== selectedOption.label)
      );
      setSelectedOption(null);
    }
  };

  const handleRemoveClick = (label) => {
    setSelectedList(selectedList.filter((item) => item !== label));
    setOptions([...options, { value: label, label: label }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   console.log(formData);
    //   handleClose();
    // }
    console.log("Submitted");
  };

  const handleClose = () => {
    setFormData({});
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="popups">
            <div className="popup-content">
              <div className="popup_top">
                <div></div>
                <h2>Assign to {data["Point of Contact"]}</h2>
                <span onClick={handleClose}>x</span>
              </div>
              <div className="popup_center">
                <label htmlFor="propertyManager">
                  Select Property Manager:
                </label>
                <div className="multiSelectDiv">
                  <CustomSelect
                    selectedOption={selectedOption}
                    handleSelectChange={handleSelectChange}
                    options={options}
                  />
                  <Button
                    title="Add"
                    active={true}
                    handleClick={handleAddClick}
                  />
                </div>
              </div>
              <div className="chipsSection">
                {selectedList.map((item, index) => (
                  <span key={index}>
                    {item}
                    <img
                      src={remove}
                      alt="remove"
                      onClick={() => handleRemoveClick(item)}
                    />
                  </span>
                ))}
              </div>
              <div className="footerSection">
                <Button
                  title="Submit"
                  active={true}
                  type="submit"
                  handleClick={handleSubmit}
                  disabled={selectedList.length > 0 ? false : true}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { UnassignedClientsPopup };
