"use client";

import { ListMovie } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getGenres } from "@/utils";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: ListMovie }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [categories, setCategories] = useState([]);

  const imgsUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getGenres();

      if (res) {
        const upCategories = res
          .filter((g: any) => movie.genre_ids.includes(g.id))
          .map((c: any) => c.name);

        setCategories(upCategories);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Link href={`/movie/${movie.id}`}>
      <div
        className={`relative rounded-2xl bg-[#151d30] h-[400px] duration-300 overflow-hidden`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={`${imgsUrl}${movie.poster_path}`}
          fill
          alt={"Poster"}
          className={`duration-300 ${isHovering ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute left-0 right-0 top-0 p-4 flex flex-col justify-between h-full duration-300 transition-all bg-gradient-to-t from-black to-transparent hover:bg-[rgba(0,0,0,0.5)] ">
          <div className="flex flex-col gap-2">
            {categories.map((category: any) => (
              <p
                key={category}
                className={`blue-badge duration-300 ${
                  isHovering
                    ? "translate-x-0 opacity-1"
                    : "translate-x-[-100%] opacity-0"
                }`}
              >
                #{category}
              </p>
            ))}
          </div>
          <h2 className="text-base font-bold">{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
