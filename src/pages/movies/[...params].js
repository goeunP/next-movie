// movie/:id
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Seo from "@/components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await (await fetch(`/api/movies/${id}`)).json();
      setMovie(results);
    })();
  }, []);
  console.log(movie);
  return (
    <div>
      <Seo title={title} />

      <div className="px-6  py-10">
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </div>
      <h2 className="font-medium text-2xl flex justify-center pb-3">
        {title}{" "}
      </h2>

      <h4 className="px-10 pb-20">{movie.overview}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
