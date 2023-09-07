const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    nombre: {
      type: String,
      required: [true, "nombre is required"],
    },
    apellido: {
      type: String,
      required: [true, "apellido is required"],
    },
    telefono: {
      type: String,
      required: [true, "telefono no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    clinica: {
      type: String,
      required: [true, "clinica is required"],
    },
    especialidad: {
      type: String,
      required: [true, "especialidad is require"],
    },
    status: {
      type: String,
      default: "pending",
    },
    tiempo: {
      type: Object,
      required: [true, "Tiempo de trabajo is required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
