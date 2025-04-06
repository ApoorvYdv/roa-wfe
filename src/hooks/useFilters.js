import { useDispatch, useSelector } from "react-redux";
import { takeFilterInput } from "../slices/filterSlice";
import { currentPage } from "../helper/currentPage";

export const useFilters = () => {
  const dispatch = useDispatch();
  const page = currentPage();
  const filters = useSelector((state) => state.filters[page]);
  const prevFilters = useSelector((state) => state.filters.prevFilters);

  const isFilterModalOpen = useSelector(
    (state) => state.filters.isFilterModalOpen
  );
  const clearStatus = (key) => {
    dispatch(takeFilterInput([key, []]));
  };
  const clearAllFields = (keys) => {
    Object.keys(filters).map((key) => {
      if (typeof filters[key] === "string") {
        dispatch(takeFilterInput([key, ""]));
      }
    });
  };

  const countOfActiveFilters = () => {
    return Object.keys(filters).reduce((count, key) => {
      if (
        filters[key] !== "" &&
        typeof filters[key] === "string" &&
        key !== "search_string_pattern"
      ) {
        return (count += 1);
      }
      return (count += 0);
    }, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(takeFilterInput([name, value]));
  };

  return {
    clearStatus,
    clearAllFields,
    countOfActiveFilters,
    handleChange,
    filters,
    isFilterModalOpen,
    prevFilters,
  };
};
