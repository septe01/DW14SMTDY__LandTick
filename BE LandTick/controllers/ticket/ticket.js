const modals = require("../../models");
const Ticket = modals.ticket;
const Train = modals.train;
// -POST /ticket
exports.store = async (req, res) => {
  try {
    res.send(req.body);
    const storeTicket = await Ticket.create(req.body);
    if (storeTicket) {
      res.status(200).send({
        status: 200,
        message: "success",
        storeTicket
      });
    } else {
      res.status(204).send({
        status: 204,
        message: "cant create"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const ticket = await Ticket.findAll({
      attributes: [
        "id",
        "name_train",
        "date_start",
        "start_station",
        "start_time",
        "destination_station",
        "arival_time",
        "price",
        "qty"
      ],
      include: { model: Train, attributes: ["type_train"] }
    });
    if (ticket) {
      res.status(200).send({
        status: 200,
        message: "success",
        ticket
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "no data"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// ============================================
// find all
// -GET /tickets?start_time=2020-03-03
// -GET /tickets?date_time_gte=2020-12-31 07:00:00&date_time_lte=2020-01-05
