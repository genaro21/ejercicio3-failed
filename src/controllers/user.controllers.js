const create = (req, res) => {
  res.send("Hello, user create");
};
const all = (req, res) => {
  res.send("Hello, user all");
};
const get = (req, res) => {
  res.send("Hello, user get");
};
const update = (req, res) => {
  res.send("Hello, user update");
};
const remove = (req, res) => {
  res.send("Hello, user remove");
};

module.exports = {
  create,
  all,
  get,
  update,
  remove,
};
