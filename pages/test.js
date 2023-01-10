import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Test() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const createUser = () => {
    fetch("https://reqres.in/api/users", {
      method: "DELETE",
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    })
      .then((response) =>
        response.status == 201
          ? toast.success("Амжилттай хадгалагдлаа.")
          : toast.warn("Хадгалагдсангүй")
      )
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    // fetch("https://catfact.ninja/fact")
    //   .then((response) => response.json())
    //   .then((json) => setFact(json))
    //   .catch((err) => console.log("dsf", err));

    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  }, [page]);

  return (
    <>
      <div className="w-full flex justify-center mt-4">
        <div className="flex flex-col gap-4 bg-slate-300 rounded p-8">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="job" />
          <button
            className="bg-green-700 text-white rounded"
            onClick={() => createUser()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full p-8 gap-4">
        {users.map((row) => (
          <div className="h-40 bg-orange-300 rounded flex px-2 w-full items-center gap-4">
            <img src={row.avatar} className="w-20 h-20 rounded" />
            <div>
              <div>email: {row.email}</div>
              <div>firstname: {row.first_name}</div>
              <div>lastname: {row.last_name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mb-4 gap-4">
        <button
          onClick={() => setPage(page - 1)}
          className="w-8 h-8 flex items-center justify-center bg-orange-400 rounded text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {page}
        <button
          onClick={() => setPage(page + 1)}
          className="w-8 h-8 flex items-center justify-center bg-orange-400 rounded text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
