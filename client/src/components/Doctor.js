import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p>
        <b>Especialidad : </b>
        {doctor.speciality}
      </p>
      <p>
        <b>Experiencia : </b>
        {doctor.experience}
      </p>
      <p>
        <b>Teléfono : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Horario : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
