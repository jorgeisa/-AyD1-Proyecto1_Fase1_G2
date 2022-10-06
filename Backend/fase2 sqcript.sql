Create DATABASE fase2;

use fase2;

-- 
create table Tipo_Usuario(
	Id_Tipo TINYINT NOT NULL,
    Nombre_Rol varchar(25) NOT NULL,
    primary key (Id_Tipo)
);

create table Usuario(
	Usuario varchar(50) NOT NULL,
    Tipo_Usuario TINYINT NOT NULL,
    Correo_Electronico varchar(25) NOT NULL,
    Nombre_Completo varchar(50) NOT NULL,
    Fecha_Nacimiento date,
    Pass varchar(25) NOT NULL,
    Pais varchar(25) NOT NULL,
    Ciudad varchar (25) NOT NULL,
	primary key (Usuario),
	FOREIGN KEY (Tipo_Usuario) REFERENCES Tipo_Usuario(Id_Tipo) ON DELETE CASCADE ON UPDATE CASCADE
);

create table Resena(
	Id_Resena INT NOT NULL AUTO_INCREMENT,
    Turista_Usuario varchar(50) NOT NULL,
    Descripcion varchar(250) NOT NULL,
    Servicio_Usuario varchar(50) NOT NULL,
    Puntuacion tinyint NOT NULL,
    primary key (Id_Resena),
    FOREIGN KEY (Turista_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Servicio_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

create table Habitacion(
	Id_Habitacion INT NOT NULL AUTO_INCREMENT,
    Hotel_Usuario varchar(50) NOT NULL,
    Nombre_Habitacion varchar (25) NOT NULL,
    Disponible bool NOT NULL,
    Precio double NOT NULL,
    Cantidad_Personas tinyint NOT NULL,
    primary key (Id_Habitacion),
    FOREIGN KEY (Hotel_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

create table Automovil(
	Placa varchar(25) NOT NULL,
    Auto_Usuario varchar(50) NOT NULL,
    Marca varchar(25) NOT NULL,
    Precio double NOT NULL,
    Modelo int NOT NULL,
    Disponible bool default 1,
    primary key (Placa),
    FOREIGN KEY (Auto_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

create table Vuelo(
	Id_Vuelo INT NOT NULL AUTO_INCREMENT,
    Aerolinea_Usuario varchar(50) NOT NULL,
    Fecha_Vuelo date NOT NULL,
    Destino varchar(25) NOT NULL,
    Cantidad_Asientos smallint NOT NULL,
    Precio double NOT NULL,
	primary key (Id_Vuelo),
    FOREIGN KEY (Aerolinea_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);


create table Reservacion_Hotel(
	Id_Reservacion INT NOT NULL AUTO_INCREMENT,
    Hotel_Usuario varchar(50) NOT NULL,
    Turista_Usuario varchar(50) NOT NULL,
    Cantidad_Habitaciones tinyint NOT NULL, 
    Precio_Total double NOT NULL,
    Fecha_Entrada date NOT NULL, 
    Fecha_Salida date NOT NULL,
	primary key (Id_Reservacion),
    FOREIGN KEY (Hotel_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Turista_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

create table Renta_Auto(
	Id_Renta INT NOT NULL AUTO_INCREMENT,
    Auto_Usuario varchar(50) NOT NULL,
    Turista_Usuario varchar(50) NOT NULL,
    Placa varchar(25) NOT NULL,
    Cantidad_Dias tinyint NOT NULL, 
    Precio_Total double NOT NULL,
	primary key (Id_Renta),
    FOREIGN KEY (Auto_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Turista_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (Placa) REFERENCES Automovil(Placa) ON DELETE CASCADE ON UPDATE CASCADE
);

-- tipo_boleto: 0 para ida, 1 ida y vuelta
create table Reservacion_Vuelo(
	Id_Reservacion INT NOT NULL AUTO_INCREMENT,
    Aerolinea_Usuario varchar(50) NOT NULL,
    Turista_Usuario varchar(50) NOT NULL,
    Id_Vuelo int NOT NULL,
    Cantidad_Asientos smallint NOT NULL, 
    Precio_Total double NOT NULL,
    Tipo_Boleto bool NOT NULL,
	primary key (Id_Reservacion),
    FOREIGN KEY (Aerolinea_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Turista_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Id_Vuelo) REFERENCES Vuelo(Id_Vuelo) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ---------------------------------------CONSULTAS----------------------------------------------------

-- INSERTS TABLA TIPO_USUARIO-------------------------------------------------------
-- DATOS QUEMADOS

insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (0,'Administrador');
insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (1,'Turista');
insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (2,'Hotel');
insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (3,'Renta Auto');
insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (4,'Aerolinea');

-- select * from Tipo_Usuario;



-- INSERTS TABLA USUARIO---------------------------------------------------------------------------

insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad) 
	values ('Admin', 0, 'admin@gmail.com', 'Josue Gonzalez', '1996-04-23', 'admin123', 'Guatemala', 'Coban');

-- TURISTAS-------------------------------------------------------------------------
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad) 
	values ('turista1', 1, 'turista1@gmail.com', 'turista1 lopez', '1999-06-03', 'turista1', 'Guatemala', 'Guatemala');
    
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad) 
	values ('turista2', 1, 'turista2@gmail.com', 'turista2 Ramirez', '1985-09-12', 'turista2', 'Salvador', 'San Salvador');
    
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad) 
	values ('turista3', 1, 'turista3@gmail.com', 'turista3 Gutierrez', '1997-06-06', 'turista3', 'Nicaragua', 'Managua');
    
-- HOTELES-------------------------------------------------------------------------
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Pass, Pais, Ciudad) 
	values ('hotel1', 2, 'hotel1@gmail.com', 'hotel1','hotel1', 'Guatemala', 'Guatemala');

insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Pass, Pais, Ciudad) 
	values ('hotel2', 2, 'hotel2@gmail.com', 'hotel2','hotel2', 'Salvador', 'San Salvador');
    
-- AUTOS-------------------------------------------------------------------------
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Pass, Pais, Ciudad) 
	values ('rentaAuto1', 3, 'rentaAuto1@gmail.com', 'rentaAuto1','rentaAuto1', 'Salvador', 'San Salvador');

insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Pass, Pais, Ciudad) 
	values ('rentaAuto2', 3, 'rentaAuto2@gmail.com', 'rentaAuto2','rentaAuto2', 'Guatemala', 'Guatemala');
    
-- AEROLINEAS--------------------------------------------------------------------
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Pass, Pais, Ciudad) 
	values ('aerolinea1', 4, 'aerolinea1@gmail.com', 'aerolinea1','aerolinea1', 'Guatemala', 'Guatemala');
    
insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Pass, Pais, Ciudad) 
	values ('aerolinea2', 4, 'aerolinea2@gmail.com', 'aerolinea2','aerolinea2', 'Salvador', 'San Salvador');
    
-- select * from Usuario;



-- INSERTS TABLA HABITACIONES---------------------------------------------------------------------------
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel1', 1, 150.50, 1, 'habitacion1');
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel1', 1, 350.50, 3, 'habitacion2');
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel1', 1, 550.50, 5, 'habitacion3');
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel1', 1, 570.50, 3, 'habitacion4');

insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel2', 1, 170, 1, 'habitacion1');
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel2', 1, 863, 4, 'habitacion2');
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel2', 1, 1000, 6, 'habitacion3');
insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) values ('hotel2', 1, 1100, 8, 'habitacion4');

