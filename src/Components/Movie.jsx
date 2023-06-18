import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Movie = ({ title, genres, coverImage, id, summary }) => {
  return (
          {summary.length > 233 ? `${summary.slice(0, 234)}...` : summary}{' '}
          {summary.length > 233 ? (
            <Link to={`/movie/${id}`}>see more.</Link>
          ) : (
            ''
          )}
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
