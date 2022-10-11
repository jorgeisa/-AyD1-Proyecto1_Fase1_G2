// import React, { Component, useEffect, useState } from "react";
import Navbar_Vuelo from "./NavbarVuelo";

export default function Vuelo_Registro_Vuelo() {
  return (
    <div>
      <Navbar_Vuelo />

      <div className="max-w-md max-h-full mx-auto">
        <br />
        <form
          className="bg-slate-800 py-14 rounded-md"
          style={{ color: "white" }}
        >
          <h1 style={{ textAlign: "center" }}>Registro Vuelo</h1>
          <div class="form-group px-11">
            <label>Fecha Vuelo</label>
            <input type="date" class="form-control" id="fechaVuelo" />
          </div>

          <div class="form-group px-11">
            <label>Destino</label>
            <input
              class="form-control"
              id="destinoVuelo"
              placeholder="Guatemala"
            />
          </div>

          <div class="form-group px-11">
            <label for="modeloAuto">Cantidad Asientos</label>
            <input
              type="number"
              class="form-control"
              id="cantidadPersonasVuelo"
              placeholder="50"
            />
          </div>

          <div class="form-group px-11">
            <label>Precio</label>
            <input class="form-control" id="precioAuto" placeholder="1000" />
          </div>

          <div class="form-group px-11">
            <label>Tipo Vuelo</label>
            <select class="form-select" aria-label="Select de Servicio">
              <option selected value="1">
                Ida y Vuelta
              </option>
              <option value="2">Ida</option>
            </select>
          </div>

          <div class="form-group px-11 content-center align-middle">
            <button type="submit" class="btn btn-success mt-2 mx-1">
              Registrar Auto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
