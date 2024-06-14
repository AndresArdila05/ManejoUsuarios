El sistema desarrollado es una aplicación web construida con React que interactúa directamente con una API REST para gestionar usuarios. La funcionalidad principal incluye la visualización de usuarios activos desde la API, la capacidad de añadir nuevos usuarios mediante un formulario, la eliminación de usuarios existentes con confirmación del usuario, y la edición de los datos de nombre, apellido y correo electrónico de cada usuario.

<h2> Funcionalidad Principal: </h2>

<h3>Visualización de Usuarios:</h3>

Al cargar la página, se realiza una solicitud GET a la API para obtener todos los usuarios activos. Estos usuarios se muestran en una tabla, que incluye su nombre, apellido y correo electrónico.

<h3> Añadir Usuario: </h3>

Se proporciona un formulario donde el usuario puede ingresar el nombre, apellido y correo electrónico de un nuevo usuario. Al enviar el formulario, se realiza una petición POST a la API para añadir este usuario a la base de datos. Una vez añadido, el nuevo usuario aparece inmediatamente en la lista de usuarios activos sin necesidad de recargar la página.

<h3>Eliminar Usuario:</h3>

Cada usuario en la tabla tiene un botón "Eliminar". Al hacer clic en este botón, se muestra una confirmación al usuario para asegurar que desea eliminar el usuario seleccionado. Si se confirma, se realiza una petición DELETE a la API para eliminar permanentemente el usuario de la base de datos. El usuario desaparece de la lista de usuarios activos después de la confirmación.

<h2>Funcionalidad Adicional:</h2>
<h3>Edición de Usuario:</h3>

Además de eliminar usuarios, la aplicación permite la edición directa de los campos de nombre, apellido y correo electrónico de cada usuario en la tabla. Al hacer clic en el botón "Editar", los campos correspondientes se convierten en campos de texto editables. Después de realizar los cambios deseados, el usuario puede guardar los cambios, lo cual actualiza los datos del usuario utilizando una petición PUT a la API. Esto permite una gestión completa y flexible de los datos de usuario sin salir de la página principal.

<h3>Responsividad 100%:</h3>

El diseño de la aplicación se ha implementado utilizando componentes de Material-UI y CSS personalizado para garantizar que la interfaz sea completamente responsiva. Esto significa que la aplicación se adapta y se ve bien en diferentes dispositivos y tamaños de pantalla, desde computadoras de escritorio hasta dispositivos móviles. Los elementos como tablas y formularios se ajustan dinámicamente para ofrecer una experiencia de usuario consistente y optimizada, independientemente del dispositivo utilizado.
