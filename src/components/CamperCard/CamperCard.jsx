import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperImage from "../CamperImage/CamperImage";
import CamperInfo from "../CamperInfo/CamperInfo";
import Description from "../Description/Description";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  return (
    <div className={css.card}>
      <CamperImage images={camper.gallery} name={camper.name} />
      <div className={css.card_content}>
        <CamperInfo camper={camper} />
        <Description description={camper.description} isTruncated={true} />
        <CamperFeatures camper={camper} />
        <ShowMoreButton camperId={camper.id} />
      </div>
    </div>
  );
};

export default CamperCard;
