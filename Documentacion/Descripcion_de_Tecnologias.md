# Descripcion de tecnologias a utlilizar
_Las tecnologias a utilizar las dividiremos en 3 las cuales son: frontend, backend y la base de datos. Entre ellos podremos encontar sub tecnologias que nos ayudaran a tener una app funcional e intuitiva al momento de usarla_
### Frontend
#### ReactJs: 
_React es una libreria open source de javascript para crear interfaces de usuario. En react el elemento mas importante son los compontentes, ya que al crear una aplicacion, estaremos creando componentes independientes y resuables para crear interfaces mas complejas, gracias a esto la estructura que se maneja en react es un arbol de componentes._
##### Caracteristicas 
- _La composicion de componentes_
- _El flujo de datos unidireccional_
- _Isomorfismo_
- _Elementos y JSX_
- _Desempeno de renderizado alto gracias al Dom Virtual_
- _Estilo de programacion imperativo_
- _Posee Componentes con y sin estado_

##### Pre-requisitos 📋
- _Tener instalado nodejs._
- _En windows instalar un subsistema de Windows para linux (WSL)._
##### Instalacion
###
```
npm install -g create-react-app
```
##### Inicializacion
###

```
#creamos la apliacion ract
npx create-react-app frontend
```
##### Ventajas 
- _Posee una facilidad en el proceso general de escritura  de componentes_
- _Aumenta la productividad y facilita un mayor mantenimiento_
- _Posee un renderizado muy rapido_
- _Garantiza que el codigo sera estable_
- _Posee un desarollador para moviles (React Native)_

##### Nota: Para mas informacion visitar [React Js](https://es.reactjs.org/)

### Backend
##### NodeJS: 
_Es un entorno en tiempo de ejecucion multiplataforma y que se ejecuta del lado del servidor (Backend) basado en JavaScript, este cuenta con un entorno controlado por eventos la cual esta desarrollada para apliaciones escalables y con multiples conexiones al mismo tiempo. Este funcionan con un bucle de eventos como una construccion en tiempo de ejecucion en lugar de una biblioteca. Inspirado en Event Machine de Ruby o Twisted de Python._ 
##### Caracteristicas 📋
- _Asincrono y controlado por eventos_
- _Es muy rapida al momento de la ejecucion de codigo_
- _Procesos en un solo hilo, pero con un alto escalado_
- _Posee una licencias basada en open source_
- _No almacena en bufer_
##### Pre-requisitos 📋
- _Tener conocimientos basicos en JavaScript_ 
- _Tener conocimientos basicos en Programacion Orientada a Objetos_
##### Instalacion
###
_En windows es necesario descargar nodejs del siguiente enlace [Nodejs](https://nodejs.org/es/download/) luego ejecutamos el archivo y este hara todas las configuraciones necesarias._

_En linux es necesario tener instalado la herramienta Curl, Luego Escogeremos la distrubucion nodejs que deseamos y lo instalamos con los siguientes comandos_
```
#instalacion curl
sudo apt install curl

#instalacion nodejs
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

 _Si es necesario verificar con el siguiente comando en windows o linux_
```
node --version
```

##### Ventajas 
- _Es perfecto para las aplicaciones en tiempo real_
- _Ofrece servidores proxy_
- _Comparte, actualiza o reutliza sencillmente el codigo gracias al NPM_

### Base de datos
##### MySQL:
_Es un sistema de gestion de base de datos relacional de open source respaldado por Oracle y basado en un lenguaje de consulta estruturada. Es compatible en todas la plataformas. MySQL se basa en un modelo cliente-servidor, en donde el nucleo es el servidor, la cual maneja todas las intrucciones de la base de datos. Esta nos permite almacenar y acceder a los datos atraves de multiples motores de almacenamiento y tambien es puede replicar datos y particionar tablas para mejoras en el rendimiento y la durabilidad._

##### Caracteristicas 
- _Permite la eleccion sobre multiples motores de almacenamiento para cada tabla._
- _Nos brinda una conectividad segura._
- _El uso de claves foraneas y la ejecucion de claves foraneas._
- _Posee Replicacion._
- _Tiene una gran capidad de almacenaje._
- _Es open Source y multiplataforma._
- _Nos permite la agrupacion de transacciones._

##### Pre-requisitos 📋
- _512 MB de memoria RAM._
- _1 GB de maquina virtual._
- _1 GB de espacio de disco duro._
- _Sistema Operativo: Windows,Linux y Unix._
- _Protocolo de red TCP/IP._
- _En windows es necesario tener Microsoft .NET Framework 4.5.2 o mayor._

### Herramientas Extras
_Las tecnologias extras a utilizar, nos ayudaran a tener una mejor organizacion y aparencia_
##### Bootstrap: 

_Es un framework orientado en css que utilizaremos para darle un mejor diseno a la frontend, esto tambien nos ayuda a que 
nuestra aplicacion web se adapte a cualquier dispositivo y tenga una mejor aparencia_

