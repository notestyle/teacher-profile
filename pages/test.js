import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Test() {
  const [fact, setFact] = useState({});
  const [users, setUsers] = useState([]);

  const data = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];

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

    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  }, []);

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
      <div className="grid grid-cols-3 w-full p-8 gap-4">
        {data.map((row) => (
          <div className="h-40 bg-orange-300 rounded flex px-4 items-center gap-4">
            <img src={row.avatar} className="w-32 h-32 rounded" />
            <div>
              <div>email: {row.email}</div>
              <div>firstname: {row.first_name}</div>
              <div>lastname: {row.last_name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
