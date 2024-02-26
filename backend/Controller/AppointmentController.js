require("dotenv").config({ path: "../.env" });
const Appointment = require("../Model/Appointment");

exports.createAppointment = (req, res) => {
  const { email, firstName, lastName, date } = req.body;
  console.log("new", req.body);

  // Create appointment
  let newAppointment = new Appointment({
    firstName,
    lastName,
    email,
    date,
  });

  console.log("new", newAppointment);

  newAppointment
    .save()
    .then(() => {
      res.status(201).json({ message: "Appointment registered successfully" });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Cannot register an appointment" + err,
      });
    });
};

// update appointment

exports.updateAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedAppointment = await Appointment.findOneAndUpdate(
      { id: id },
      req.body,
      { new: true }
    );

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get appointments

exports.getAppointments = async (req, res) => {
  try {
    console.log("hit");

    const appointments = await Appointment.find();
    console.log("hit");

    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get appointments by id

exports.getAppointmentById = async (req, res) => {
  const id = req.params.id;

  try {
    const appointment = await Appointment.findOne({ id: id });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete appointments

exports.deleteAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    await Appointment.findOneAndDelete({ id: id });

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
