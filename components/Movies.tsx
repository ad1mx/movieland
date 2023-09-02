"use client";

import { getMovies } from "@/utils";
import MovieCard from "./MovieCard";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Button from "./Button";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const res: never[] = await getMovies(pageNumber);
      setMovies((prev) => [...prev, ...res]);
      setIsLoading(false);
    };

    fetchMovies();
  }, [pageNumber]);

  return (
    <section id="movies" className="main_container py-10">
      <h2 className="text-5xl font-extrabold blue_gradient">Movies</h2>
      <p className="text-slate-300 pt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officiis
        eveniet, cumque consequatur praesentium nostrum magni consequuntur sed
        totam accusantium deleniti nihil reprehenderit tenetur porro voluptatum
        voluptatem sunt veritatis quia ex a tempore omnis rem. Dignissimos
        soluta, eum, nulla ex suscipit minus harum a obcaecati eligendi quis
        fugiat animi cumque?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pt-10">
        {!isLoading
          ? movies.map((m: any) => <MovieCard key={m.id} movie={m} />)
          : [...Array(15)].map((e, i) => (
              <Skeleton
                key={i}
                className="h-[350px] bg-[#151d30] p-4 flex flex-col justify-end"
              >
                <Skeleton className="bg-[#1d2841] w-[75%] h-4" />
              </Skeleton>
            ))}
      </div>
      <div className="flex justify-center pt-10">
        <Button onClick={() => setPageNumber((prev) => prev + 1)}>
          Show More
        </Button>
      </div>
    </section>
  );
};

export default Movies;
