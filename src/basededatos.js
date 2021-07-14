export const database = {
    peliculas: [
        {
            id: 1,
            nombre: 'Back to the Future',
            anio: 1985,
            direccionSetFilmacion: {
                calle: 'Av. Siempre viva',
                numero: 2043,
                pais: 'Colombia',
            },
            directores: [1],
            generos: [1, 2, 6]
        },
        {
            id: 2,
            nombre: 'Matrix',
            anio: 1999,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Argentina'
            },
            directores: [2, 3],
            generos: [1, 2]
        },
        {
            id: 3,
            nombre: 'Cloud Atlas',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Argentina'
            },
            directores: [2, 3, 4],
            generos: [1, 2]
        },
        {
            id: 3,
            nombre: 'Indiana Jones y los cazadores del arca perdida',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Camboya'
            },
            directores: [5, 6],
            generos: [2, 6]
        },
    ],
    directores: [
        { id: 1, nombre: 'Robert Zemeckis' },
        { id: 2, nombre: 'Lilly Wachowski' },
        { id: 3, nombre: 'Lana Wachowski' },
        { id: 4, nombre: 'Tom Tykwer' },
        { id: 5, nombre: 'Steven Spielberg' },
        { id: 6, nombre: 'George Lucas' },
    ],
    paises: [
        { id: 1, nombre: 'Argentina' },
        { id: 2, nombre: 'Colombia' },
    ],
    generos: [
        { id: 1, nombre: 'Ciencia Ficcion' },
        { id: 2, nombre: 'Accion' },
        { id: 3, nombre: 'Comedia' },
        { id: 4, nombre: 'Drama' },
        { id: 5, nombre: 'Documental' },
        { id: 6, nombre: 'Aventura' },
    ],
    criticos: [
        { id: 1, nombre: 'Rigoberto Manchu', edad: 22, pais: 1 },
        { id: 2, nombre: 'Alina Robles', edad: 21, pais: 2 },
        { id: 3, nombre: 'Suzana Mendez', edad: 33, pais: 2 },
        { id: 4, nombre: 'Adrian Soto', edad: 26, pais: 1 },
        { id: 5, nombre: 'Martin Sarnaga', edad: 23, pais: 2 },
        { id: 6, nombre: 'Pablo Tomafi', edad: 30, pais: 2 },
    ],
    calificaciones: [
        { critico: 1, pelicula: 1, puntuacion: 5 },
        { critico: 1, pelicula: 3, puntuacion: 7.5 },
        { critico: 2, pelicula: 2, puntuacion: 4 },
        { critico: 2, pelicula: 3, puntuacion: 5 },
        { critico: 2, pelicula: 4, puntuacion: 2 },
        { critico: 3, pelicula: 1, puntuacion: 6 },
        { critico: 3, pelicula: 3, puntuacion: 5 },
        { critico: 3, pelicula: 4, puntuacion: 6 },
        { critico: 4, pelicula: 1, puntuacion: 9 },
        { critico: 4, pelicula: 2, puntuacion: 9.5 },
        { critico: 4, pelicula: 4, puntuacion: 1 },
        { critico: 5, pelicula: 3, puntuacion: 7 },
        { critico: 5, pelicula: 4, puntuacion: 1 },
    ],
};

export default database;