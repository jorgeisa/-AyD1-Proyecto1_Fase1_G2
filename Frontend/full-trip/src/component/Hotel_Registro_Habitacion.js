import React, { Component, useEffect, useState } from "react";
import Navbar_Hotel from "./Navbar_Hotel";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function Hotel_Registro_Habitacion(props) {
  const [usuarioHotel, setUsuarioHotel] = useState();
  const [disponibleHabitacion, setDisponibleHabitacion] = useState();
  const [precioHabitacion, setPrecioHabitacion] = useState();
  const [cantidadHabitacion, setCantidadHabitacion] = useState();
  const [nombreHabitacion, setNombreHabitacion] = useState();

  async function registrar() {
    setUsuarioHotel(props.params.user);
    const res = await axios.post("http://34.125.5.215:4000/newHabitacion", {
      Hotel_usuario: usuarioHotel,
      Disponible: 1,
      Precio: precioHabitacion,
      Cantidad_Personas: cantidadHabitacion,
      Nombre_Habitacion: nombreHabitacion
    });
    console.log(res.data);
    window.alert("Tu habitacion se ha registrado!");
  }

  return (
    <div>
      <Navbar_Hotel user={props.params.user} />
      <h3 className="mt-6" style={{ color: "white" }}>
        Bienvenido {props.params.user}
      </h3>
      <div className="max-w-md max-h-full mx-auto">
        <br />
        <form
          className="bg-slate-800 py-14 rounded-md"
          style={{ color: "white" }}
        >
          <h1 style={{ textAlign: "center" }}>Registro Habitacion Hotel</h1>
          <div class="form-group px-11">
            <label>Nombre Habitacion</label>
            <input
              onChange={(e) => setNombreHabitacion(e.target.value)}
              value={nombreHabitacion}
              class="form-control"
              id="nombreHabitacion"
              placeholder="Nombre Habitacion"
            />
          </div>

          <div class="form-group px-11">
            <label>Precio</label>
            <input
              onChange={(e) => setPrecioHabitacion(e.target.value)}
              value={precioHabitacion}
              class="form-control"
              id="precioHabitacion"
              placeholder="1000"
            />
          </div>

          <div class="form-group px-11">
            <label>Cantidad Personas</label>
            <input
              onChange={(e) => setCantidadHabitacion(e.target.value)}
              value={cantidadHabitacion}
              type="number"
              class="form-control"
              id="personasHabitacion"
              placeholder="2"
            />
          </div>

          <div class="form-group px-11 content-center align-middle">
            <Button variant="info" onClick={(e) => registrar()}>
              {" "}
              Registrar Habitacion
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
