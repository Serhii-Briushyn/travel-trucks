import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/operations";
import { selectFilters } from "../../redux/filters/selectors";
import { resetCampers } from "../../redux/campers/slice";

import Filters from "../Filters/Filters";
import Location from "../Location/Location";

import css from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSearch = () => {
    dispatch(resetCampers());
    dispatch(fetchCampers({ ...filters, page: 1, limit: 4 }));
  };

  return (
    <section className={css.search_bar}>
      <Location />
      <Filters />
      <button className={css.button} onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default SearchBar;
