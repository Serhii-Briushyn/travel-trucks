import { details, features } from "../../constants/constants";

import css from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper, detailed = false }) => {
  return (
    <div className={css.featuresContainer}>
      <div className={css.features}>
        {features.map(({ key, label, icon, hasFill }) => {
          if (key === "transmission" && camper.transmission) {
            label =
              camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1);
          }
          if (key === "engine" && camper.engine) {
            label =
              camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1);
          }

          return (
            camper[key] && (
              <span key={key} className={css.featureItem}>
                <svg className={`${css.icon} ${hasFill ? css.fill : ""}`}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            )
          );
        })}
      </div>

      {detailed && (
        <div className={css.details}>
          <h3>Vehicle details</h3>
          <table className={css.detailsTable}>
            <tbody>
              {details.map(({ key, label, unit }) => (
                <tr key={key}>
                  <td>{label}</td>
                  <td>
                    {camper[key] ? `${camper[key]} ${unit || ""}` : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CamperFeatures;
