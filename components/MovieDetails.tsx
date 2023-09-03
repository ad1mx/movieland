import { Movie } from "@/types";
import Image from "next/image";
import Rating from "./Rating";

const imgsUrl = "https://image.tmdb.org/t/p/original";

const Tags = ({ tags }: { tags: any[] }) => (
  <div className="flex gap-2 flex-wrap max-lg:justify-center">
    {tags.map((t) => (
      <p key={t.id} className={`blue-badge`}>
        #{t.name}
      </p>
    ))}
  </div>
);

const Title = ({ title, overview }: { title: string; overview: string }) => (
  <>
    <h2 className="text-4xl font-black blue_gradient">{title}</h2>
    <p className="text-slate-300">{overview}</p>
  </>
);

const Feeds = ({ rate, count }: { rate: number; count: number }) => (
  <div className="flex items-center">
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
}) =>
  status.toLowerCase() === "released" && (
    <div>
      <h2 className="title">Release date</h2>
      <h2>{releaseDate}</h2>
    </div>
  );

const Companies = ({
  production_companies,
}: {
  production_companies: any[];
}) => {
  production_companies = production_companies.filter((c) => c.logo_path);

  return (
    production_companies.length > 0 && (
      <div>
        <h2 className="title">Prodcution companies</h2>
        <div className="flex gap-4 max-lg:justify-center flex-wrap">
          {production_companies.map((c) => (
            <div className="w-32 h-20 relative" key={c.id}>
              <Image
                src={`${imgsUrl}${c.logo_path}`}
                className="object-contain object-center"
                fill
                alt="Production company logo"
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <main
      style={{ backgroundImage: `url(${imgsUrl}${movie?.backdrop_path})` }}
      className="bg-center bg-cover bg-no-repeat"
    >
      <div className="bg-gray-900 bg-opacity-90 main_container py-10 flex max-lg:flex-col lg:gap-x-8 max-lg:gap-y-8 max-lg:text-center max-lg:items-center">
        <div className="min-w-[250px] h-[400px] sm:h-[450px] sm:min-w-[300px] md:min-w-[400px] md:h-[600px] relative rounded-2xl overflow-hidden">
          <Image
            src={`${imgsUrl}${movie?.poster_path}`}
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center" }}
            blurDataURL="/movieland.png"
            fill
            alt="Cover"
          />
          <div className="bg-gradient-to-b from-black from-[-40%] to-transparent p-4 absolute h-full w-full">
            <div className="absolute red-badge">
              <span className="uppercase font-bold">{movie.status}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 max-lg:text-center max-lg:items-center">
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
