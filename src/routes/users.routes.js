const router = require("express").Router();
const userRoutes = require('../controller/users.controller');

router.route("/").get(userRoutes.users);

router.route("/create").post(userRoutes.createUsers);



module.exports = router;
