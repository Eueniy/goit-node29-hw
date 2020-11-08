const yargs = require("yargs");

const users = [
  {
    id: 1,
    name: "Jane",
    surname: "Doe",
  },
  {
    id: 2,
    name: "Mike",
    surname: "Douglas",
  },
];

const argv = yargs
  .number("id")
  .string("name")
  .string("surname")
  .alias("name", "n")
  .alias("surname", "s").argv; // argv позволяет вытянуть распарсенные объекты

// короткое имя обозначается не двумя дефизами, а одним,
// т.е. чтобы вызвать имя можно прописать --name или -n

// const { id, name, surname } = argv;

const usersFound = users.filter((user) => {
  // if (id && id !== user.id) {
  //   return false;
  // }
  // if (name && name !== user.name) {
  //   return false;
  // }
  // if (surname && surname !== user.surname) {
  //   return false;
  // }
  return (
    checkField("id", user) &&
    checkField("name", user) &&
    checkField("surname", user)
  );
});

function checkField(fieldName, user) {
  return !(argv[fieldName] && argv[fieldName] !== user[fieldName]);
}
console.log(usersFound);
