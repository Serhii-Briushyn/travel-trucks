import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

import css from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };
  // camper={camper} detailed
  // <CamperFeatures camper={camper} detailed />;
  return (
    <div>
      <div>
        <nav>
          <div className={css.navigation}>
            <NavLink to="features" className={buildLinkClass}>
              Features
            </NavLink>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
