import Header from "../components/header";

export default function Plan() {
  return (
    <div className="w-screen h-full ">
      <Header />
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
