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
    <main>
      <Link className="font-medium" to={`/`}>
        Go Back
      </Link>
      <section className="flex flex-col text-teal-700 bg-orange-100 p-8 rounded-lg">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <img src={coverImage} alt={title} />
        <h3>Rating: {rating}</h3>
        <h4>Released: {year}</h4>
        {summary ? <h4>Summary</h4> : ''}
        <p>{summary}</p>
      </section>
    </main>
  );
};
