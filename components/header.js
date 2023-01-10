import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header({ count, clearCount }) {
  const router = useRouter();

  const updateTheme = () => {
    switch (localStorage.theme) {
      case "system":
        if (window.matchMedia("(prefers-color-scheme: dark").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        document.documentElement.setAttribute("color-theme", "system");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("color-theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("color-theme", "light");
        break;
    }
  };

  useEffect(() => {
    updateTheme();
  }, []);

  return (
    <div className="w-full sticky bg-opacity-40  backdrop-blur-lg drop-shadow dark:border-b dark:border-cyan-400 top-0 h-20 shadow flex justify-between items-center px-4">
      <button className="h-12 w-12 rounded-full bg-neutral-800 dark:bg-cyan-400 flex justify-center items-center">
        <div className="font-extrabold text-slate-100 text-3xl">U</div>
      </button>
      <div className="flex items-center gap-8 text-sm dark:text-slate-100">
        <div
          hidden={!count && count != 0}
          className="relative "
          onClick={() => clearCount()}
        >
          <div className="absolute -right-2 -bottom-2 text-slate-100 bg-cyan-400 w-5 h-5 flex justify-center items-center font-bold rounded-full">
            {count}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </div>

        <button
          onClick={() => {
            router.push("/");
          }}
          className={`${
            router.pathname == "/"
              ? "bg-neutral-800 dark:bg-cyan-400 hover:bg-slate-700 text-white"
              : ""
          }  cursor-pointer  rounded px-2 py-1`}
        >
          Нүүр
        </button>
        <button
          className={`${
            router.pathname == "/plan"
              ? "bg-neutral-800 dark:bg-cyan-400 hover:bg-slate-700 text-white"
              : ""
          }  cursor-pointer  rounded px-2 py-1`}
          onClick={() => {
            router.push("/plan");
          }}
        >
          Сургалт
        </button>
        <button
          onClick={() => {
            localStorage.theme =
              localStorage.theme == "dark" ? "light" : "dark";
            updateTheme();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 dark:hidden"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 hidden dark:block"
          >
            <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
