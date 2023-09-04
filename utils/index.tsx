export const getMovies = async (page: number, category?: number | boolean) => {
  const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&${
    category && `with_genres=${category}`
  }`;

  const options: RequestInit = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjUxZmQ3ZmUzMTNjMmQ3OWUxYzdmNGJmNDk2ODFjNCIsInN1YiI6IjY0ZjJjY2FhMWYzMzE5MDBlMzU2N2Y2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tk_D4RFaSh0u4_Q3kwlxKflas8AZjX8exVweSXbd_co",
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) return false;
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options: RequestInit = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjUxZmQ3ZmUzMTNjMmQ3OWUxYzdmNGJmNDk2ODFjNCIsInN1YiI6IjY0ZjJjY2FhMWYzMzE5MDBlMzU2N2Y2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tk_D4RFaSh0u4_Q3kwlxKflas8AZjX8exVweSXbd_co",
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) return false;
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getGenres = async () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list`;
  const options: RequestInit = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjUxZmQ3ZmUzMTNjMmQ3OWUxYzdmNGJmNDk2ODFjNCIsInN1YiI6IjY0ZjJjY2FhMWYzMzE5MDBlMzU2N2Y2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tk_D4RFaSh0u4_Q3kwlxKflas8AZjX8exVweSXbd_co",
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) return false;
    const data = await res.json();
    return data.genres;
  } catch (err) {
    console.error(err);
    return false;
  }
};
