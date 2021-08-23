const create = (req, res) => {
  res.send("Hello, admin create");
};
const all = (req, res) => {
  res.send("Hello, admin all");
};
const get = (req, res) => {
  res.send("Hello, admin get");
};
const update = (req, res) => {
  res.send("Hello, admin update");
};
const remove = (req, res) => {
  res.send("Hello, admin remove");
};

module.exports = {
  create,
  all,
  get,
  update,
  remove,
};
