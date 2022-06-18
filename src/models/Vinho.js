const Sequelize = require("sequelize");
const connection = require("../database/bd");

const Vinho = connection.define(
  "vinhotinto",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    uva: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    classificacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    safra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    updateAt: false,
  }
);

module.exports = Vinho;
