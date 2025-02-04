import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors";

import CamperCard from "../CamperCard/CamperCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./CamperList.module.css";

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);

  const loadMore = () => {
    if (isLoading || campers.length >= totalCampers) return;
    const currentPage = Math.ceil(campers.length / 4) + 1;
    dispatch(fetchCampers({ page: currentPage, limit: 4 }));
  };

  return (
    <section className={css.camper_section}>
      <ul className={css.camper_list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {!isLoading && campers.length < totalCampers && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </section>
  );
};

export default CamperList;
