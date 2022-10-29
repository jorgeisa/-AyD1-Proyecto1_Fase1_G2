import React, { useState } from "react";
import Navbar_Vuelo from "./NavbarVuelo";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function Vuelo_Registro_Vuelo(props) {

  const [usuarioAerolineaVuelo, setUsuarioAerolineaVuelo] = useState("");
  const [fechaVuelo, setFechaVuelo] = useState("");
  const [destinoVuelo, setDestinoVuelo] = useState("");
  const [asientosVuelo, setAsientosVuelo] = useState("");
  const [precioVuelo, setPrecioVuelo] = useState("");

  async function registrar() {
    setUsuarioAerolineaVuelo(props.params.user)
    const res = await axios.post("http://34.125.5.215:4000/newVuelo", {
        aerolinea_usuario: usuarioAerolineaVuelo, 
        fecha_vuelo: fechaVuelo, 
        destino:destinoVuelo, 
        cantidad_asientos: parseInt(asientosVuelo), 
        precio: parseInt(precioVuelo)
    });
    console.log(res.data);
    window.alert("Tu vuelo se ha registrado!");
  }

  return (
    <div>
      <Navbar_Vuelo user={props.params.user}></Navbar_Vuelo>
      <h3 className="mt-6" style={{color: "white"}}>Bienvenido {props.params.user}</h3>
      <div className="max-w-md max-h-full mx-auto">
        <br />
        <form
          className="bg-slate-800 py-14 rounded-md"
          style={{ color: "white" }}
        >
          <h1 style={{ textAlign: "center" }}>Registro Vuelo</h1>
          <div class="form-group px-11">
            <label>Fecha Vuelo</label>
            <input 
            onChange={(e) => setFechaVuelo(e.target.value)}
            value={fechaVuelo}
            type="date" class="form-control" id="fechaVuelo" />
          </div>

          <div class="form-group px-11">
            <label>Destino</label>
            <input
            onChange={(e) => setDestinoVuelo(e.target.value)}
            value={destinoVuelo}
              class="form-control"
              id="destinoVuelo"
              placeholder="Guatemala"
            />
          </div>

          <div class="form-group px-11">
            <label for="modeloAuto">Cantidad Asientos</label>
            <input
            onChange={(e) => setAsientosVuelo(e.target.value)}
            value={asientosVuelo}
              type="number"
              class="form-control"
              id="cantidadPersonasVuelo"
              placeholder="50"
            />
          </div>

          <div class="form-group px-11">
            <label>Precio</label>
            <input 
            onChange={(e) => setPrecioVuelo(e.target.value)}
            value={precioVuelo}
            class="form-control" id="precioAuto" placeholder="1000" />
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
          <Button variant="info" onClick={(e) => registrar()}>
            {" "}
            Registrar Vuelo
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
