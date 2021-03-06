define({ "api": [
  {
    "type": "delete",
    "url": "/alumno/:id",
    "title": "Remove a alumno",
    "group": "Alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>alumno id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 204 {\n\"id\": 4588,\n\"email\": \"oso@oso.com\",\n\"dispositivo\": null,\n\"identificacion\": \"100-numero-unico\",\n\"nombre\": \"Ricardo\",\n\"img\": null,\n\"paterno\": \"Pato\",\n\"materno\": \"Pato2\",\n\"telefono\": 124324,\n\"celular\": 989034,\n\"cedula\": 100,\n\"expedido\": \"lp\",\n\"fechaNacimiento\": null,\n\"fechaAlta\": null,\n\"sexo\": \"M\",\n\"nro\": null,\n\"codigoFoto\": null,\n\"rol\": \"alumno\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Alumno.js",
    "groupTitle": "Alumno",
    "name": "DeleteAlumnoId"
  },
  {
    "type": "get",
    "url": "/alumno",
    "title": "lista de los primeros 1000 alumnos",
    "group": "Alumno",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "alumno",
            "description": "<p>alumno's list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n [\n{\n    \"id\": 1,\n    \"idPersona\": {\n        \"id\": 1,\n        \"email\": null,\n        \"dispositivo\": null,\n        \"identificacion\": \"1-AEA\",\n        \"nombre\": \"Ariana Michelle\",\n        \"img\": null,\n        \"paterno\": \"Asin\",\n        \"materno\": \"Ergueta\",\n        \"telefono\": null,\n        \"celular\": null,\n        \"cedula\": null,\n        \"expedido\": null,\n        \"fechaNacimiento\": null,\n        \"fechaAlta\": null,\n        \"sexo\": null,\n        \"nro\": \"3\",\n        \"codigoFoto\": \"428\",\n        \"rol\": \"alumno\"\n    }\n},]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Alumno.js",
    "groupTitle": "Alumno",
    "name": "GetAlumno"
  },
  {
    "type": "get",
    "url": "/alumno/:id",
    "title": "buscar un alumno",
    "group": "Alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>alumno id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n {\n    \"id\": 1,\n    \"idPersona\": {\n        \"id\": 1,\n        \"email\": null,\n        \"dispositivo\": null,\n        \"identificacion\": \"1-AEA\",\n        \"nombre\": \"Ariana Michelle\",\n        \"img\": null,\n        \"paterno\": \"Asin\",\n        \"materno\": \"Ergueta\",\n        \"telefono\": null,\n        \"celular\": null,\n        \"cedula\": null,\n        \"expedido\": null,\n        \"fechaNacimiento\": null,\n        \"fechaAlta\": null,\n        \"sexo\": null,\n        \"nro\": \"3\",\n        \"codigoFoto\": \"428\",\n        \"rol\": \"alumno\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "alumno not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Alumno.js",
    "groupTitle": "Alumno",
    "name": "GetAlumnoId"
  },
  {
    "type": "post",
    "url": "/api/persona",
    "title": "registrar un nuevo alumno",
    "group": "Alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>alumno title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": " {\n    \"email\": \"oso@oso.com\",\n    \"identificacion\": \"100-numero-unico\",\n    \"nombre\": \"Ricarso\",\n    \"paterno\": \"Pato\",\n    \"materno\": \"Pato2\",\n    \"telefono\": 124324,\n    \"celular\": 989034,\n    \"cedula\": \"783945\",\n    \"expedido\": \"lp\",\n    \"sexo\": \"M\",\n    \"rol\": \"alumno\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>alumno id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>alumno title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "defaultValue": "false",
            "description": "<p>alumno is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n    \"createdAt\": null,\n    \"updatedAt\": null,\n    \"id\": 4588,\n    \"email\": \"oso@oso.com\",\n    \"dispositivo\": null,\n    \"identificacion\": \"100-numero-unico\",\n    \"nombre\": \"Ricarso\",\n    \"img\": null,\n    \"paterno\": \"Pato\",\n    \"materno\": \"Pato2\",\n    \"telefono\": 124324,\n    \"celular\": 989034,\n    \"cedula\": 100,\n    \"expedido\": \"lp\",\n    \"fechaNacimiento\": null,\n    \"fechaAlta\": null,\n    \"sexo\": \"M\",\n    \"nro\": null,\n    \"codigoFoto\": null,\n    \"rol\": \"alumno\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Alumno.js",
    "groupTitle": "Alumno",
    "name": "PostApiPersona"
  },
  {
    "type": "put",
    "url": "/persona/:id",
    "title": "Actualizar un alumno",
    "group": "Alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>alumno id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre actualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "  {\n\n\"nombre\": \"Ricardo\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200\n{\n  \"id\": 4588,\n  \"email\": \"oso@oso.com\",\n  \"dispositivo\": null,\n  \"identificacion\": \"100-numero-unico\",\n  \"nombre\": \"Ricardo\",\n  \"img\": null,\n  \"paterno\": \"Pato\",\n  \"materno\": \"Pato2\",\n  \"telefono\": 124324,\n  \"celular\": 989034,\n  \"cedula\": 100,\n  \"expedido\": \"lp\",\n  \"fechaNacimiento\": null,\n  \"fechaAlta\": null,\n  \"sexo\": \"M\",\n  \"nro\": null,\n  \"codigoFoto\": null,\n  \"rol\": \"alumno\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Alumno.js",
    "groupTitle": "Alumno",
    "name": "PutPersonaId"
  },
  {
    "type": "post",
    "url": "/asistencia/mostrar",
    "title": "Datos del que esta marcando",
    "version": "1.0.0",
    "name": "traer_datos",
    "group": "Asistencia_Cliente",
    "description": "<p>devuelve datos dependiendo el rol</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 201 OK\n    EJEMPLO TUTOR\n{\n    \"id\": 965,\n    \"email\": null,\n    \"dispositivo\": null,\n    \"identificacion\": \"6195068\",\n    \"nombre\": \"Sergio\",\n    \"img\": null,\n    \"paterno\": \"Eduardo\",\n    \"materno\": \"Mamani Munguia\",\n    \"telefono\": null,\n    \"celular\": null,\n    \"cedula\": null,\n    \"expedido\": null,\n    \"fechaNacimiento\": null,\n    \"fechaAlta\": null,\n    \"sexo\": null,\n    \"nro\": \"15\",\n    \"codigoFoto\": null,\n    \"rol\": \"tutor\",\n    \"alumnos\": [\n        {\n            \"id\": 905,\n            \"email\": null,\n            \"dispositivo\": null,\n            \"identificacion\": \"905-MAL\",\n            \"nombre\": \"Lucia Denisse\",\n            \"img\": \"avatars/6d4d9ca9-9cfc-40d0-9213-4a10ebbec2c1.jpg\",\n            \"paterno\": \"Mamani\",\n            \"materno\": \"Aruquipa\",\n            \"telefono\": null,\n            \"celular\": null,\n            \"cedula\": null,\n            \"expedido\": null,\n            \"fechaNacimiento\": null,\n            \"fechaAlta\": null,\n            \"sexo\": null,\n            \"nro\": \"15\",\n            \"codigoFoto\": \"9181\",\n            \"rol\": \"alumno\"\n        },\n        {\n            \"id\": 765,\n            \"email\": null,\n            \"dispositivo\": null,\n            \"identificacion\": \"765-MAM\",\n            \"nombre\": \"Matias Daniel\",\n            \"img\": \"avatars/5dc9d8de-50db-45f3-96c9-b7f0f3aa7374.jpg\",\n            \"paterno\": \"Mamani\",\n            \"materno\": \"Aruquipa\",\n            \"telefono\": null,\n            \"celular\": null,\n            \"cedula\": null,\n            \"expedido\": null,\n            \"fechaNacimiento\": null,\n            \"fechaAlta\": null,\n            \"sexo\": null,\n            \"nro\": \"22\",\n            \"codigoFoto\": \"9403\",\n            \"rol\": \"alumno\"\n        }\n    ]\n}\n\nEJEMPLO - marca un alumno \n{\n    \"identificacion\": \"905-MAL\",\n    \"materno\": \"Aruquipa\",\n    \"paterno\": \"Mamani\",\n    \"nombre\": \"Lucia Denisse\",\n    \"curso\": \"Pre-kinder A\",\n    \"turno\": \"Mañana\",\n    \"img\": \"avatars/6d4d9ca9-9cfc-40d0-9213-4a10ebbec2c1.jpg\",\n    \"hora_llegada\": \"2:12:26 PM\",\n    \"hora_salida\": \"2:17:36 PM\",\n    \"tutores\": [\n        {\n            \"id\": 965,\n            \"email\": null,\n            \"dispositivo\": null,\n            \"identificacion\": \"6195068\",\n            \"nombre\": \"Sergio\",\n            \"img\": null,\n            \"paterno\": \"Eduardo\",\n            \"materno\": \"Mamani Munguia\",\n            \"telefono\": null,\n            \"celular\": null,\n            \"cedula\": null,\n            \"expedido\": null,\n            \"fechaNacimiento\": null,\n            \"fechaAlta\": null,\n            \"sexo\": null,\n            \"nro\": \"15\",\n            \"codigoFoto\": null,\n            \"rol\": \"tutor\"\n        },\n        {\n            \"id\": 966,\n            \"email\": null,\n            \"dispositivo\": null,\n            \"identificacion\": \"6178934\",\n            \"nombre\": \"Maria\",\n            \"img\": null,\n            \"paterno\": \"Esther\",\n            \"materno\": \"Aruquipa Quispe\",\n            \"telefono\": null,\n            \"celular\": null,\n            \"cedula\": null,\n            \"expedido\": null,\n            \"fechaNacimiento\": null,\n            \"fechaAlta\": null,\n            \"sexo\": null,\n            \"nro\": \"15\",\n            \"codigoFoto\": null,\n            \"rol\": \"tutor\"\n        },\n        {\n            \"id\": 967,\n            \"email\": null,\n            \"dispositivo\": null,\n            \"identificacion\": \"6178933\",\n            \"nombre\": \"Ana\",\n            \"img\": null,\n            \"paterno\": \"Mercedes\",\n            \"materno\": \"Aruquipa Quispe\",\n            \"telefono\": null,\n            \"celular\": null,\n            \"cedula\": null,\n            \"expedido\": null,\n            \"fechaNacimiento\": null,\n            \"fechaAlta\": null,\n            \"sexo\": null,\n            \"nro\": \"15\",\n            \"codigoFoto\": null,\n            \"rol\": \"tutor\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/Asistencia Cliente.js",
    "groupTitle": "Asistencia_Cliente"
  },
  {
    "type": "get",
    "url": "/asistencia/historial_alumno",
    "title": "Historial de Asistencias alumno/s",
    "version": "1.0.0",
    "name": "getCursos",
    "group": "Asistencia",
    "description": "<p>necesita esta Logueado como  alumno. (ejemplo usuario /persona/23)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "todos",
            "description": "<p>los Cursos anidados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 201 OK\n  [\n{\n    \"createdAt\": null,\n    \"updatedAt\": null,\n    \"id\": 92,\n    \"fecha\": \"2018-08-08T04:00:00.000Z\",\n    \"estado\": null,\n    \"observacion\": null,\n    \"hora_llegada\": \"06:36:05\",\n    \"hora_salida\": \"09:41:01\",\n    \"idGestionAcademica\": 1,\n    \"idPersona\": 23\n},\n{\n    \"createdAt\": null,\n    \"updatedAt\": null,\n    \"id\": 1,\n    \"fecha\": \"2018-08-09T04:00:00.000Z\",\n    \"estado\": null,\n    \"observacion\": null,\n    \"hora_llegada\": \"10:41:44\",\n    \"hora_salida\": \"00:30:34\",\n    \"idGestionAcademica\": 1,\n    \"idPersona\": 23\n},\n{\n    \"createdAt\": null,\n    \"updatedAt\": null,\n    \"id\": 58,\n    \"fecha\": \"2018-08-11T04:00:00.000Z\",\n    \"estado\": null,\n    \"observacion\": null,\n    \"hora_llegada\": \"17:57:52\",\n    \"hora_salida\": \"19:34:56\",\n    \"idGestionAcademica\": 1,\n    \"idPersona\": 23\n},\n{\n    \"createdAt\": null,\n    \"updatedAt\": null,\n    \"id\": 69,\n    \"fecha\": \"2018-08-21T04:00:00.000Z\",\n    \"estado\": null,\n    \"observacion\": null,\n    \"hora_llegada\": \"10:16:49\",\n    \"hora_salida\": \"22:44:41\",\n    \"idGestionAcademica\": 1,\n    \"idPersona\": 23\n},\n.\n.\n.",
          "type": "json"
        }
      ]
    },
    "filename": "api/Asistencia.js",
    "groupTitle": "Asistencia"
  },
  {
    "type": "get",
    "url": "/asistencia/historial_por_tutor",
    "title": "Historial de Asistencias alumnos por tutor",
    "version": "1.0.0",
    "name": "get_historial_por_tutor",
    "group": "Asistencia",
    "description": "<p>Exemplo logueado (/persona/1816).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "todos",
            "description": "<p>los Cursos anidados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "   {\n  \"nombre\": \"José\",\n  \"paterno\": \"Luis\",\n  \"materno\": \"Menchaca Jalakori\",\n  \"alumnos\": [\n      {\n          \"id\": 23,\n          \"email\": null,\n          \"dispositivo\": null,\n          \"identificacion\": \"23-MRJ\",\n          \"nombre\": \"José Gabriel\",\n          \"img\": null,\n          \"paterno\": \"Menchaca\",\n          \"materno\": \"Rivero\",\n          \"telefono\": null,\n          \"celular\": null,\n          \"cedula\": null,\n          \"expedido\": null,\n          \"fechaNacimiento\": null,\n          \"fechaAlta\": null,\n          \"sexo\": null,\n          \"nro\": \"23\",\n          \"codigoFoto\": \"460\",\n          \"rol\": \"alumno\",\n          \"asistencias\": [\n              {\n                  \"createdAt\": null,\n                  \"updatedAt\": null,\n                  \"id\": 92,\n                  \"fecha\": \"2018-08-08T04:00:00.000Z\",\n                  \"estado\": null,\n                  \"observacion\": null,\n                  \"hora_llegada\": \"06:36:05\",\n                  \"hora_salida\": \"09:41:01\",\n                  \"idGestionAcademica\": 1,\n                  \"idPersona\": 23\n              },\n              {\n                  \"createdAt\": null,\n                  \"updatedAt\": null,\n                  \"id\": 1,\n                  \"fecha\": \"2018-08-09T04:00:00.000Z\",\n                  \"estado\": null,\n                  \"observacion\": null,\n                  \"hora_llegada\": \"10:41:44\",\n                  \"hora_salida\": \"00:30:34\",\n                  \"idGestionAcademica\": 1,\n                  \"idPersona\": 23\n              },\n              {\n                  \"createdAt\": null,\n                  \"updatedAt\": null,\n                  \"id\": 58,\n                  \"fecha\": \"2018-08-11T04:00:00.000Z\",\n                  \"estado\": null,\n                  \"observacion\": null,\n                  \"hora_llegada\": \"17:57:52\",\n                  \"hora_salida\": \"19:34:56\",\n                  \"idGestionAcademica\": 1,\n                  \"idPersona\": 23\n              },\n              {\n                  \"createdAt\": null,\n                  \"updatedAt\": null,\n                  \"id\": 69,\n                  \"fecha\": \"2018-08-21T04:00:00.000Z\",\n                  \"estado\": null,\n                  \"observacion\": null,\n                  \"hora_llegada\": \"10:16:49\",\n                  \"hora_salida\": \"22:44:41\",\n                  \"idGestionAcademica\": 1,\n                  \"idPersona\": 23\n              },\n              {\n                  \"createdAt\": null,\n                  \"updatedAt\": null,\n                  \"id\": 89,\n                  \"fecha\": \"2018-08-24T04:00:00.000Z\",\n                  \"estado\": null,\n                  \"observacion\": null,\n                  \"hora_llegada\": \"01:05:29\",\n                  \"hora_salida\": \"13:06:30\",\n                  \"idGestionAcademica\": 1,\n                  \"idPersona\": 23\n              },\n              {\n                  \"createdAt\": null,\n                  \"updatedAt\": null,\n                  \"id\": 96,\n                  \"fecha\": \"2018-08-30T04:00:00.000Z\",\n                  \"estado\": null,\n                  \"observacion\": null,\n                  \"hora_llegada\": \"09:04:57\",\n                  \"hora_salida\": \"11:57:42\",\n                  \"idGestionAcademica\": 1,\n                  \"idPersona\": 23\n              }\n          ]\n      },\n      {\n          \"id\": 306,\n          \"email\": null,\n          \"dispositivo\": null,\n          \"identificacion\": \"306-MRL\",\n          \"nombre\": \"Luuis Andrés\",\n          \"img\": null,\n          \"paterno\": \"Menchaca\",\n          \"materno\": \"Rivero\",\n          \"telefono\": null,\n          \"celular\": null,\n          \"cedula\": null,\n          \"expedido\": null,\n          \"fechaNacimiento\": null,\n          \"fechaAlta\": null,\n          \"sexo\": null,\n          \"nro\": \"20\",\n          \"codigoFoto\": \"1100\",\n          \"rol\": \"alumno\",\n          \"asistencias\": []\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/Asistencia.js",
    "groupTitle": "Asistencia"
  },
  {
    "type": "get",
    "url": "/persona/buscar/:nombre",
    "title": "buscar a cualquier persona",
    "group": "Buscar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre, apellidos , carnet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n/persona/buscar/juan",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\": 246,\n        \"email\": null,\n        \"dispositivo\": null,\n        \"identificacion\": \"246-RMJ\",\n        \"nombre\": \"Juan Carlos\",\n        \"img\": \"avatars/6c5a5381-eb59-4c89-bb88-c1261f16a5f8.jpg\",\n        \"paterno\": \"Ramos\",\n        \"materno\": \"Medina\",\n        \"telefono\": null,\n        \"celular\": null,\n        \"cedula\": null,\n        \"expedido\": null,\n        \"fechaNacimiento\": null,\n        \"fechaAlta\": null,\n        \"sexo\": null,\n        \"nro\": \"27\",\n        \"codigoFoto\": \"981\",\n        \"rol\": \"alumno\"\n    },\n...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Buscar.js",
    "groupTitle": "Buscar",
    "name": "GetPersonaBuscarNombre"
  },
  {
    "type": "get",
    "url": "/persona/buscar_alumno/:nombre",
    "title": "buscar alumnos",
    "group": "Buscar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre, apellidos , carnet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n/persona/buscar_alumno/juan",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\": 246,\n        \"email\": null,\n        \"dispositivo\": null,\n        \"identificacion\": \"246-RMJ\",\n        \"nombre\": \"Juan Carlos\",\n        \"img\": \"avatars/6c5a5381-eb59-4c89-bb88-c1261f16a5f8.jpg\",\n        \"paterno\": \"Ramos\",\n        \"materno\": \"Medina\",\n        \"telefono\": null,\n        \"celular\": null,\n        \"cedula\": null,\n        \"expedido\": null,\n        \"fechaNacimiento\": null,\n        \"fechaAlta\": null,\n        \"sexo\": null,\n        \"nro\": \"27\",\n        \"codigoFoto\": \"981\",\n        \"rol\": \"alumno\"\n    },\n...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Buscar.js",
    "groupTitle": "Buscar",
    "name": "GetPersonaBuscar_alumnoNombre"
  },
  {
    "type": "get",
    "url": "/persona/buscar_tutor/:nombre",
    "title": "buscar a Tutores",
    "group": "Buscar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre, apellidos , carnet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n/persona/buscar_tutor/juan",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"id\": 930,\n        \"email\": null,\n        \"dispositivo\": null,\n        \"identificacion\": \"322157\",\n        \"nombre\": \"Juana\",\n        \"img\": null,\n        \"paterno\": \"Daisy\",\n        \"materno\": \"Zelaya Mendivil\",\n        \"telefono\": null,\n        \"celular\": null,\n        \"cedula\": null,\n        \"expedido\": null,\n        \"fechaNacimiento\": null,\n        \"fechaAlta\": null,\n        \"sexo\": null,\n        \"nro\": \"3\",\n        \"codigoFoto\": null,\n        \"rol\": \"tutor\"\n    },\n...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Buscar.js",
    "groupTitle": "Buscar",
    "name": "GetPersonaBuscar_tutorNombre"
  },
  {
    "type": "get",
    "url": "/curso/mostrar_turno/:idTurno",
    "title": "get todos Ordenados",
    "version": "1.0.0",
    "name": "getCursos",
    "group": "Curso",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>del turno</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n/curso/mostrar_turno/2",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "todos",
            "description": "<p>los Cursos anidados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 201 OK\n    {\n\"id\": 2,\n\"nombre\": \"Tarde\",\n\"grados\": [\n {\n   \"id\": 1,\n   \"nombre\": \"Inicial\",\n   \"grupos\": [\n     {\n       \"createdAt\": null,\n       \"updatedAt\": null,\n       \"id\": 2,\n       \"nombre\": \"Kinder\",\n       \"paralelos\": [\n         {\n           \"createdAt\": null,\n           \"updatedAt\": null,\n           \"id\": 1,\n           \"nombre\": \"A\",\n           \"idCurso\": 28\n         },\n         {\n           \"createdAt\": null,\n           \"updatedAt\": null,\n           \"id\": 2,\n           \"nombre\": \"B\",\n           \"idCurso\": 29\n         }\n       ]\n     }\n   ]\n },",
          "type": "json"
        }
      ]
    },
    "filename": "api/CursoController.js",
    "groupTitle": "Curso"
  },
  {
    "type": "get",
    "url": "/curso/mostrar_turno/:id",
    "title": "get todos Ordenados",
    "version": "1.0.0",
    "name": "getCursos",
    "group": "Curso",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>del turno</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\n/curso/mostrar_turno/2",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "todos",
            "description": "<p>los Cursos anidados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 201 OK\n    {\n\"id\": 2,\n\"nombre\": \"Tarde\",\n\"grados\": [\n {\n   \"id\": 1,\n   \"nombre\": \"Inicial\",\n   \"grupos\": [\n     {\n       \"createdAt\": null,\n       \"updatedAt\": null,\n       \"id\": 2,\n       \"nombre\": \"Kinder\",\n       \"paralelos\": [\n         {\n           \"createdAt\": null,\n           \"updatedAt\": null,\n           \"id\": 1,\n           \"nombre\": \"A\",\n           \"idCurso\": 28\n         },\n         {\n           \"createdAt\": null,\n           \"updatedAt\": null,\n           \"id\": 2,\n           \"nombre\": \"B\",\n           \"idCurso\": 29\n         }\n       ]\n     }\n   ]\n },",
          "type": "json"
        }
      ]
    },
    "filename": "api/CursoController.js",
    "groupTitle": "Curso"
  },
  {
    "type": "POST",
    "url": "/dispositivo/adicionar",
    "title": "Adicionar Dispositivo",
    "version": "1.0.0",
    "name": "adicionar_Dispositivo_2",
    "description": "<p>persona logueada emeplo (/persona/1816)</p>",
    "group": "Dispositivo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPersona",
            "description": "<p>id de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idDispositivo",
            "description": "<p>player id del dispositivo</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "{\n\t\"idDispositivo\":\"acc7ce55-1b0c-4542-91d8-39d86f52e52d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>adiciono dispositivo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 200 OK\n {\n\"createdAt\": 1533671591575,\n\"updatedAt\": 1533671591575,\n\"id\": 2,\n\"idDispositivo\": \"acc7ce55-1b0c-4542-91d8-39d86f52e52d\",\n\"idPersona\": {\n    \"createdAt\": 1533504635613,\n    \"updatedAt\": 1533505772744,\n    \"id\": 1,\n    \"email\": \"\",\n    \"identificacion\": \"1-AEA\",\n    \"nombre\": \"Ricarso\",\n    \"img\": \"\",\n    \"paterno\": \"Asin\",\n    \"materno\": \"Ergueta\",\n    \"telefono\": 0,\n    \"celular\": 0,\n    \"cedula\": 0,\n    \"expedido\": \"\",\n    \"fechaNacimiento\": \"0000-00-00\",\n    \"fechaAlta\": \"0000-00-00\",\n    \"sexo\": \"\",\n    \"nro\": \"3\",\n    \"codigoFoto\": \"428\",\n    \"rol\": \"alumno\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/dispositivos.js",
    "groupTitle": "Dispositivo"
  },
  {
    "type": "DELETE",
    "url": "/dispositivo/eliminar",
    "title": "Eliminar dispositivo ESECÌFICO",
    "name": "apiName",
    "group": "Dispositivo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idDispositivo",
            "description": "<p>player ID asignado por onesignal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n {\n\t\"idDispositivo\":\"acc7ce55-1b0c-4542-91d8-39d86f52e52d\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/dispositivos.js",
    "groupTitle": "Dispositivo"
  },
  {
    "type": "delete",
    "url": "/api/v1/tasks/:id",
    "title": "Delete a task",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Task",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The task id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.delete(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Task deleted successfully!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n {\n  \"message\": \"Task deleted successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/CursoController.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/v1/tasks",
    "title": "Retrieve all tasks",
    "version": "1.0.0",
    "name": "GetAll",
    "group": "Task",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The task name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n  \"_id\": \"57e8e94ea06a0c473bac50cc\",\n  \"name\": \"Do the disehs\"\n },\n {\n  \"_id\": \"57e903941ca43a5f0805ba5a\",\n  \"name\": \"Take out the trash\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/CursoController.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/v1/tasks/:id",
    "title": "Retrieve a task",
    "version": "1.0.0",
    "name": "GetOne",
    "group": "Task",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The task id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.defaults.headers.common[\"Authorization\"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The task name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n   \"_id\": \"57e8e94ea06a0c473bac50cc\",\n   \"name\": \"Do the disehs\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "api/CursoController.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "/api/v1/tasks/:id",
    "title": "Update a task",
    "version": "1.0.0",
    "name": "Update",
    "group": "Task",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The task id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The task name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n  \"name\": \"Run in the park\"\n}\n\n$http.defaults.headers.common[\"Authorization\"] = token;\n$http.put(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Task updated successfully!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n {\n  \"message\": \"Task updated successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/CursoController.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/persona?cedula=#",
    "title": "Buscar por carnet",
    "version": "1.0.0",
    "name": "buscar_por_cedula",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The task id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/persona?cedula=6811906",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": "<p>numero de cedula</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n {\n     \"id\": 924,\n     \"email\": null,\n     \"dispositivo\": null,\n     \"identificacion\": \"6811906\",\n     \"nombre\": \"Delia\",\n     \"img\": null,\n     \"paterno\": \"Isabel\",\n     \"materno\": \"Ortiz Antelo\",\n     \"telefono\": null,\n     \"celular\": null,\n     \"cedula\": 6811906,\n     \"expedido\": null,\n     \"fechaNacimiento\": null,\n     \"fechaAlta\": null,\n     \"sexo\": null,\n     \"nro\": \"2\",\n     \"codigoFoto\": null,\n     \"rol\": \"tutor\"\n }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "api/tutor.js",
    "groupTitle": "Tutor"
  },
  {
    "type": "post",
    "url": "/usuario",
    "title": "Adicionar usuario admin",
    "name": "apiName",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rol",
            "description": "<p>usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\" : \"ricardo\",\n     \"password\" : \"123\",\n     \"rol\": \"admin\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"createdAt\": 1533675683353,\n\"updatedAt\": 1533675683353,\n\"id\": 2,\n\"username\": \"ricardo\",\n\"codigo_qr\": \"\",\n\"rol\": \"admin\",\n\"idPersona\": null\n}",
          "type": "type"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/usuario/cambiarPassword",
    "title": "Cambiar Password usuario",
    "name": "cambiar_password",
    "description": "<p>Debe estar logueado.</p>",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>nuevo password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\" : 1,\n     \"password\" : \"nuevoPass\" \n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description irc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"mensaje\": \"cambio de password exitoso\"\n }",
          "type": "type"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "delete",
    "url": "/administrador/:id",
    "title": "Remove a administrador",
    "group": "administrativo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>administrador id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 204 {\n\"id\": 4588,\n\"email\": \"oso@oso.com\",\n\"dispositivo\": null,\n\"identificacion\": \"100-numero-unico\",\n\"nombre\": \"Ricardo\",\n\"img\": null,\n\"paterno\": \"Pato\",\n\"materno\": \"Pato2\",\n\"telefono\": 124324,\n\"celular\": 989034,\n\"cedula\": 100,\n\"expedido\": \"lp\",\n\"fechaNacimiento\": null,\n\"fechaAlta\": null,\n\"sexo\": \"M\",\n\"nro\": null,\n\"codigoFoto\": null,\n\"rol\": \"administrador\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Administrador.js",
    "groupTitle": "administrativo",
    "name": "DeleteAdministradorId"
  },
  {
    "type": "get",
    "url": "/administrador",
    "title": "lista de los primeros 1000 administradors",
    "group": "administrativo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "administrador",
            "description": "<p>administrador's list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n[\n {\n     \"createdAt\": 1535472639728,\n     \"updatedAt\": 1535472639728,\n     \"id\": 1,\n     \"cargo\": \"DIRECTOR GENERAL\",\n     \"idPersona\": {\n     \"id\": 4631,\n     \"email\": null,\n     \"dispositivo\": null,\n     \"identificacion\": \"4631SVP\",\n     \"nombre\": \"P. Alexander\",\n     \"img\": null,\n     \"paterno\": \"Sosa\",\n     \"materno\": \"Vaca\",\n     \"telefono\": null,\n     \"celular\": null,\n     \"cedula\": null,\n     \"expedido\": null,\n     \"fechaNacimiento\": null,\n     \"fechaAlta\": null,\n     \"sexo\": null,\n     \"nro\": \"44\",\n     \"codigoFoto\": \"2201\",\n     \"rol\": \"administrador\"\n     }\n },]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Administrador.js",
    "groupTitle": "administrativo",
    "name": "GetAdministrador"
  },
  {
    "type": "get",
    "url": "/persona/:id",
    "title": "buscar un administrador",
    "group": "administrativo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>administrador id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n {\n\"id\": 4631,\n\"email\": null,\n\"dispositivo\": null,\n\"identificacion\": \"4631SVP\",\n\"nombre\": \"P. Alexander\",\n\"img\": null,\n\"paterno\": \"Sosa\",\n\"materno\": \"Vaca\",\n\"telefono\": null,\n\"celular\": null,\n\"cedula\": null,\n\"expedido\": null,\n\"fechaNacimiento\": null,\n\"fechaAlta\": null,\n\"sexo\": null,\n\"nro\": \"44\",\n\"codigoFoto\": \"2201\",\n\"rol\": \"administrador\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "administrador not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Administrador.js",
    "groupTitle": "administrativo",
    "name": "GetPersonaId"
  },
  {
    "type": "post",
    "url": "/api/persona",
    "title": "registrar un nuevo administrador",
    "group": "administrativo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>administrador title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": " {\n    \"email\": \"oso@oso.com\",\n    \"identificacion\": \"100-numero-unico\",\n    \"nombre\": \"Ricarso\",\n    \"paterno\": \"Pato\",\n    \"materno\": \"Pato2\",\n    \"telefono\": 124324,\n    \"celular\": 989034,\n    \"cedula\": \"783945\",\n    \"expedido\": \"lp\",\n    \"sexo\": \"M\",\n    \"rol\": \"administrador\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>administrador id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>administrador title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "defaultValue": "false",
            "description": "<p>administrador is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n    \"createdAt\": null,\n    \"updatedAt\": null,\n    \"id\": 4588,\n    \"email\": \"oso@oso.com\",\n    \"dispositivo\": null,\n    \"identificacion\": \"100-numero-unico\",\n    \"nombre\": \"Ricarso\",\n    \"img\": null,\n    \"paterno\": \"Pato\",\n    \"materno\": \"Pato2\",\n    \"telefono\": 124324,\n    \"celular\": 989034,\n    \"cedula\": 100,\n    \"expedido\": \"lp\",\n    \"fechaNacimiento\": null,\n    \"fechaAlta\": null,\n    \"sexo\": \"M\",\n    \"nro\": null,\n    \"codigoFoto\": null,\n    \"rol\": \"administrador\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Administrador.js",
    "groupTitle": "administrativo",
    "name": "PostApiPersona"
  },
  {
    "type": "put",
    "url": "/persona/:id",
    "title": "Actualizar un administrador",
    "group": "administrativo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>administrador id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre actualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "  {\n\n\"nombre\": \"Ricardo\"\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200\n{\n  \"id\": 4588,\n  \"email\": \"oso@oso.com\",\n  \"dispositivo\": null,\n  \"identificacion\": \"100-numero-unico\",\n  \"nombre\": \"Ricardo\",\n  \"img\": null,\n  \"paterno\": \"Pato\",\n  \"materno\": \"Pato2\",\n  \"telefono\": 124324,\n  \"celular\": 989034,\n  \"cedula\": 100,\n  \"expedido\": \"lp\",\n  \"fechaNacimiento\": null,\n  \"fechaAlta\": null,\n  \"sexo\": \"M\",\n  \"nro\": null,\n  \"codigoFoto\": null,\n  \"rol\": \"administrador\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/Administrador.js",
    "groupTitle": "administrativo",
    "name": "PutPersonaId"
  }
] });
