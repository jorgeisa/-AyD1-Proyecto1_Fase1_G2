import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function Registro_Servicio() {
  const [nombreServicio, setNombreServicio] = useState("");
  const [correoServicio, setCorreoServicio] = useState("");
  const [contrasenaServicio, setContrasenaServicio] = useState("");
  const [paisServicio, setPaisServicio] = useState("");
  const [ciudadServicio, setCiudadServicio] = useState("");
  const [tipoServicio, setTipoServicio] = useState("");

  function seleccionado() {
    // seleccion
    var cod = document.getElementById("select").value;
    setTipoServicio(cod);
  }

  async function registrar() {
    if (tipoServicio == "2" || tipoServicio == "3" || tipoServicio == "4") {
      // Hotel
      // Autos
      // Aerolinea

      const res = await axios.post("http://34.125.5.215:4000/newUsuario", {
        Usuario: nombreServicio,
        Tipo_usuario: tipoServicio,
        Correo_Electronico: correoServicio,
        Nombre_Completo: nombreServicio,
        Pass: contrasenaServicio,
        Pais: paisServicio,
        Ciudad: ciudadServicio,
      });
      console.log(res.data);
      window.alert("Tu usuario se ha registrado!");
    } else {
      // error
      window.alert("Seleccione un tipo de Servicio Valido!");
      return;
    }
  }

  return (
    <div className="max-w-md max-h-full mx-auto">
      {/*console.log(
        nombreServicio +
          "-" +
          correoServicio +
          "-" +
          contrasenaServicio +
          "-" +
          paisServicio +
          "-" +
          ciudadServicio +
          "-" +
          tipoServicio
      )*/}
      <br />
      <form
        className="bg-slate-800 py-10 rounded-md"
        style={{ color: "white" }}
      >
        <h1 style={{ textAlign: "center" }}>Registro Servicio</h1>
        <div class="form-group px-11">
          <label>Nombre Servicio</label>
          <input
            onChange={(e) => setNombreServicio(e.target.value)}
            value={nombreServicio}
            class="form-control"
            id="nombreServicio"
            placeholder="Nombre Servicio"
          />
        </div>

        <div class="form-group px-11">
          <label>Correo</label>
          <input
            onChange={(e) => setCorreoServicio(e.target.value)}
            value={correoServicio}
            class="form-control"
            id="correoUsuario"
            placeholder="Correo@correo.com"
          />
        </div>

        <div class="form-group px-11">
          <label for="contrasenaUsuario">Contraseña</label>
          <input
            onChange={(e) => setContrasenaServicio(e.target.value)}
            value={contrasenaServicio}
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
          <label>Pais</label>
          <input
            onChange={(e) => setPaisServicio(e.target.value)}
            value={paisServicio}
            class="form-control"
            id="paisUsuario"
            placeholder="País"
          />
        </div>

        <div class="form-group px-11">
          <label>Ciudad</label>

          <input
            onChange={(e) => setCiudadServicio(e.target.value)}
            value={ciudadServicio}
            class="form-control"
            id="ciudadUsuario"
            placeholder="Ciudad"
          />
        </div>

        <div class="form-group px-11">
          <label>Tipo Servicio</label>
          <select
            class="form-select"
            id="select"
            onChange={() => seleccionado()}
            aria-label="Select de Servicio"
          >
            <option selected>Tipo Servicio</option>
            <option value="2">Hotel</option>
            <option value="3">Autos</option>
            <option value="4">Aerolinea</option>
          </select>
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
