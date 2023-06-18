import { Movie } from '../Components/Movie';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  const likeMovie = (event) => {
    const movieTitle = event.target
      .closest('.movie-info')
      .querySelector('h2').innerText;
    if (!likedMovies.includes(movieTitle)) {
      setLikedMovies((currentList) => [movieTitle, ...currentList]);
      console.log('added');
    } else {
      console.log('already in the list');
    }
  };
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1 className="font-semibold mb-5 text-3xl">Movie Database</h1>
      {likedMovies.length > 0 ? `Liked Movies ${likedMovies.length}` : ''}
      <main className="grid grid-cols-2 gap-8 box-border">
        {loading ? (
          <h2 className="font-extra-bold">Loading...</h2>
        ) : (
          movies.map((movie) => (
            <Movie
              onClick={likeMovie}
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
              title={movie.title}
            />
          ))
        )}
      </main>
    </div>
  );
};
