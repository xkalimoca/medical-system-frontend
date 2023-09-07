import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Especialidad</b> {doctor.especialidad}
          </p>
          <p>
            <b>Clinica</b> {doctor.clinica}
          </p>
          <p>
            <b>Tiempo</b> {doctor.tiempo[0]} - {doctor.tiempo[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
