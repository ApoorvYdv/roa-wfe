import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { currentPage } from "../helper/currentPage";
import { useDispatch, useSelector } from "react-redux";
import { FilterButton } from "./utils/FilterButton";

export const TopInputBar = () => {
  const selectedTab = "search"; //currentPage();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const selectOptions = {
    search: <></>,
  };

  return (
    <div className="search-section">
      <div className={`drop-down-div`}>
        <div className={`search `}>
          <SearchIcon className="icon" titleAccess="search-icon" />

          <input
            className="search-input"
            type="text"
            placeholder="Search"
            aria-label="search tenant"
            name="searchTerm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {selectOptions[selectedTab]}
      </div>
      {/* <FilterButton /> */}
      {selectedTab === "search" && (
        <div
          className="filter"
          onClick={() => {
            toggleModal();
          }}
          style={{ backgroundColor: "#21457c", color: "white" }}
        ></div>
      )}
    </div>
  );
};
