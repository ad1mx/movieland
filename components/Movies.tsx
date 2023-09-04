"use client";

import { getGenres, getMovies } from "@/utils";
import MovieCard from "./MovieCard";
import { useEffect, useRef, useState } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import Pagination from "./Pagination";
import { useOnlineStatus } from "@/context/OnlineStatusProvider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const OfflineMovies = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-10">
      <h2 className="text-3xl font-bold">Connect to the internet</h2>
      <p className="pt-2 text-gray-300">
        You're offline. Check your connection.
      </p>
      <Button onClick={() => router.refresh()} sx="mt-4">
        Retry
      </Button>
    </div>
  );
};

const CategoryNameLoader = () => (
  <Skeleton variant="text" className={"h-10 w-60"} />
);

const MoviesLoader = () => {
  return [...Array(20)].map((_, i) => (
    <Skeleton rounded="2xl" className="h-[350px] relative">
      <Skeleton variant="text" className="h-4 w-28 absolute bottom-4 left-4" />
    </Skeleton>
  ));
};

interface MoviesProps {
  page: number;
  category: number | boolean;
}

const Movies: React.FC<MoviesProps> = ({ page, category }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryNameLoading, setIsCategoryNameLoading] = useState(true);
  const [categoryName, setCategoryName] = useState(false);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const fetchCategoryName = async () => {
      const genres = await getGenres();

      if (!genres) return setIsCategoryNameLoading(false);

      const upCategoryName = genres.find((g: any) => g.id == category)?.name;

      if (upCategoryName) {
        setCategoryName(upCategoryName);
      }
      setIsCategoryNameLoading(false);
    };

    fetchCategoryName();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies: [] = await getMovies(page, category);
      if (movies) {
        setMovies(movies);
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchMovies();
  }, [page]);

  return (
    <section id="movies" className="main_container py-10">
      {isCategoryNameLoading ? (
        <CategoryNameLoader />
      ) : (
        <h2 className="text-5xl font-extrabold blue_gradient capitalize">
          {categoryName ? `${categoryName} Movies` : "Movies"}
        </h2>
      )}
      <p className="text-slate-300 pt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officiis
        eveniet, cumque consequatur praesentium nostrum magni consequuntur sed
        totam accusantium deleniti nihil reprehenderit tenetur porro voluptatum
        voluptatem sunt veritatis quia ex a tempore omnis rem. Dignissimos
        soluta, eum, nulla ex suscipit minus harum a obcaecati eligendi quis
        fugiat animi cumque?
      </p>

      {isOnline ? (
        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {isLoading ? (
              <MoviesLoader />
            ) : (
              movies.map((m: any) => <MovieCard key={m.id} movie={m} />)
            )}
          </div>
          <div className="pt-4">
            <Pagination page={page} maxPages={20} />
          </div>
        </div>
      ) : (
        <OfflineMovies />
      )}
    </section>
  );
};

export default Movies;