-- select count(*) from Habitacion where Disponible = 1;

-- INSERTS TABLA AUTOS---------------------------------------------------------------------------
insert into Automovil(placa, auto_usuario, marca, precio, modelo) values ('P-ABC123', 'rentaAuto1','Toyota', 500, 2014);
insert into Automovil(placa, auto_usuario, marca, precio, modelo) values ('P-ABC345', 'rentaAuto1','Mazda', 600, 2018);
insert into Automovil(placa, auto_usuario, marca, precio, modelo) values ('P-ABC678', 'rentaAuto1','Chevrolet', 700, 2020);

insert into Automovil(placa, auto_usuario, marca, precio, modelo) values ('P-DEF123', 'rentaAuto2','kia', 400, 2017);
insert into Automovil(placa, auto_usuario, marca, precio, modelo) values ('P-DEF345', 'rentaAuto2','Hyundai', 850, 2021);
insert into Automovil(placa, auto_usuario, marca, precio, modelo) values ('P-DEF678', 'rentaAuto2','BMW', 900, 2022);

-- select * from Automovil;

-- INSERTS TABLA VUELOS---------------------------------------------------------------------------
insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values ('aerolinea1', '2022-12-24','Paris', 100, 1500);
insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values ('aerolinea1', '2022-12-25','Guatemala', 100, 900);
insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values ('aerolinea1', '2022-12-25','Salvador', 100, 500);
    
insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values ('aerolinea2', '2022-11-10','Nicaragua', 120, 600);
insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values ('aerolinea2', '2022-11-27','Costa Rica', 120, 700);
insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values ('aerolinea2', '2022-11-30','Colombia', 249, 450);
    
