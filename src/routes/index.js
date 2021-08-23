const admin = require("./admin.routes");
const user = require("./user.routes");
const anonim = require("./anonim.routes");
const libros = require("./libros.routes");

module.exports = {
  admin,
  user,
  anonim,
  libros,
};
