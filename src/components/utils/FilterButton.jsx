import React from "react";
import { useDispatch } from "react-redux";
import { useFilters } from "../../hooks/useFilters";
import { toggleModal, updatePrevFilters } from "../../slices/filterSlice";
import { SlidersHorizontal } from "lucide-react";

export const FilterButton = () => {
  const dispatch = useDispatch();
  const { countOfActiveFilters, isFilterModalOpen, setPrevFilters } =
    useFilters();

  return (
    <div
      className={`filter ${!!countOfActiveFilters() ? "active-filters" : ""}`}
      onClick={() => {
        dispatch(updatePrevFilters());
        dispatch(toggleModal(!isFilterModalOpen));
      }}
    >
      <SlidersHorizontal size={15} />
      <span aria-label="filter-button-text" className="filter-button-text">
        Filters
      </span>
      {!!countOfActiveFilters() && (
        <span
          role="status"
          aria-label="filter-count"
          className="filter-active-count"
        >
          {countOfActiveFilters()}
        </span>
      )}
    </div>
  );
};
