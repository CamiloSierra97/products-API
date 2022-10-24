const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Products = db.define("products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isAvaliable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "is_avaliable",
    defaultValue: true,
  },
});

module.exports = Products;
