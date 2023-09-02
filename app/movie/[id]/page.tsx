import { PageProps } from "@/.next/types/app/movie/[id]/page";
import MovieDetails from "@/components/MovieDetails";
import { getMovie } from "@/utils";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({ params: { id } }: PageProps) => {
  const movie = await getMovie(id);

  return {
    title: `MovieLand - ${movie.title}`,
  };
};

const Movie = async ({ params: { id } }: PageProps) => {
  const movie = await getMovie(id);

  if (!movie) notFound();

  return <MovieDetails movie={movie} />;
};

export default Movie;
