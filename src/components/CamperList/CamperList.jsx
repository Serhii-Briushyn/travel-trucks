import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectIsLoading,
} from "../../redux/campers/selectors";

import CamperCard from "../CamperCard/CamperCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./CamperList.module.css";


const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  const loadMore = () => {
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

      {campers.length % 4 === 0 && campers.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </section>
  );
};

export default CamperList;
