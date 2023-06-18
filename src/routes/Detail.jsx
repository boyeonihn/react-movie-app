import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieDetail } from '../Components/MovieDetail';

export const Detail = () => {
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section>
      {loading ? (
        'Loading... Movie detail'
      ) : (
        <MovieDetail
          movie={movie}
          title={movie.title}
          summary={movie.description_full}
          coverImage={movie.medium_cover_image}
          genres={movie.genres}
          rating={movie.rating}
          year={movie.year}
        />
      )}
    </section>
  );
};
