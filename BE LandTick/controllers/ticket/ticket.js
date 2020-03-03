const modals = require("../../models");
const Ticket = modals.ticket;
// -POST /ticket
exports.store = async (req, res) => {
  try {
    const storeTicket = await Ticket.create(req.body);
    if (storeTicket) {
      res.status(200).send({
        status: 200,
        message: "success",
        storeTicket
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

// exports.index = async (req, res) => {
//   try {
//     const storeTicket = await Ticket.create(req.body);
//     if (storeTicket) {
//       res.status(200).send({
//         status: 200,
//         message: "success",
//         storeTicket
//       });
//     } else {
//       res.status(404).send({
//         status: 404,
//         message: "no data"
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// ============================================
// find all
// -GET /tickets?start_time=2020-03-03
// -GET /tickets?date_time_gte=2020-12-31 07:00:00&date_time_lte=2020-01-05
