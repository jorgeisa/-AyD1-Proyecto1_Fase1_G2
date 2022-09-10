# DESCRIPCION DE SEGURIDAD DE LA APLICACION

<p style='text-align: justify;'>
Tenemos como objetivo definir la seguridad de las entidades (usuarios) y elementos relacionados con el proyecto y las medidas que se deben utilizar para integrar ésta. </p>

<p style='text-align: justify;'>
Para el proceso de inicio de sesión validaremos un JWT utilizándolo como una forma segura de autenticar usuarios, utilizando las credenciales como el nombre de usuario y contraseña para probar la identidad del mismo e identificarlo como un usuario registrado y luego obtener privilegios adicionales.</p>

El funcionamiento sería:

- Un usuario ingresa sus credencales o los datos que le permitan iniciar sesión.
- El servidor verifica que las credenciales sean correctas y devuelve un token firmado.
- El token es guardado en el lado del cliente.
- Las peticiones siguientes al servidor incluyen este token.
- El servidor decodifica el JWT y si el token es válido procesa la solicitud.
- Una vez que el usuario se desconecta, el token es destruido en el lado del cliente y no es necesaria la interacción con el servidor.

<p style='text-align: justify;'>
La ventaja de usar tokens como autenticación esque desde el backend no se necesita tener un registro de los tokens ya que cada token es autónomo porque contiene toda la data necesaria para confirmar la validez e información puntual del usuario que inició sesion.</p>

[Regresar al Menú](menú.md)