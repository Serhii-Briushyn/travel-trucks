import clsx from "clsx";

import { engineTypes, equipment, vehicleType } from "../../constants/constants";

import css from "./Filters.module.css";

const Filters = ({ tempFilters, setTempFilters }) => {
  const handleVehicleTypeChange = (type) => {
    setTempFilters((prev) => ({
      ...prev,
      vehicleType: prev.vehicleType === type ? "" : type,
    }));
  };

  const handleEngineChange = (type) => {
    setTempFilters((prev) => ({
      ...prev,
      engine: prev.engine === type ? "" : type,
    }));
  };

  const handleEquipmentChange = (key) => {
    if (key === "transmission") {
      setTempFilters((prev) => ({
        ...prev,
        transmission: prev.transmission === "automatic" ? "" : "automatic",
      }));
    } else {
      setTempFilters((prev) => ({
        ...prev,
        equipment: prev.equipment.includes(key)
          ? prev.equipment.filter((item) => item !== key)
          : [...prev.equipment, key],
      }));
    }
  };

  return (
    <div className={css.filters}>
      <p className={css.filters_text}>Filters</p>
      <div className={css.filters_box}>
        <h3 className={css.filters_subtitle}>Vehicle Equipment</h3>
        <hr className={css.filters_line} />
        <div className={css.filters_elements}>
          {equipment.map(({ key, label, icon, hasFill }) => (
            <button
              key={key}
              className={clsx(
                css.filter_button,
                key === "transmission"
                  ? tempFilters.transmission === "automatic" && css.active
                  : tempFilters.equipment.includes(key) && css.active
              )}
              onClick={() => handleEquipmentChange(key)}
            >
              <span className={css.filter_span}>
                <svg className={`${css.icon} ${hasFill ? css.fill : ""}`}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={css.filters_box}>
        <h3 className={css.filters_subtitle}>Engine Type</h3>
        <hr className={css.filters_line} />
        <div className={css.filters_elements}>
          {engineTypes.map(({ key, label, icon }) => (
            <button
              key={key}
              className={clsx(
                css.filter_button,
                tempFilters.engine === key && css.active
              )}
              onClick={() => handleEngineChange(key)}
            >
              <span className={css.filter_span}>
                <svg className={css.icon}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={css.filters_box}>
        <h3 className={css.filters_subtitle}>Vehicle Type</h3>
        <hr className={css.filters_line} />
        <div className={css.filters_elements}>
          {vehicleType.map(({ key, label, icon }) => (
            <button
              key={key}
              className={clsx(
                css.filter_button,
                tempFilters.vehicleType === key && css.active
              )}
              onClick={() => handleVehicleTypeChange(key)}
            >
              <span key={key} className={css.filter_span}>
                <svg className={css.icon}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
