const admin = require("./admin.controllers");
const user = require("./user.controllers");
const anonim = require("./anonim.controllers");
const libros = require("./libros.controllers");

module.exports = {
  admin,
  user,
  anonim,
  libros,
};
