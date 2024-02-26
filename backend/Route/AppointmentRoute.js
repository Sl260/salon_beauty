const express = require("express");

const auth = require("../Middleware/auth");
const AppointmentController = require("../Controller/AppointmentController");
const router = express.Router();

router.post("/create-appointment", AppointmentController.createAppointment);

router.get("/appointments", auth.auth, AppointmentController.getAppointments);
router.get(
  "/appointments/:id",
  auth.auth,
  AppointmentController.getAppointmentById
);
router.patch(
  "/update-appointment/:id",
  auth.auth,
  AppointmentController.updateAppointment
);
router.delete(
  "/delete-appointment/:id",
  auth.auth,
  AppointmentController.deleteAppointment
);

module.exports = router;
