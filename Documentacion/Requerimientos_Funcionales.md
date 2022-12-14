# Requerimientos Funcionales
_Lista de requerimientos funcionales del proyecto._
Descripción de actividades, comportamientos y servicios relacionadas a los datos de la aplicación. Juntamente con las restricciones dentro de la aplicación.

Se maneja una prioridad de 1-6 siendo 6 la mas importante.
| Nombre | Requerimiento | Descripcion | Prioridad |
| ------ | ------------- | ----------- | --------- |
| RF01 | Inicio de Sesión  | En la pagina inicial de la aplicación se podrá acceder a la aplicación desde un login. Se debera colocar correo/usuario y contraseña. | 6 |
| RF02 | Registro de Usuarios | En la pagina inicial de la aplicación se podrá generar nuevos registros de usuario. Se debera colocar nombre completo, nombre de usuario, fecha nacimiento, correo electronico, contraseña, confirmacion de contraseña. Juntamente con el tipo de cliente, siendo este un usuario. | 6 |
| RF03 | Registro de Servicio de terceros. | En la pagina de registro se podra seleccionar si es un servicio de tercero el que se registra, este registro solicita el nombre del servicio, pais, ciudad, correo electronico, contraseña y el tipo de servicio de tercero, en este caso solo existe el tipo aerolinea, autos y hoteles.| 6 |
| RF04 | Usuario hotel pueda registrar habitaciones. | El usuario de tipo hotel podra registrar varias habitaciones con fechas de disponibilidad. Para el registro de una habitación se solicita fecha de disponibilidad, cantidad de habitaciones disponibles y costo. | 4 |
| RF05 | Usuario turista podra registrar reservaciones de habitaciones en un hotel.  | Los usuarios turistas pueden reservar varias habitaciones, para realizar una reservacion se le solita usuario turista, cantidad de habitaciones a reservar y confirmación de contraseña. | 4 |
| RF06 | Usuario turista podra buscar hoteles y habitaciones en un buscador. | Los usuarios turistas pueden realizar busquedas de hoteles por país, ciudad, cantidad de personas, rangos de precios y rangos de fechas. | 2 |
| RF07 | Usuario de tipo renta autos (servicio de terceros) registra autos manualmente. | El usuario tipo renta autos podra ingresar manualmente los autos que renta. Para el registro de autos se solicita marca, placa, modelo y precio del auto.| 4 |
| RF08 | Usuario tipo turista puede reservar autos o alquilar autos en el momento. | Para que el usuario tipo turista pueda reservar un auto o alquilarlo se solicita usuario de turista, cantidad de dias a rentar, confirmación de contraseña. | 4 |
| RF09 | Usuario tipo turista puede realizar busquedas de autos disponibles en un buscador. | El usuario de tipo turista puede realizar busquedas de autos. Se solicita marca, modelo y rango de precio del auto. | 2 |
| RF10 | El usuario tipo vuelo podra ingresar manualmente los vuelos. | El usuario tipo aerolineas/vuelo puede registrar sus vuelos dentro de la aplicación. Para el registro de vuelos se solicita fecha, destino, cantidad de asientos disponibles y precio del vuelo. | 4 |
| RF11 | Usuario tipo turista puede reservar vuelos. | Para que el usuario tipo turista pueda reservar un vuelo se solicita usuario de turista, cantidad de asientos que necesita y confirmación de contraseña. | 4 |
| RF12 | Usuario tipo turista puede buscar vuelos en un buscador. | Para que el usuario tipo turista pueda buscar un vuelo se solicita usuario de turista, rango de precios  y confirmación de contraseña. | 2 |
| RF13 | Registro de reseñas a servicio de terceros. | Todo servicio de terceros (vuelos, autos y hoteles) deberán poder registrar una reseña al terminar un servicio, teniendo una opcion para calificar el servicio para el usuario turista. Se solicitan los campos usuario turista, tipo de servicio, descripción de reseña y confirmación de contraseña. | 1 |
| RF14 | Usuario de cualquier tipo puede visualizar las reseña dentro de la aplicación dentro de la pantalla de inicio de usuario. | El usuario de cualquier tipo puede visualizar todas las reseñas que se hicieron en la aplicación en la pantalla para logearse.  | 1 |
| RF15 | Almacenar los datos de la aplicación en una base de datos. | El registro de toda la información sera almacenada en una base de datos para poder consultar todos los datos almacenados en un futuro.  | 6 |
| RF16 | Mensaje de error emergente para un logeo de usuario con datos erroneos. | Colocar un mensaje informando que el usuario o contraseña no coinciden. | 2 |
| RF17 | Mensaje de error emergente para una reserva de vuelo con insuficientes asientos. | Colocar un mensaje informando que los asientos que requiere el usuario tipo turista no son validos para ese vuelo. | 2 |
| RF18 | Mensaje de error emergente para una reserva de hotel con insuficientes habitaciones. | Colocar un mensaje informando que la habitación de hotel no tiene las habitaciones suficientes para el numero de personas especificado. | 2 |
| RF19 | Busquedas de usuario turista con datos no existentes. | Si el usuario turista realiza una busqueda con datos no existentes en un servicio de terceros, la busqueda mostrara un mensaje informando que no hay servicios con esas especificaciones.| 4 |
| RF20 | Mensaje de error si en el registro de usuario (turista y servicio de tercero) al no completar el formulario. | Si el usuario que se encuentra registrandose no llena los campos requeridos se mostrará un mensaje informando que falta información.| 4 |
| RF21 | Historial de usuario turista. | El usuario turista podrá ver las acciones realizadas (alquiler, reservacion de vuelo y alquiler de autos)| 2 |
| RF22 | Usuario turista puede ver todos los servicios de terceros. | El usuario de tipo turista puede visualizar toda la lista de servicios de terceros disponibles, para alquilar un auto, reservar vuelo y reservar habitaciones sin tener filtro de buscador. | 4 |
|  | Fase | 2 | - |
| RF23 | Usuario de Servicio de Terceros de Automoviles puede realizar una carga masiva. | La carga masiva de datos (automoviles) se podra realizar para el usuario de servicios de renta de automoviles. Tambien se podrán ingresar manualmente| 4 |
| RF24 | Usuario de Vuelos podra agregar vuelos de ida y de ida y vuelta. | El usuario de aerolineas tendra como opcion agregar un vuelo de tipo "ida" o de tipo "ida y vuelta".| 4 |
| RF25 | Usuario Turista podra visualizar las reservaciones por medio d eun calendario. | El usuario turista al iniciar sesion podra visualizar por medio de un calendario las fechas de reservacion de hoteles, vuelos y autos.| 3 |

