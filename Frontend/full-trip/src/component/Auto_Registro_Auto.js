// import React, { Component, useEffect, useState } from "react";
import Navbar_Auto from "./Navbar_Auto";

export default function Auto_Registro_Auto() {
  return (
    <div>
      <Navbar_Auto />

      <div className="max-w-md max-h-full mx-auto">
        <br />
        <form
          className="bg-slate-800 py-14 rounded-md"
          style={{ color: "white" }}
        >
          <h1 style={{ textAlign: "center" }}>Registro Automovil</h1>
          <div class="form-group px-11">
            <label>Placa</label>
            <input
              class="form-control"
              id="placaAuto"
              placeholder="Placa Automovil"
            />
          </div>

          <div class="form-group px-11">
            <label>Marca</label>
            <input
              class="form-control"
              id="marcaAuto"
              placeholder="Volkswagen"
            />
          </div>

          <div class="form-group px-11">
            <label>Precio</label>
            <input
              class="form-control"
              id="precioAuto"
              placeholder="1000"
            />
          </div>

          <div class="form-group px-11">
            <label for="modeloAuto">Modelo</label>
            <input
              type="number"
              class="form-control"
              id="modeloAuto"
              placeholder="2002"
            />
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
