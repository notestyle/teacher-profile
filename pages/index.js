import Head from "next/head";
import { useState } from "react";

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
        url: "www.facebook.com/uguumuro",
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
          icon: "fb",
          url: "www.facebook.com/b.temuulen",
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
          icon: "fb",
          url: "www.facebook.com",
        },
        {
          icon: "email",
          url: "mailto:",
        },
        {
          icon: "phone",
          url: "tel:",
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
          icon: "fb",
          url: "www.facebook.com",
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
          url: "urnaa.vercel.app",
        },
        {
          icon: "fb",
          url: "www.facebook.com",
        },
        {
          icon: "email",
          url: "mailto:",
        },
        {
          icon: "phone",
          url: "tel:",
        },
      ],
    },
    {
      fullname: "У.Ганзориг",
      title: "Software Developer",
      urls: [
        {
          icon: "web",
          url: "ganaa.vercel.app",
        },
        {
          icon: "fb",
          url: "www.facebook.com/ganzorig.u",
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
      fullname: "Э.Батгэрэл",
      title: "Senior officer",
      urls: [
        {
          icon: "web",
          url: "batgerel.vercel.app",
        },
        {
          icon: "fb",
          url: "www.facebook.com",
        },
        {
          icon: "email",
          url: "mailto:",
        },
        {
          icon: "phone",
          url: "tel:",
        },
      ],
    },
    {
      fullname: "",
      title: "",
      urls: [
        {
          icon: "web",
          url: "batgerel.vercel.app",
        },
        {
          icon: "fb",
          url: "www.facebook.com",
        },
        {
          icon: "email",
          url: "mailto:",
        },
        {
          icon: "phone",
          url: "tel:",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Uguumur - Teacher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dark:bg-gray-800 relative bg-slate-100 h-full flex flex-col gap-4 justify-start items-center">
        <div className="w-full sticky bg-opacity-40 backdrop-blur-lg drop-shadow-md top-0 h-20 shadow flex justify-between items-center px-4">
          <button className="h-12 w-12 rounded-full bg-neutral-800 flex justify-center items-center">
            <div className="font-extrabold text-slate-100 text-3xl">U</div>
          </button>
          <div className="flex items-center gap-8 text-sm">
            <button className="bg-neutral-800 cursor-pointer hover:bg-slate-700 text-white rounded px-2 py-1">
              Нүүр
            </button>
            <button>Сургалт</button>
          </div>
        </div>
        <div className="w-80 h-72 border border-gray-200 bg-slate-100 hover:shadow-cyan-400 rounded-md shadow-lg flex flex-col items-center py-4">
          <div className="w-28 h-28 rounded-full shadow border flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="uguumur.png"
            />
          </div>
          <div className="font-bold">{profile.fullname}</div>
          <div className="font-bold">Багш</div>
          <div className="text-sm text-gray-600">{profile.title}</div>
          <div className="flex gap-2 mt-8">
            {profile.urls.map((row, i) => (
              <a
                key={i}
                href={row.url}
                className="w-8 h-8 rounded bg-neutral-800 text-slate-100 flex justify-center items-center"
              >
                {icons[row.icon]}
              </a>
            ))}
          </div>
        </div>
        {/* Сурагчид */}
        <div className="mt-12 font-bold text-gray-700 gap-2 flex items-center justify-center">
          <span className="border-gray-700 rounded border p-1">Next.js</span>+
          <span className="border-cyan-500 text-cyan-500 rounded border p-1">
            Tailwindcss
          </span>
          <span>сургалтыг амжилттай төгссөн</span>
        </div>
        <div className=" w-[80%] flex flex-col items-center">
          <div className="w-1 h-8 bg-gray-200 rounded-t border-t border-l border-neutral-400"></div>
          <div className="bg-gray-200 border-l border-neutral-400 h-1 w-full rounded-t"></div>
          <div className="flex justify-between w-full">
            <div className="bg-gray-200 h-8 w-1 rounded-b  border-l border-neutral-400"></div>
            <div className="bg-gray-200 h-8 w-1 rounded-b  border-l border-neutral-400"></div>
            <div className="bg-gray-200 h-8 w-1 rounded-b hidden md:block border-b border-x border-neutral-400"></div>
            <div className="bg-gray-200 h-8 w-1 rounded-b hidden md:block border-b border-x border-neutral-400"></div>
          </div>
        </div>
        <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {students.map((row, i) => (
            <div
              key={i}
              className="w-full border border-gray-200 h-54 hover:shadow-cyan-400 bg-slate-100 rounded-md shadow-md flex flex-col items-center py-4"
            >
              <div className="w-24 h-24 rounded-full bg-neutral-800"></div>
              <div className="font-bold">{row.fullname}</div>
              <div className="text-sm text-gray-600">{row.title}</div>
              <div className="flex gap-2 mt-8">
                {row.urls.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    className="w-8 h-8 rounded bg-neutral-800 text-slate-100 flex justify-center items-center"
                  >
                    {icons[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
