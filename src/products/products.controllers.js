//? Dependencies
const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = async () => {
  const data = await Products.findAll();
  return data;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    description: data.description,
    category: data.category,
    price: data.price,
    isAvaliable: data.isAvaliable,
  });
  return newProduct;
};

const updateProduct = async (id, data) => {
  const result = await Products.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
