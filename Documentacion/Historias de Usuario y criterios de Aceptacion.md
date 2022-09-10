
### HISTORIA: ENCABEZADO GENERAL

| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 01 | Administrador | Poder enseñar nuestra plataforma "Full Trip" | Darla a conocer a cualquiera que la utilice | Alta |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | Logo | En caso que se haga clic en el logo | Se refrescará la pagina |
| 2 | Salida  | Cuando el usuario salga del sistema | Confirmar que el usuario haya visto el encabezado  |

****
**** 
### HISTORIA: SELECCIONAR TIPO DE USUARIO 
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 02 | Cliente | Ver los tipos de usuarios que existen | Determinar como que tipo de usuario me debo registrar | Alta |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | Selección de Usuario | En el caso en que el Cliente no seleccione el tipo de usuario | No se podrá registrar |
**** 
**** 
### HISTORIA: HABILITAR CAMPOS PARA SERVICIOS TERCERIZADOS
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 03 | Cliente | Utilizar servicios tercerizados | Poder ofrecer mis servicios | Media |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | Tipo de Cliente | Si el cliente es Renta Autos o Aerolinea  | Podra registrarse |
**** 

**** 
### HISTORIA: CONFIRMAR REGISTRO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 04 | Cliente | Que me confirmen el registro | Conocer si fue satisfactorio el registo  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | La operacion sea incorrecta | El cliente no llene los campos adecuados | El sistema mostrara que faltan llenar algunos campos  |
| 2 | La operacion sea correcta | El cliente llene todos los campos adecuadamente | Se enviara un correo de confirmacion de registro  |
**** 

**** 
### HISTORIA: ELIMINAR REGISTRO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 05 | Cliente  | Poder elminar el registro | Darme de baja del sistema  | Baja  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | El cliente tenga alguna reservacion | Intente darse de baja | Se mostrará que tiene actividades pendientes  |
| 2 | El cliente este solvente | Intente darse de baja | Se mostrara que el el registro ha sido eliminado correctamente  |
**** 

**** 
### HISTORIA: INGRESAR EMAIL
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 06 | cliente  | Poder ingresar un email | Para que los demas puedan contactarme por otra via  | Alta  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | Se ingrese un email | El email tenga un formato incorrecto | Se mostrara una advertencia de email incorrecto |
| 2 | El campo este vacio | Cuando intente registrarse | No se podra registrar, por que existe un campo vacio |
**** 

**** 
## HISTORIA: INGRESAR CONTRASEÑA
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 07 | Cliente  | Ingresar mi contraseña | Para loguearme , y poder publicar mis serviciosd | Alta  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | El campo este vacio | Se intente iniciar sesion | Se mostrara, que debe llenar el campo de la contraseña  |
| 2 | Se ingrese la contraseña | Sea la contraseña incorrecta | El sistema respondera que los datos son invalidos y debe rectificarlos  |
**** 

**** 
## HISTORIA: VERIFICAR USUARIO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 08 | Cliente  | Verificar el usuario ingresado | Conocer si existe en la base de datos | Alta  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | No se ingrese el campo | Se ingrese el usuario | Mostrar que debe ingresar el usuario  |
| 2 |Se ingrese el campo | Se ingrese el usuario correcto | Se debera iniciar sesion  |
| 3 |Se ingrese el campo | Se ingrese el usuario Incorrecto | No se debera iniciar sesion  |
**** 

**** 
## HISTORIA: HABILITAR CAMPOS DE NUEVOS SERVICIOS
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 09 | Usuario Registrado  | Poder habilitar campos de nuevos servicios | Ofrecer mis nuevos servicios  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | El usuario este registrado | Intente agregar nuevos servicios | El sistema podra dejar agregar nuevos campos de servicios  |
**** 

**** 
## HISTORIA: CONFIRMAR SERVICIO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 10 | Usuario Registrado | Confirmar el servicio | Poder saber que ya estan disponibles para mis clientes  | Alta  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | El usuario registrado ingrese | Datos para un nuevo servicios y todos los datod son correctos | El sistema confirmara por correo electronico, que el servicio a sido creado correctamente  |

**** 

**** 
## HISTORIA: MODIFICAR SERVICIOS
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 11 | Usuario Registrado | Quiero poder modificar los servicios que he creado | Corregir precios o datos en los que me haya equivocado  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | Si el servicio existe | Cuando intente modificar el servicio | Se mostrara, el servicio con los campos editables  |
| 2 | Si el servicio existe | No se completan todos los campos del servicios | No se podra modificar el servicio  |

**** 

**** 
## HISTORIA: INHABILITAR SERVICIO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 12 | Usuario Registrado | Poder inhabilitar los servicios que tengo cargados | Para mostrarlo como no disponible por el momento  | Alta  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | Ya no se cuente con el servicio | Cuando un cliente intente verlo | Se mostrara que el servicio esta deshabilitado  |

**** 

**** 
## HISTORIA: FILTRAR POR PAIS
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 13 | Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base al pais | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Pais"  |
**** 

