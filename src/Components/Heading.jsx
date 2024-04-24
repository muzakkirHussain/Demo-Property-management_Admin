import React from "react";
import "./Styles/Heading.scss";
import arrow from "../../src/assets/Tools/headerArrow.svg";
import search from "../../src/assets/Tools/searchIcon.svg";
import { useNavigate } from "react-router-dom";

const Heading = (props) => {
  const { setSearch, paths, addons } = props;
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <div className="headingSection">
      <div className="rightSection">
        <div className="breadcrumbs">
          {paths.map((path, index, paths) => (
            <div key={path.title}>
              <span
                onClick={() => path.url.length > 0 && handleClick(path.url)}
                style={{
                  opacity: index === paths.length - 1 ? 1 : 0.6,
                  textDecoration:
                    index !== paths.length - 1 ? "none" : "inherit",
                }}
              >
                {path.title}
              </span>
              {index !== paths.length - 1 && <>&nbsp;/&nbsp;</>}
            </div>
          ))}
        </div>
      </div>
      {addons.includes("search") && (
        <div className="leftSection">
          <div className="search">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search....."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <img src={arrow} alt="arrow" />
        </div>
      )}
    </div>
  );
};

export { Heading };
