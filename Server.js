const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const EndangeredSpecies = require("./Routes/EndangeredSpecies.route");
app.use("/api/EndangeredSpecies", EndangeredSpecies);

const ArticleRoute = require("./Routes/Article.route");
app.use("/api/Articles", ArticleRoute);

const AdminRoute = require("./Routes/Admin.route");
app.use("/api/Admins", AdminRoute);

const ResourceRoute = require("./Routes/Resources.route");
app.use("/api/Resources", ResourceRoute);

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DB_CONNECT, err => {
  if (err) {
    console.log("mongo connection error ", err);
  } else {
    console.log("Mongodb connection success");
  }
});

app.listen(port, err => {
  if (!err) {
    console.log(`Server is up and running on port: ${port}`);
  } else {
    console.log("Server Connection Error ", err);
  }
});
