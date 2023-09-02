"use client";

import { Movie } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "./Rating";

const imgsUrl = "https://image.tmdb.org/t/p/original";

const Tags = ({ tags }: { tags: any[] }) => (
  <div className="flex gap-2">
    {tags.map((t) => (
      <p
        key={t.id}
        className={`text-sm font-bold border-l-2 border-cyan-600 duration-300 bg-[rgba(0,0,0,0.4)] w-fit py-1 px-3 rounded-full`}
      >
        #{t.name}
      </p>
    ))}
  </div>
);

const Title = ({ title, overview }: { title: string; overview: string }) => (
  <>
    <h2 className="text-4xl font-black blue_gradient pt-4">{title}</h2>
    <p className="text-slate-300 pt-2">{overview}</p>
  </>
);

const Feeds = ({ rate, count }: { rate: number; count: number }) => (
  <div className="pt-4 flex">
    <Rating rate={(rate / 10) * 5} />
    <span className="pl-2 blue_gradient font-bold">({count})</span>
  </div>
);

const Info = ({
  status,
  releaseDate,
}: {
  status: string;
  releaseDate: string;
}) => (
  <div className="pt-4">
    <h2>
      {status} at {releaseDate}
    </h2>
  </div>
);

const Companies = ({
  production_companies,
}: {
  production_companies: any[];
}) => (
  <div className="flex gap-8 pt-4">
    {production_companies.map(
      (c) =>
        c.logo_path && (
          <Image
            key={c.id}
            src={`${imgsUrl}${c.logo_path}`}
            width={55}
            height={50}
            alt="Production company logo"
          />
        )
    )}
  </div>
);

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <main
      style={{ backgroundImage: `url(${imgsUrl}${movie?.backdrop_path})` }}
      className="bg-center bg-cover bg-no-repeat"
    >
      <div className="bg-gray-900 bg-opacity-90 main_container py-10 flex max-lg:flex-col max-lg:gap-8 max-lg:text-center max-lg:items-center">
        <Image
          src={`${imgsUrl}${movie?.poster_path}`}
          placeholder="blur"
          blurDataURL="/movieland.png"
          width={400}
          height={600}
          alt="Cover"
          className="rounded-2xl"
        />
        <div className="ml-10 max-lg:flex max-lg:flex-col max-lg:text-center max-lg:items-center">
          <Tags tags={movie.genres} />
          <Title title={movie.title} overview={movie.overview} />
          <Feeds rate={movie.vote_average} count={movie.vote_count} />
          <Info status={movie.status} releaseDate={movie.release_date} />
          <Companies production_companies={movie.production_companies} />
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
