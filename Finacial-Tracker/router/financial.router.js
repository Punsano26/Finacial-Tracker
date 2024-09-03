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
router.get("/:id", finacialController.getFinancialByID);

//Retrieve all financial records By UserId
// http://localhost:9999/api/v1/financial/user/
router.get("/user/:userID", finacialController.findAllByUserID);

//Update a financial record with id
router.put("/:id", finacialController.update);

//Delete a finacial record whit id
router.delete("/:id", finacialController.deletebyid);
module.exports = router;