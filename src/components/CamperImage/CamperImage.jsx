import css from "./CamperImage.module.css";

const CamperImage = ({ images, name }) => {
  const imageUrl = images?.[0]?.thumb || "/camper.png";
  return <img className={css.image} src={imageUrl} alt={name} />;
};

export default CamperImage;
