// import React, { Component, useEffect, useState } from "react";

export default function Registro_Turista() {
  return (
    <div className="max-w-md max-h-full mx-auto">
      <br />
      <form
        className="bg-slate-800 py-10 rounded-md"
        style={{ color: "white" }}
      >
        <h1 style={{ textAlign: "center" }}>Registro Turista</h1>
        <div class="form-group px-11">
          <label>Nombre Usuario</label>
          <input
            class="form-control"
            id="nombreUsuario"
            placeholder="Nombre Usuario"
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
          <label>Nombre Completo</label>
          <input
            class="form-control"
            id="nombreCompletoUsuario"
            placeholder="Nombre Completo"
          />
        </div>

        <div class="form-group px-11">
          <label>Fecha Nacimiento</label>
          <input type="date" class="form-control" id="fechaNacimientoUsuario" />
        </div>

        <div class="form-group px-11">
          <label>Pais</label>
          <input
            class="form-control"
            id="paisUsuario"
            placeholder="País"
          />
        </div>

        <div class="form-group px-11">
          <label>Ciudad</label>
          <input
            class="form-control"
            id="ciudadUsuario"
            placeholder="Ciudad"
          />
        </div>

        <div class="form-group px-11 content-center align-middle">
          <button type="submit" class="btn btn-success mt-2 mx-5">
            Registrarse 
          </button>

          <a class="btn btn-danger mt-2" href="/" role="button">Regresar</a>
        </div>
      </form>
    </div>
  );
}
