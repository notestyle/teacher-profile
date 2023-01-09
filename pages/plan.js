export default function Plan() {
  return (
    <div className="w-screen h-full ">
      <div className="h-28  w-full bg-slate-100 dark:bg-gray-900 dark:text-slate-100 dark:shadow-cyan-400 shadow-md flex justify-between items-center px-4">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center ">
          <div className="text-slate-100 text-3xl font-extrabold">U</div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="hidden md:block lg:hidden">Нүүр</div>
          <div className="bg-gray-800 px-2 py-1 rounded text-slate-100">
            Сургалт
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="h-screen w-full dark:bg-gray-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
        <div className="w-full h-72 bg-slate-300 shadow-lg border-2 border-cyan-400"></div>
      </div>
    </div>
  );
}
