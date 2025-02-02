import css from "./ShowMoreButton.module.css";

const ShowMoreButton = ({ camperId }) => {
  return (
    <a
      href={`/catalog/${camperId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={css.button}
    >
      Show more
    </a>
  );
};

export default ShowMoreButton;
