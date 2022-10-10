// import React, { Component, useEffect, useState } from "react";

export default function Registro_Servicio() {
  return (
    <div className="max-w-md max-h-full mx-auto">
      <br />
      <form
        className="bg-slate-800 py-10 rounded-md"
        style={{ color: "white" }}
      >
        <h1 style={{ textAlign: "center" }}>Registro Servicio</h1>
        <div class="form-group px-11">
          <label>Nombre Servicio</label>
          <input
            class="form-control"
            id="nombreServicio"
            placeholder="Nombre Servicio"
          />
        </div>

        <div class="form-group px-11">
          <label>Correo</label>
          <input
            class="form-control"
            id="correoUsuario"
            placeholder="Correo@correo.com"
          />
        </div>

        <div class="form-group px-11">
          <label for="contrasenaUsuario">Password</label>
          <input
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
          <input class="form-control" id="paisUsuario" placeholder="País" />
        </div>

        <div class="form-group px-11">
          <label>Ciudad</label>
          <input class="form-control" id="ciudadUsuario" placeholder="Ciudad" />
        </div>

        <div class="form-group px-11">
        <label>Tipo Servicio</label>
          <select class="form-select" aria-label="Select de Servicio">
            <option selected value="1">Hotel</option>
            <option value="2">Aerolinea</option>
            <option value="3">Autos</option>
          </select>
        </div>

        <div class="form-group px-11 content-center align-middle">
          <button type="submit" class="btn btn-success mt-2 mx-5">
            Registrarse
          </button>

          <a class="btn btn-danger mt-2" href="/" role="button">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}
