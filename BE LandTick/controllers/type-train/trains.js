const models = require("../../models");
const Train = models.train;

exports.index = async (req, res) => {
  try {
    const getTrains = await Train.findAll({ attributes: ["id", "type_train"] });
    if (getTrains) {
      res.status(200).send({
        status: 200,
        message: "success",
        getTrains
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "not found"
      });
    }
  } catch (error) {
    res.send(error);
  }
};
