import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Movie = ({ title, genres, coverImage, id, summary }) => {
  return (
    <section className="flex text-teal-700 bg-orange-100 p-8 rounded-lg w-full">
      <img src={coverImage} alt={title} />
      <div className="p-2 max-w-fit w-3/6 ml-2">
        <h2 className="font-extra-bold text-lg text-red-400 font-semibold hover:text-teal-600">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="text-left mb-2">
          {summary.length > 233 ? `${summary.slice(0, 234)}...` : summary}{' '}
          {summary.length > 233 ? (
            <Link to={`/movie/${id}`}>see more.</Link>
          ) : (
            ''
          )}
        </p>
        <ul className="flex flex-wrap">
          {genres
            ? genres.map((genre, index) => (
                <li
                  className="rounded-md p-1 bg-teal-600 text-yellow-100 list-none hover:text-red-400 font-semibold ml-1 mb-1"
                  key={index}
                >{`#${genre}`}</li>
              ))
            : ''}
        </ul>
      </div>
    </section>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
