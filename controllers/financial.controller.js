const Financial = require("../models/finacial.model");

//create a new Financial record
exports.create = async (req, res) => {
  const { userId, date, description, amount, category, paymentMethod } =
    req.body;
  const newRecord = {
    userId,
    date,
    description,
    amount,
    category,
    paymentMethod,
  };
  await Financial.create(newRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .send({
          message:
            error.message ||
            "Some error occured while saving the financial record",
        });
    });
};

//retreive all financial records
exports.findAll = async (req, res) => {
  await Financial.create(newRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occured while saving the financial record",
      });
    });
};

//retreive all financial records
exports.findOne = async (req, res) => {
    const userId = req.params.userId;
    const newRecord = {
      userId,
      date,
      description,
      amount,
      category,
      paymentMethod,
    };
    await Financial.create(newRecord)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Some error occured while saving the financial record",
        });
      });
}

//Retrireve all financial record by User Id
exports.findAllByUserID = async (req, res) => {
   const userId = req.params.userId; 
   //Selcect
   const newRecord = {
     userId,
     date,
     description,
     amount,
     category,
     paymentMethod,
   };
   await Financial.create(newRecord)
     .then((data) => {
       res.send(data);
     })
     .catch((error) => {
       res.status(500).send({
         message:
           error.message ||
           "Some error occured while saving the financial record",
       });
     });
}



//Update a financial record by ID
exports.update = async (req,res)=> {
    const id = req.params.id;
    await Financial.update(req.body, { where: { id: id}}).then((num) => {
        if (num ===1) {
            res.send({ message: "Financial was update successfuly"});
        } else {
            res.send({
                message:
                "Connot update Financial with id" + id +
                ". Maybe Financial was not found or res.body is empty",
            });
        }
    }).catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Somthing error occurred while creating the restaurants",
        });
    });
}

//Delete A Financial
  exports.deletebyid = async (req, res) => {
    const id = req.params.id;
    await Financial.destroy({
      where: {
        id: id,
      },
    })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Financial was Deleted successfully" });
        } else {
          res.send({
            message: "Cannot Delete Financial with id=" + id + ".",
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Somthing error occurred while creating the Financial.",
        });
      });
  };