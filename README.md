# apiDisney

Api de disney que Permite la creacion de nuevas peliculas y de nuevos personajes, almacenandolos en una base de datos previamente creada y diseñada.

La api es Testeada en PostMan para poder validar cada uno de los EndPoints.
Falta mejorar el tema de el registro y el login.

Los endPoints para los personajes son los siguentes:

Creacion de personajes:
Metodo POST: http://localhost:3000/characters
y esto es lo que recibe por el Body para crear los personajes.
{
    "nombre": "Stitch",
    "imagen": "stitch.jpg",
    "edad": 4,
    "peso": 150,
    "historia": "La pelicula de Stitch"
}

Mostrar todos los personajes:
Metodo GET: http://localhost:3000/characters

Obtener el detalle de cada uno de los personajes:
Metodo GET: http://localhost:3000/characters/:id








