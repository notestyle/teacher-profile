const a = 1; // Дахиж өөрчлөх боломжгүй
let b = 1; // Дахиж өөрчлөнө

const students = [
  { firstname: "Uunuu", title: "SE" },
  { firstname: "Ganzorig", title: "SE" },
];

const students2 = [
  { firstname: "Urnaa", title: "SE" },
  { firstname: "Khulguu", title: "SE" },
];

console.log(
  students.map((person, i) => {
    return { name: person.firstname, age: i };
  })
);
