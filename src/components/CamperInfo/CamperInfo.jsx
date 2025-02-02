import { useDispatch, useSelector } from "react-redux";

import { selectFavorites } from "../../redux/favorites/selectors";
import { toggleFavorite } from "../../redux/favorites/slice";

import css from "./CamperInfo.module.css";

const CamperInfo = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={css.info}>
      <div className={css.info_title}>
        <h2 className={css.title}>{camper.name}</h2>
        <div className={css.wrapper}>
          <p className={css.price}>€{camper.price.toFixed(2)}</p>
          <button
            className={css.button}
            onClick={() => dispatch(toggleFavorite(camper.id))}
            aria-label="Add to favorites"
          >
            <svg fill={isFavorite ? "#E44848" : "#101828"}>
              <use xlinkHref="/icons-sprite.svg#icon-favorite"></use>
            </svg>
          </button>
        </div>
      </div>

      <div className={css.info_details}>
        <a
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.rating}
        >
          <svg>
            <use xlinkHref="/icons-sprite.svg#icon-star-yellow"></use>
          </svg>
          {camper.rating} ({camper.reviews.length} Reviews)
        </a>

        <span className={css.location}>
          <svg>
            <use xlinkHref="/icons-sprite.svg#icon-map"></use>
          </svg>
          {camper.location}
        </span>
      </div>
    </div>
  );
};

export default CamperInfo;
