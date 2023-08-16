import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

export default function Home({ results }) {
  // 즉시 실행 함수 표현식 IIFE()()
  // 글로벌 스코프에서 선언된 함수나 변수에 접근하는 것을 막아서 예기치 않은 에러 방지
  // 첫번째 ()는 익명함수를 감싸 실행될 함수가 전역 스코프에 불필요한 변수를 추가하는 것 방지
  // 두번째 ()는 즉시 실행 함수를 생성

  //const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);
  const router = useRouter();

  return (
    <div>
      <Seo title="Home" />
      {/* {!results.length && <h4>Loading...</h4>} */}
      <div className="grid grid-cols-2">
        {results?.map((movie) => (
          <Link
            key={movie.id}
            href={{
              pathname: `/movies/${movie.original_title}/${movie.id}`,
              query: {
                title: movie.original_title,
                id: movie.id,
              },
            }}
            // as={`/movies/${movie.id}`}
          >
            <div key={movie.id} className="p-5">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="rounded-lg hover:scale-105"
                alt="img"
              />
              <h4 className="font-medium pt-3">{movie.original_title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Server Side Rendering -> 서버에서만 작동하는 코드
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
