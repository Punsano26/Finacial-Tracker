const finacialController = require("../controllers/financial.controller");
const express = require("express");
const { Financial } = require("../models");
const router  = express.Router();

//create a new 
router.post(
    "/", finacialController.create
)
//Retrieve all financial record
router.get("/", finacialController.findAll);

//Retrieve a financial record with id
router.get("/:id", finacialController.findOne);

//Retrieve all financial records By UserId
router.get("/user/:userId", finacialController.findAllByUserID);

//Update a financial record with id
router.put("/:id", finacialController.update);

//Delete a finacial record whit id
router.delete("/:id", finacialController.deletebyid);
module.exports = router;