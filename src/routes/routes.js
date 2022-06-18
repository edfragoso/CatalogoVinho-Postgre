const routes = require("express").Router();
const VinhoController = require("../controllers/VinhoController");

routes.get("/", VinhoController.getAll);
routes.get("/signup", VinhoController.signup);
routes.get("/description/:id", VinhoController.description);
routes.post("/create", VinhoController.create);
routes.get("/getById/:id/:method", VinhoController.getById);
routes.post("/update/:id", VinhoController.update);
routes.get("/remove/:id", VinhoController.remove);


module.exports = routes;
