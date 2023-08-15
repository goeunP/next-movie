import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav className="h-25  border shadow-xl flex flex-col items-center justify-center py-3">
        <Logo />
        <div className="mt-2">
          <Link
            href="/"
            className={`${router.pathname === "/" ? "text-orange-500 " : ""}
          px-2
          font-bold`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`${router.pathname === "/about" ? "text-orange-500" : ""}
          px-2
          font-bold`}
          >
            ABOUT
          </Link>
        </div>
      </nav>
    </>
  );
}
