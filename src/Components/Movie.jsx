import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Movie = ({ title, genres, coverImage, id, summary }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImage} alt={title} />
      <p>{summary.length > 233 ? `${summary.slice(0, 234)}...` : summary}</p>
      <ul>
        {genres
          ? genres.map((genre, index) => <li key={index}>{`#${genre}`}</li>)
          : ''}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
