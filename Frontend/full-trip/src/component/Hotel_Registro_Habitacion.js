// import React, { Component, useEffect, useState } from "react";
import Navbar_Hotel from "./Navbar_Hotel";
import { ExtractRouteParams } from "wouter";

export default function Hotel_Registro_Habitacion(props) {   
    

  return (
    
    <div>
      <Navbar_Hotel user={props.params.user} />
      <h3 className="mt-6" style={{color: "white"}}>Bienvenido {props.params.user}</h3>
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
              class="form-control"
              id="nombreHabitacion"
              placeholder="Nombre Habitacion"
            />
          </div>

          <div class="form-group px-11">
            <label>Precio</label>
            <input
              class="form-control"
              id="precioHabitacion"
              placeholder="1000"
            />
          </div>

          <div class="form-group px-11">
            <label for="personasHotel">Cantidad Personas</label>
            <input
              type="number"
              class="form-control"
              id="personasHabitacion"
              placeholder="2"
            />
          </div>

          <div class="form-group px-11 content-center align-middle">
            <button type="submit" class="btn btn-success mt-2 mx-1">
              Registrar Habitacion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
