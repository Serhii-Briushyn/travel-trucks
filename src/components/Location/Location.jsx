import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLocation } from "../../redux/filters/selectors";
import { selectError } from "../../redux/campers/selectors";
import { setFilters } from "../../redux/filters/slice";

import citiesData from "../../data/cities.json";

import css from "./Location.module.css";

const Location = ({ tempFilters, setTempFilters }) => {
  const dispatch = useDispatch();
  const reduxLocation = useSelector(selectLocation);
  const error = useSelector(selectError);
  const [inputValue, setInputValue] = useState(
    tempFilters.location || reduxLocation || ""
  );
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (error) {
      setInputValue("");
      dispatch(setFilters({ location: "" }));
    }
  }, [error, dispatch]);

  const filterCities = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const filteredCities = citiesData.filter((city) =>
      city.toLowerCase().startsWith(query.toLowerCase())
    );
    setSuggestions(filteredCities);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTempFilters((prev) => ({ ...prev, location: e.target.value }));
    filterCities(e.target.value);
  };

  const handleSelectSuggestion = (city) => {
    setInputValue(city);
    setSuggestions([]);
    setTempFilters((prev) => ({ ...prev, location: city }));
  };

  const handleFocus = () => {
    filterCities(inputValue);
  };

  const handleBlur = () => {
    setTimeout(() => setSuggestions([]), 200);
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={css.location_input}
        />
        {suggestions.length > 0 && (
          <ul className={css.suggestions_list}>
            {suggestions.map((city, index) => (
              <li
                key={index}
                className={css.suggestion_item}
                onClick={() => handleSelectSuggestion(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Location;
