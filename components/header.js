import { useEffect } from "react";

export default function Header() {
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
        <button className="bg-neutral-800 dark:bg-cyan-400 cursor-pointer hover:bg-slate-700 text-white rounded px-2 py-1">
          Нүүр
        </button>
        <button>Сургалт</button>
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
