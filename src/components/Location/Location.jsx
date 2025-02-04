import { useState } from "react";
import { useSelector } from "react-redux";

import { selectLocation } from "../../redux/filters/selectors";

import css from "./Location.module.css";

const Location = ({ tempFilters, setTempFilters }) => {
  const reduxLocation = useSelector(selectLocation);
  const [inputValue, setInputValue] = useState(
    tempFilters.location || reduxLocation || ""
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.trim() === "") {
      setTempFilters((prev) => ({ ...prev, location: "" }));
    } else {
      setTempFilters((prev) => ({ ...prev, location: e.target.value }));
    }
  };

  return (
    <div className={css.location_wrapper}>
      <label htmlFor="location" className={css.location_label}>
        Location
      </label>
      <div className={css.input_container}>
        <svg className={`${css.icon} ${inputValue ? css.icon_active : ""}`}>
          <use xlinkHref="/icons-sprite.svg#icon-map"></use>
        </svg>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={inputValue}
          onChange={handleInputChange}
          className={css.location_input}
        />
      </div>
    </div>
  );
};

export default Location;