**** 
## HISTORIA: FILTRAR POR CIUDAD
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 14 | Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base a la ciudad | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Ciudad"  |
**** 


**** 
## HISTORIA: FILTRAR POR RANGO DE PRECIOS Y FECHAS
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 15 | Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base a precios y fechas | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 |En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Rango de precios" y "Fechas"  |
**** 

**** 
## HISTORIA: FILTRAR POR CANTIDADES DE PERSONAS
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 16 |Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base a Cantidades de personas | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 |En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Cantidad de personas"  |
**** 

**** 
## HISTORIA: LIMITAR BUSQUEDA A  10 FILAS 
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 17 | Usuario Registrado  | Quiero poder visualizar las busquedas con un limite de 10 registros | Para que no sea un caos de texto en la pagina  | Alta  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que hayan mas de 10 registros | Cuando se efectue la busqueda | Se mostraran unicamente las ultimos 10 registros |
| 2 | En caso de que no existan registros | Cuando se efectue la busqueda | Se debera mostrar un mensaje donde diga que no existen resultados para dicha busqueda  |

**** 

**** 
## HISTORIA: LEER RESEÑAS 
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 18 | Usuario Registrado | Quiero vizualizar cada una de las reseñas que han dejado los usuarios registrados que han utilizado el servicio | Poder escoger de una mejor manera que servicio utilizar  | Baja  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que no exista alguna reseña | Cuando se seleccione algun servicio |Se debe mostras una alerta que no existen reseñas para dicho servicio  |
| 2 |En caso de que existan reseñas | Cuando se seleccione algun servicio | Se deben listar las reseñas de la ultima hasta la primera |
**** 

**** 
## HISTORIA:PUBLICAR RESEÑA 
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 19 | Usuario Registrado | Publicar reseñas luego del uso de un servicio | Ayudar a los demas usuarios que utilicen los servicios de la plataforma  | Baja  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que se utilice algun servicio | Al finalizar el servicio | Se debe habilitar el apartado para poder dejar una reseña y poder calificar el servicio |
| 2 | En caso de aparte el servicio | Se cancela el servicio | No debera habilitar el apartado de reseña  |

**** 

**** 
## HISTORIA: LLENAR CAMPOS DE RESERVACION
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 20 | Usuario Registrado  | Llenar los campos de reservacion | Ejecutar la reserva de dicho servicio | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que no este ocupado el servicio en ese horario y fecha | cuando se ejecute la reserva | Se le enviara un correo describiendo los datos de la reserva |
| 2 | En caso que se llenen los campos de reservacion | Cuando algun campo obligatorio este vacio | No se podra ejecutar la reservacion  |

**** 

**** 
## HISTORIA: CONFIRMACION DE RESERVACION
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 21 | Usuario Registrado  | Confirmar la reservacion  | Ejecutar la reserva de dicho servicio | Alta  |
### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que exista un problema| Al ejecutar la reserva | Se le enviara un correo describiendo el problema |
| 2 | En caso de que no exista un problema| Al ejecutar la reserva | Se le enviara un correo describiendo la reserva |

****    

**** 
## HISTORIA: FILTRAR POR MARCA
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 22 | Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base a Marcas | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Marca"  |
**** 

**** 
## HISTORIA: FILTRAR POR MODELO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 23 |  Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base a Models | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Modelo"  |
**** 

**** 
## HISTORIA: SELECCIONAR TIPO DE ALQUILER
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 24 | Usuario registrado  | Realizar un alquiler de Automovil | Poder movilizarme despues del hotel o aeropuerto  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que no tenga un alquiler activo | cuando se alquile un vehiculo | El sistema debe dejar realizar el alquiler |
| 2 | En caso de que tenga un alquiler activo | Cuando se seleccione el tipo de alquiler | Debe mostrarse que ya cuenta con un alquier activo |
**** 

**** 
## HISTORIA: FILTRAR POR DESTINO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 25 |Cliente  | Quiero poder vizualizar la informacion de los servicio por orden en base a Destino | Para tener una busqueda mas efectiva  | Media  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso de que el cliente necesite una busqueda | Cuando mire los filtros | Se debe mostrar como filtro "Destino"  |
**** 

**** 
## HISTORIA: SELECCIONAR TIPO DE VUELO
| ID | ROL | FUNCIONALIDAD | RESULTADO | PRIORIDAD |
| ------ | ------ | ------ | ------ | ------ |
| 26 | Usuario Registrado  | Quiero poder seleccionar el tipo de vuelo | Para poder elegir el mas conveniente a mi bolsillo  | Baja  |

### CRITERIO DE ACEPTACION
| NO. | CRITERIO | CONTEXTO | EVENTO |
| ------ | ------ | ------ | ------ |
| 1 | En caso que no se seleccione nada | Cuando sea el tipo de vuelo | No se debe poder hacer la reserva de vuelo |
| 2 | Cuando se seleccione | Tipo de vuelo |Se podra ejecutar la reserva de vuelo |
**** 
**** 