import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const profile = {
    fullname: "О.Өгөөмөр",
    title: "Fullstack Engineer",
    urls: [
      {
        icon: "phone",
        url: "tel:88043332",
      },
      {
        icon: "email",
        url: "mailto:uguumur.oldokh@gmail.com",
      },
      {
        icon: "fb",
        url: "https://www.facebook.com/uguumuro",
      },
    ],
  };

  const icons = {
    web: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    fb: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"></path>
      </svg>
    ),
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  };

  const students = [
    {
      fullname: "Б.Тэмүүлэн",
      title: "Database Engineer",
      urls: [
        {
          icon: "web",
          url: "temuulen.vercel.app",
        },
        {
          icon: "email",
          url: "mailto:temuulen.b@mta.gov.mn",
        },
        {
          icon: "phone",
          url: "tel:85555511",
        },
      ],
    },
    {
      fullname: "С.Өнөрмаа",
      title: "Software Developer",
      urls: [
        {
          icon: "web",
          url: "unurmaa.vercel.app",
        },
        {
          icon: "email",
          url: "mailto:unurmaa.s@mta.gov.mn",
        },
        {
          icon: "phone",
          url: "tel:94707770",
        },
      ],
    },
    {
      fullname: "Т.Ганхөлөг",
      title: "Database Engineer",
      urls: [
        {
          icon: "web",
          url: "khulguu.vercel.app",
        },
        {
          icon: "email",
          url: "mailto:khulguu1021@gmail.com",
        },
        {
          icon: "phone",
          url: "tel:94949221",
        },
      ],
    },
    {
      fullname: "Я.Уранчимэг",
      title: "Software Developer",
      urls: [
        {
          icon: "web",
          url: "urnaa-mta.vercel.app",
        },
        {
          icon: "email",
          url: "mailto:uranchimeg.ya@mta.gov.mn",
        },
        {
          icon: "phone",
          url: "tel:86051551",
        },
      ],
    },
    {
      fullname: "О.Түмэндарь",
      title: "Database Engineer",
      urls: [
        {
          icon: "web",
          url: "tumendari.vercel.app",
        },
        {
          icon: "email",
          url: "mailto:tumendari@mta.gov.mn",
        },
      ],
    },
    {
      fullname: "У.Ганзориг",
      title: "Software Developer",
      urls: [
        {
          icon: "web",
          url: "ganzorig.vercel.app",
        },
        {
          icon: "email",
          url: "mailto:ganzorig.uuganbayariin0321@gmail.com",
        },
        {
          icon: "phone",
          url: "tel:80560321",
        },
      ],
    },
    {
      fullname: "Ц.Бат-Эрдэнэ",
      title: "Software Engineer",
      urls: [
        {
          icon: "web",
          url: "baterdene.vercel.app",
        },
      ],
    },
    {
      fullname: "Э.Батгэрэл",
      title: "Senior officer",
      urls: [
        {
          icon: "web",
          url: "batgerel.vercel.app",
        },
      ],
    },
  ];

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
    <>
      <Head>
        <title>Uguumur - Teacher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dark:bg-gray-800 relative bg-slate-100 h-full flex flex-col gap-4 justify-start items-center dark:text-slate-100">
        <div className="w-full sticky bg-opacity-40  backdrop-blur-lg drop-shadow dark:border-b dark:border-cyan-400 top-0 h-20 shadow flex justify-between items-center px-4">
          <button className="h-12 w-12 rounded-full bg-neutral-800 dark:bg-cyan-400 flex justify-center items-center">
            <div className="font-extrabold text-slate-100 text-3xl">U</div>
          </button>
          <div className="flex items-center gap-8 text-sm">
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
        <div className="w-80 border border-gray-200 dark:border-cyan-400 bg-slate-100 hover:shadow-cyan-400 dark:shadow-cyan-400 dark:bg-gray-800 rounded-md shadow-lg flex flex-col items-center py-8">
          <div className="w-28 h-28 rounded-full shadow border dark:border-cyan-400 flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="uguumur.png"
              alt="profile"
            />
          </div>
          <div className="font-bold mt-4">{profile.fullname}</div>
          <div className="font-bold">Багш</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {profile.title}
          </div>
          <div className="flex gap-2 mt-8">
            {profile.urls.map((row, i) => (
              <a
                key={i}
                href={row.url}
                className="w-8 h-8 rounded bg-neutral-800 text-slate-100 flex justify-center items-center dark:text-cyan-400 dark:border dark:border-cyan-400"
              >
                {icons[row.icon]}
              </a>
            ))}
          </div>
        </div>
        {/* Сурагчид */}
        <div className="mt-12 font-bold text-gray-700 gap-2 flex items-center justify-center flex-col md:flex-row dark:text-gray-300">
          <div className="flex gap-2 justify-center items-center ">
            <span className="border-gray-700 rounded border p-1 dark:bg-gray-200 dark:text-gray-800  dark:border-gray-300">
              Next.js
            </span>
            +
            <span className="border-cyan-500 text-cyan-500 rounded border p-1">
              Tailwindcss
            </span>
          </div>
          <span>сургалтыг амжилттай төгссөн</span>
        </div>
        <div className=" w-[80%] flex flex-col items-center">
          <div className="w-1 h-8 bg-gray-200 rounded-t border-t border-l border-neutral-400 dark:bg-cyan-400"></div>
          <div className="bg-gray-200 border-l border-neutral-400 h-1 w-full rounded-t dark:bg-cyan-400"></div>
          <div className="flex justify-between w-full">
            <div className="bg-gray-200 h-8 w-1 rounded-b  border-l border-neutral-400 dark:bg-cyan-400"></div>
            <div className="bg-gray-200 h-8 w-1 rounded-b  border-l border-neutral-400 dark:bg-cyan-400"></div>
            <div className="bg-gray-200 h-8 w-1 rounded-b hidden md:block border-b border-l border-neutral-400 dark:bg-cyan-400"></div>
            <div className="bg-gray-200 h-8 w-1 rounded-b hidden md:block border-b border-l border-neutral-400 dark:bg-cyan-400"></div>
          </div>
        </div>
        <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {students.map((row, i) => (
            <div
              key={i}
              className="w-full border border-gray-200 dark:border-cyan-400 h-54 hover:shadow-cyan-400 bg-slate-100 dark:bg-gray-800 rounded-md shadow-lg flex flex-col items-center py-8"
            >
              <div className="w-28 h-28 rounded-full shadow border dark:border-cyan-400 flex items-center justify-center">
                {row.img ? (
                  <>
                    <img
                      className="w-24 h-24 rounded-full object-cover bg-neutral-800 flex justify-center items-center text-sx"
                      src=""
                      alt="]"
                    />
                  </>
                ) : (
                  <div className="bg-slate-200 dark:bg-neutral-800 h-24 w-24 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-20 h-20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="font-bold mt-4">{row.fullname}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 ">
                {row.title}
              </div>
              <div className="flex gap-2 mt-8">
                {row.urls.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    className="w-8 h-8 rounded bg-neutral-800 text-slate-100 flex justify-center items-center dark:text-cyan-400 dark:border dark:border-cyan-400"
                  >
                    {icons[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="h-8 bg-neutral-800 dark:bg-gray-700 text-slate-100 w-full flex items-center justify-center text-xs">
          2023 он
        </div>
      </div>
    </>
  );
}
