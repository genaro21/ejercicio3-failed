// const fs = require("fs");

// const strDatabase = fs.readFileSync("src/database.json", "utf-8");
// const database = JSON.parse(strDatabase);
// console.log({ database });

// const newLibro = {
//   titulo: req.titulo,
//   descripcion: req.descripcion,
//   puntuacion: req.puntuacion,
// };

// database.libros.push(newLibro);

// fs.writeFile("src/database.json", JSON.stringify(database), (err) => {
//   if (err) {
//     console.log("err: ", err);
//   }
// });

const create = (req, res) => {
  console.log(req.body);
  res.send("Hello, libros create");
};
const all = (req, res) => {
  res.send("Hello, libros all");
};
const get = (req, res) => {
  res.send("Hello, libros get");
};
const update = (req, res) => {
  res.send("Hello, libros update");
};
const remove = (req, res) => {
  res.send("Hello, libros remove");
};

module.exports = {
  create,
  all,
  get,
  update,
  remove,
};
