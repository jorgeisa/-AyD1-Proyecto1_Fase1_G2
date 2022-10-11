import React, { Component, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Navbar_Auto from "./Navbar_Auto";

export default function Auto_Registro_Auto(props) {
  const [placa, setPlaca] = useState();
  const [autoUsuario, setAutoUsuario] = useState();
  const [marca, setMarca] = useState();
  const [precio, setPrecio] = useState();
  const [modelo, setModelo] = useState();

  async function registrar() {
    setAutoUsuario(props.params.user);
    const res = await axios.post("http://34.125.5.215:4000/newHabitacion", {
      placa: placa, 
      auto_usuario: autoUsuario, 
      marca: marca, 
      precio: parseInt(precio), 
      modelo: parseInt(modelo)
      });
    console.log(res.data);
    window.alert("Tu auto se ha registrado!");
  }

  return (
    <div>
      <Navbar_Auto user={props.params.user} />
      <h3 className="mt-6" style={{color: "white"}}>Bienvenido {props.params.user}</h3>
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
            onChange={(e) => setPlaca(e.target.value)}
            value={placa}
              class="form-control"
              id="placaAuto"
              placeholder="Placa Automovil"
            />
          </div>

          <div class="form-group px-11">
            <label>Marca</label>
            <input
            onChange={(e) => setMarca(e.target.value)}
            value={marca}
              class="form-control"
              id="marcaAuto"
              placeholder="Volkswagen"
            />
          </div>

          <div class="form-group px-11">
            <label>Precio</label>
            <input
            onChange={(e) => setPrecio(e.target.value)}
            value={precio}
              class="form-control"
              id="precioAuto"
              placeholder="1000"
            />
          </div>

          <div class="form-group px-11">
            <label for="modeloAuto">Modelo</label>
            <input
            onChange={(e) => setModelo(e.target.value)}
            value={modelo}
              type="number"
              class="form-control"
              id="modeloAuto"
              placeholder="2002"
            />
          </div>

          <div class="form-group px-11 content-center align-middle">
          <Button variant="info" onClick={(e) => registrar()}>
              {" "}
              Registrar Auto
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
