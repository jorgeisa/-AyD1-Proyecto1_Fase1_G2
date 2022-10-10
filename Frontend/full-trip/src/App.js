import React, { Component, useEffect, useReducer, useState } from "react";
import "./App.css";
//import librerias
import { Link, Route } from "wouter";
//import rutas
import principal from "./component/principal";
import Login from "./component/login";
import Hotel_Turista from "./component/hotel_turista";
import Creacion_Hotel from "./component/creacion_hotel";
import Admin_hotel from "./component/admin_hotel";
import Admin_hotel_eliminar from "./component/admin_hotel_eliminar";

import Reservacion from "./component/reservacion";
import Crear_Resena from "./component/crear_resena";

import Registro_Turista from "./component/Registro_Turista";
import Registro_Servicio from "./component/Registro_Servicio";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="">
        <Route exact path="/" component={principal}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/hotel-turista" component={Hotel_Turista}></Route>
        <Route exact path="/creacion-hotel" component={Creacion_Hotel}></Route>
        <Route exact path="/admin-hotel-crear" component={Admin_hotel}></Route>
        <Route
          exact
          path="/admin-hotel-eliminar"
          component={Admin_hotel_eliminar}
        ></Route>
        <Route exact path="/reservacion" component={Reservacion}></Route>
        <Route exact path="/crear-resena" component={Crear_Resena}></Route>

        <Route exact path="/registro-turista" component={Registro_Turista}></Route>
        <Route exact path="/registro-servicio" component={Registro_Servicio}></Route>
      </div>
    </main>
  );
}

export default App;
