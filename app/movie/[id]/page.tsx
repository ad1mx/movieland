import MovieDetails from "@/components/MovieDetails";
import { Movie } from "@/types";
import { getMovie } from "@/utils";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const movie: Movie = await getMovie(id);
  const imgsUrl = "https://image.tmdb.org/t/p/original";

  return {
    title: `MovieLand - ${movie?.title || "Unknown"}`,
    description: movie?.overview || "",
    other: {
      "og:image": `${imgsUrl}${movie?.poster_path}`,
      "twitter:card": "summary_large_image",
    },
  };
};

const Movie = async ({ params: { id } }: { params: { id: number } }) => {
  const movie = await getMovie(id);

  if (!movie) notFound();

  return <MovieDetails movie={movie} />;
};

export default Movie;
