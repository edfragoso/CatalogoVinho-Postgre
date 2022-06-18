const res = require("express/lib/response");
const Vinho = require("../models/Vinho");
let message = '';

const getAll = async (req, res) => {
  try {
    const vinho = await Vinho.findAll();
    res.render("index", { vinho, message });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const signup = (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const description = async (req, res) => {
  try {
    const vinho = await Vinho.findAll();
    const vinhoId = await Vinho.findByPk(req.params.id);

    res.render("description", {
      vinho,
      vinhoId,
      vinhoIdPut: null,
      vinhoIdDel: null,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const vinho = req.body;

    if (!vinho) {
      return res.redirect("/signup");
    }

    await Vinho.create(vinho);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

// --
const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const vinho = await Vinho.findAll();
    const vinhoId = await Vinho.findByPk(req.params.id);

    if (method == "put") {
      res.render("description", {
        vinho,
        vinhoId,
        vinhoIdPut: vinhoId,
        vinhoIdDel: null,
      });
    } else {
      res.render("description", {
        vinho,
        vinhoId,
        vinhoIdPut: null,
        vinhoIdDel: vinhoId,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const vinho = req.body;
    await Vinho.update(vinho, { where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Vinho.destroy({ where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  signup,
  description,
  create,
  getById,
  update,
  remove,
};