-- select * from Vuelo;

-- INSERTS RESERVACION_HOTEL---------------------------------------------------------------------------
insert into Reservacion_Hotel(hotel_usuario, turista_usuario, cantidad_habitaciones, precio_total, fecha_entrada, fecha_salida) 
	values ('hotel1', 'turista1', 2, 1755, '2022-12-24', '2022-12-29');
insert into  Reservacion_Hotel(hotel_usuario, turista_usuario, cantidad_habitaciones, precio_total, fecha_entrada, fecha_salida) 
	values ('hotel2', 'turista2', 3, 4250, '2022-11-02', '2022-11-07');
insert into  Reservacion_Hotel(hotel_usuario, turista_usuario, cantidad_habitaciones, precio_total, fecha_entrada, fecha_salida) 
	values ('hotel1', 'turista3', 1, 7799, '2022-10-13', '2022-10-27');
    

-- select * from Reservacion_Hotel;
-- select * from Habitacion;

-- UPDATE
-- Disponibilidad de habitaciones en tabla habitacion, para poner en no disponible la cantidad de habitaciones que ingreso el usuario
update Habitacion as H, (select Id_Habitacion from Habitacion Where Disponible = 1 and Hotel_Usuario = 'hotel1' limit 2 ) as ac  
set H.Disponible = 0 where H.Id_Habitacion = ac.Id_Habitacion;

update Habitacion as H, (select Id_Habitacion from Habitacion Where Disponible = 1 and Hotel_Usuario = 'hotel2' limit 3 ) as ac  
set H.Disponible = 0 where H.Id_Habitacion = ac.Id_Habitacion;

update Habitacion as H, (select Id_Habitacion from Habitacion Where Disponible = 1 and Hotel_Usuario = 'hotel1' limit 1 ) as ac  
set H.Disponible = 0 where H.Id_Habitacion = ac.Id_Habitacion;


-- INSERTS RENTA_AUTO---------------------------------------------------------------------------
insert into Renta_Auto(auto_usuario, turista_usuario, placa, cantidad_dias, precio_total) 
	values ('rentaAuto1', 'turista1', 'P-ABC123', 5, 2500);
insert into Renta_Auto(auto_usuario, turista_usuario, placa, cantidad_dias, precio_total) 
	values ('rentaAuto1', 'turista2', 'P-ABC678', 5, 3500);
insert into Renta_Auto(auto_usuario, turista_usuario, placa, cantidad_dias, precio_total) 
	values ('rentaAuto2', 'turista3', 'P-DEF345', 14, 11900);
  
-- UPDATE
Update Automovil set disponible = 0 where Placa = 'P-ABC123';
-- select * from Automovil;

-- select * from Renta_Auto;
    

-- INSERTS RESERVACION_VUELO---------------------------------------------------------------------------
insert into Reservacion_Vuelo(aerolinea_usuario, turista_usuario, id_vuelo, cantidad_asientos, precio_total, tipo_boleto) 
	values ('aerolinea1', 'turista1', 1, 3, 4500, 1);
insert into Reservacion_Vuelo(aerolinea_usuario, turista_usuario, id_vuelo, cantidad_asientos, precio_total, tipo_boleto) 
	values ('aerolinea2', 'turista2', 2, 6, 400, 0);
insert into Reservacion_Vuelo(aerolinea_usuario, turista_usuario, id_vuelo, cantidad_asientos, precio_total, tipo_boleto) 
	values ('aerolinea1', 'turista3', 3, 1, 700, 1 );
 
-- UPDATE 
Update Vuelo as V, (select Cantidad_Asientos  from Vuelo where Id_Vuelo = 1) as cantidad set V.Cantidad_Asientos = cantidad.Cantidad_Asientos - 3
	 where V.Id_Vuelo = 1;
     
Update Vuelo as V, (select Cantidad_Asientos  from Vuelo where Id_Vuelo = 2) as cantidad set V.Cantidad_Asientos = cantidad.Cantidad_Asientos - 6
	 where V.Id_Vuelo = 2;
     
Update Vuelo as V, (select Cantidad_Asientos  from Vuelo where Id_Vuelo = 3) as cantidad set V.Cantidad_Asientos = cantidad.Cantidad_Asientos - 1
	 where V.Id_Vuelo = 3;

-- select * from Reservacion_Vuelo;
-- select * from Vuelo;

-- INSERTS RESENA---------------------------------------------------------------------------
insert into Resena(turista_usuario, descripcion, servicio_usuario, puntuacion) 
	values ('turista1', 'excelente servicio', 'hotel1', 5);
