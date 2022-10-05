Create DATABASE fase2;

use fase2;

create table Tipo_Usuario(
	Id_Tipo TINYINT NOT NULL AUTO_INCREMENT,
    Nombre_Rol varchar (25),
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

-- -----------------------------------------------PENDIENTE
create table Reservacion_Hotel(
	Id_Reservacion INT NOT NULL AUTO_INCREMENT,
    Hotel_Usuario varchar(50) NOT NULL,
    Turista_Usuario varchar(50) NOT NULL,
    Cantidad_Habitaciones tinyint, 
    Precio_Total double,
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

create table Reservacion_Vuelo(
	Id_Reservacion INT NOT NULL AUTO_INCREMENT,
    Aerolinea_Usuario varchar(50) NOT NULL,
    Turista_Usuario varchar(50) NOT NULL,
    Id_Vuelo int NOT NULL,
    Cantidad_Asientos tinyint, 
    Precio_Total double,
	primary key (Id_Reservacion),
    FOREIGN KEY (Aerolinea_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Turista_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Id_Vuelo) REFERENCES Vuelo(Id_Vuelo) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ---------------------PENDIENTE
create table Habitacion(
	Id_Habitacion INT NOT NULL AUTO_INCREMENT,
    Hotel_Usuario INT NOT NULL,
    Cantidad_Habitaciones tinyint NOT NULL,
    Fecha_Entrada date,
    Fecha_Salida date,
    Precio double
);

create table Automovil(
	Placa varchar(25) NOT NULL,
    Auto_Usuario varchar(50) NOT NULL,
    Marca varchar(25) NOT NULL,
    Precio double NOT NULL,
    Modelo int NOT NULL,
    primary key (Placa),
    FOREIGN KEY (Auto_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

create table Vuelo(
	Id_Vuelo INT NOT NULL AUTO_INCREMENT,
    Aerolinea_Usuario varchar(50) NOT NULL,
    Fecha_Vuelo date NOT NULL,
    Destino varchar(25),
    Cantidad_Asientos tinyint NOT NULL,
    Precio double NOT NULL,
    Tipo_Boleto boolean,
	primary key (Id_Vuelo),
    FOREIGN KEY (Aerolinea_Usuario) REFERENCES Usuario(Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);