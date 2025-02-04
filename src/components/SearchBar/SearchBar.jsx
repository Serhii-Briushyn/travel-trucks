import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/operations";
import { selectFilters } from "../../redux/filters/selectors";
import { resetCampers } from "../../redux/campers/slice";
import { setFilters } from "../../redux/filters/slice";

import Filters from "../Filters/Filters";
import Location from "../Location/Location";

import css from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [tempFilters, setTempFilters] = useState(filters);

  const handleApplyFilters = () => {
    dispatch(setFilters(tempFilters));
    dispatch(resetCampers());
    dispatch(fetchCampers({ ...tempFilters, page: 1, limit: 4 }));
  };

  return (
    <section className={css.search_bar}>
      <Location tempFilters={tempFilters} setTempFilters={setTempFilters} />
      <Filters tempFilters={tempFilters} setTempFilters={setTempFilters} />
      <button className={css.button} onClick={handleApplyFilters}>
        Search
      </button>
    </section>
  );
};

export default SearchBar;
