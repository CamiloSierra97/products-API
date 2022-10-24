//? Dependencies
const express = require("express");
const db = require("./utils/database");

//? Files
const config = require("./config");

//? Routes
const productRoutes = require("./products/products.router");

//? Initial Configs
const app = express();

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database autenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

//? Petitions

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server OK!",
    users: `localhost:${config.port}/products`,
  });
});

//? Verbs
app.use("/products", productRoutes);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