insert into Resena(turista_usuario, descripcion, servicio_usuario, puntuacion) 
	values ('turista2', 'Buen servicio', 'rentaAuto1', 3);
insert into Resena(turista_usuario, descripcion, servicio_usuario, puntuacion) 
	values ('turista3', 'pesimo servicio', 'aerolinea1', 1);
    
-- SELECT * FROM Resena;


-- -------------------------------------HOTEL------------------------------------------------
-- por pais-------------------------------
-- todos los paises que corresponde al tipo_usuario hotel = 2
select distinct Pais from Usuario where Tipo_Usuario = 2;

-- tipo_usuario: quemado porque es hotel corresponde a tipo_usuario 2
select U.Correo_Electronico, U.Nombre_Completo, U.Pais, U.Ciudad, (select count(*) from Habitacion where Disponible = 1 and Hotel_Usuario = U.Usuario) as Habitaciones_Disponibles
	from Usuario as U where Pais = 'Salvador' and Tipo_Usuario = 2;

-- por ciudad-------------------------------
-- todas las ciudades que corresponde al tipo_usuario hotel = 2
select distinct Ciudad from Usuario where Tipo_Usuario = 2;

-- tipo_usuario: quemado porque es hotel corresponde a tipo_usuario 2
select U.Correo_Electronico, U.Nombre_Completo, U.Pais, U.Ciudad, (select count(*) from Habitacion where Disponible = 1 and Hotel_Usuario = U.Usuario) as Habitaciones_Disponibles
	from Usuario as U where Ciudad = 'Guatemala' and Tipo_Usuario = 2;
    
select * from Habitacion;
-- HABITACION---------------------------------------------------------------------------------------

-- por cantidad de personas-------------------------------
-- muestra solo las habitaciones que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, H.Nombre_Habitacion, H.Cantidad_Personas, H.Precio from Usuario as U, Habitacion as H 
	where U.Usuario = H.Hotel_Usuario and Cantidad_Personas = 3 and H.Disponible = 1;
    
-- por rango de precios-------------------------------
-- muestra solo las habitaciones que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, H.Nombre_Habitacion, H.Cantidad_Personas, H.Precio from Usuario as U, Habitacion as H 
	where U.Usuario = H.Hotel_Usuario and (H.Precio >= 0 and H.Precio <= 1000) and H.Disponible = 1 order by H.Precio;
    
-- por fechas-------------------------------
-- muestra solo las habitaciones que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, H.Nombre_Habitacion, H.Cantidad_Personas, H.Precio from Usuario as U, Habitacion as H 
	where U.Usuario = H.Hotel_Usuario and H.Disponible = 1;
    
-- renta_auto---------------------------------------------------------------------------------------

-- por marca-------------------------------
-- muestra solo los autos que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, A.Placa, A.Marca, A.Precio, A.Modelo from Usuario as U, Automovil as A 
	where U.Usuario = A.Auto_Usuario and A.Disponible = 1 and A.Marca = 'Mazda';


-- por modelo-------------------------------
-- muestra solo los autos que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, A.Placa, A.Marca, A.Precio, A.Modelo from Usuario as U, Automovil as A 
	where U.Usuario = A.Auto_Usuario and A.Disponible = 1 and A.Modelo = '2022';

-- por marca-------------------------------
-- muestra solo los autos que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, A.Placa, A.Marca, A.Precio, A.Modelo from Usuario as U, Automovil as A 
	where U.Usuario = A.Auto_Usuario and A.Disponible = 1 and (A.Precio >= 0 and A.Precio <= 1000) order by A.Precio;
    

-- por destino-------------------------------
-- muestra solo los vuelos que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad,V.Id_Vuelo, V.Fecha_Vuelo, V.Destino, V.Cantidad_Asientos, V.Precio from Usuario as U, Vuelo as V
	where U.Usuario = V.Aerolinea_Usuario and (V.Fecha_Vuelo >= curdate()) and V.Destino = 'Salvador' order by V.Fecha_Vuelo;
    
-- por precio-------------------------------
-- muestra solo los vuelos que estan disponibles
select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad,V.Id_Vuelo, V.Fecha_Vuelo, V.Destino, V.Cantidad_Asientos, V.Precio from Usuario as U, Vuelo as V
	where U.Usuario = V.Aerolinea_Usuario and (V.Fecha_Vuelo >= curdate()) and (V.Precio >= 450 and V.Precio <= 800) order by V.Fecha_Vuelo;
    

    
