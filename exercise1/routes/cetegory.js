const router = require("express").Router();
const {
  create,
  getCat,
  deleted,
  update
} = require("../controller/category");


router.get("/",getCat);
router.post("/create",create);
router.post("/delete/:id",deleted);
router.post("/edit/:id",update);

module.exports = router;
