import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieDetail = ({
  title,
  summary,
  coverImage,
  genres,
  rating,
  year,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImage} alt={title} />
      <h3>Rating: {rating}</h3>
      <h4>Released: {year}</h4>
      <h4>Summary</h4>
      <p>{summary}</p>
    </div>
  );
};
