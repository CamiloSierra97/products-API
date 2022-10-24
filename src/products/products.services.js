const productControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
  productControllers
    .getAllProducts()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  productControllers
    .getProductById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const patchProduct = (req, res) => {
  const id = req.params.id;
  const { name, description, category, price } = req.body;
  productControllers
    .updateProduct(id, { name, description, category, price })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Product with ID ${id}, edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createProduct = (req, res) => {
  const data = req.body;
  if (data.name && data.description && data.category && data.price) {
    productControllers
      .createProduct({
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        description: "string",
        category: "string",
        price: "number",
      },
    });
  }
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  productControllers
    .deleteProduct(id)
    .then((data) => {
      if (data !== 0) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllProducts,
  getProductById,
  patchProduct,
  createProduct,
  deleteProduct,
};
