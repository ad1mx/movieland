import MovieDetails from "@/components/MovieDetails";
import { getMovie } from "@/utils";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const movie = await getMovie(id);

  return {
    title: `MovieLand - ${movie?.title || "Unknown"}`,
  };
};

const Movie = async ({ params: { id } }: { params: { id: number } }) => {
  const movie = await getMovie(id);

  if (!movie) notFound();

  return <MovieDetails movie={movie} />;
};

export default Movie;
