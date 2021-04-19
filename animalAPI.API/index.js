const express = require("express");
const port = 3000;
const path = require("path");
const router = express.Router();
const app = express();

app.use("/", router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

//Functions
const getAddAnimal = (req, res) => {
  res.render("addAnimals");
};

const addAnimal = (req, res) => {
  res.send("Successfully added data");
};

//Routes
router.get("/getAddAnimal", getAddAnimal);

router.post("/result", addAnimal);

app.get("/", (req, res) => {
  res.render("animals");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
