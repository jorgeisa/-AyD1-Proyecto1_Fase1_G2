import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function Registro_Turista() {
  const [usuarioTurista, setUsuarioTurista] = useState("");
  const [correoTurista, setCorreoTurista] = useState("");
  const [contraseñaTurista, setContraseñaTurista] = useState("");
  const [nombreCompletoTurista, setNombreCompletoTurista] = useState("");
  const [fechaTurista, setFechaTurista] = useState("");
  const [paisTurista, setPaisTurista] = useState("");
  const [ciudadTurista, setCiudadTurista] = useState("");

  async function registrar() {
    const res = await axios.post("http://34.125.5.215:4000/newUsuario", {
      Usuario: usuarioTurista,
      Tipo_usuario: "1",
      Correo_Electronico: correoTurista,
      Nombre_Completo: nombreCompletoTurista,
      Fecha_Nacimiento: fechaTurista,
      Pass: contraseñaTurista,
      Pais: paisTurista,
      Ciudad: ciudadTurista,
    });
    console.log(res.data);
    window.alert("Tu usuario turista se ha registrado!");
  }

  return (
    <div className="max-w-md max-h-full mx-auto">
      {/*console.log(
        usuarioTurista +
          "-" +
          correoTurista +
          "-" +
          contraseñaTurista +
          "-" +
          nombreCompletoTurista +
          "-" +
          fechaTurista +
          "-" +
          paisTurista +
          "-" +
          ciudadTurista
      )*/}
      <br />
      <form
        className="bg-slate-800 py-10 rounded-md"
        style={{ color: "white" }}
      >
        <h1 style={{ textAlign: "center" }}>Registro Turista</h1>
        <div class="form-group px-11">
          <label>Nombre Usuario</label>
          <input
            onChange={(e) => setUsuarioTurista(e.target.value)}
            value={usuarioTurista}
            class="form-control"
            id="nombreUsuario"
            placeholder="Nombre Usuario"
          />
        </div>

        <div class="form-group px-11">
          <label>Correo</label>
          <input
            onChange={(e) => setCorreoTurista(e.target.value)}
            value={correoTurista}
            class="form-control"
            id="correoUsuario"
            placeholder="Correo@correo.com"
          />
        </div>

        <div class="form-group px-11">
          <label for="contrasenaUsuario">Password</label>
          <input
            onChange={(e) => setContraseñaTurista(e.target.value)}
            value={contraseñaTurista}
            type="password"
            class="form-control"
            id="contrasenaUsuario"
            aria-describedby="avisoContraseña"
            placeholder="Contraseña"
          />
          <small id="avisoContraseña" class="text-red-600">
            * Nunca compartas tu contraseña!
          </small>
        </div>

        <div class="form-group px-11">
          <label>Nombre Completo</label>
          <input
            onChange={(e) => setNombreCompletoTurista(e.target.value)}
            value={nombreCompletoTurista}
            class="form-control"
            id="nombreCompletoUsuario"
            placeholder="Nombre Completo"
          />
        </div>

        <div class="form-group px-11">
          <label>Fecha Nacimiento</label>
          <input
            onChange={(e) => setFechaTurista(e.target.value)}
            value={fechaTurista}
            type="date"
            class="form-control"
            id="fechaNacimientoUsuario"
          />
        </div>

        <div class="form-group px-11">
          <label>Pais</label>
          <input
            onChange={(e) => setPaisTurista(e.target.value)}
            value={paisTurista}
            class="form-control"
            id="paisUsuario"
            placeholder="País"
          />
        </div>

        <div class="form-group px-11">
          <label>Ciudad</label>
          <input
            onChange={(e) => setCiudadTurista(e.target.value)}
            value={ciudadTurista}
            class="form-control"
            id="ciudadUsuario"
            placeholder="Ciudad"
          />
        </div>

        <div class="form-group px-11 content-center align-middle">
          <Button variant="info" onClick={(e) => registrar()}>
            {" "}
            Registrar
          </Button>

          <a class="btn btn-danger mt-2" href="/" role="button">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}
