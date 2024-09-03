const finacialController = require("../controllers/financial.controller");
const express = require("express");
const router  = express.Router();

//create a new 
// http://localhost:9999/api/v1/financial/
router.post(
    "/", finacialController.create
)
//Retrieve all financial record
router.get("/", finacialController.findAll);

//Retrieve a financial record with id
router.get("/:id", finacialController.findAllByUserID);

//Retrieve all financial records By UserId
router.get("/user/:userID", finacialController.getFinancialByID);

//Update a financial record with id
router.put("/:id", finacialController.update);

//Delete a finacial record whit id
router.delete("/:id", finacialController.deletebyid);
module.exports = router;