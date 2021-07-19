import basededatos, { database } from './basededatos.js';
import * as helper from './helper.js';

/**
 * Devuelve el promedio de anios de estreno de todas las peliculas de la base de datos.
 */
export const promedioAnioEstreno = () => {
  let anios = [];
  basededatos.peliculas.map((peli) => (anios = [...anios, peli.anio]));
  return helper.promedioDeLista(anios);
};

/**
 * Devuelve la lista de peliculas con promedio de critica mayor al numero que llega
 * por parametro.
 * @param {number} promedio
 */
export const pelicuasConCriticaPromedioMayorA = (promedio) => {
  let result = [];
  basededatos.peliculas.map((pelicula) => {
    let promedioReal = promedioDeCriticaBypeliculaId(pelicula.id);

    if (promedioReal > promedio) {
      pelicula = { ...pelicula, puntaje_promedio: promedioReal };
      result = [...result, pelicula];
    }
  });

  return result;
};

/**
 * Devuelve la lista de peliculas de un director
 * @param {string} nombreDirector
 */
export const peliculasDeUnDirector = (nombreDirector) => {
  let idDirector = database.directores.find(
    (director) => director.nombre === nombreDirector
  ).id;
  return database.peliculas.filter((pelicula) => {
    if (pelicula.directores.find((director) => director === idDirector) > 0) {
      return pelicula;
    }
  });
};

/** Devuelve el promedio de critica segun el id de la pelicula.
 * @param {number} peliculaId
 */
export const promedioDeCriticaBypeliculaId = (peliculaId) => {
  let result = [];
  database.calificaciones.map((calificacion) => {
    if (calificacion.pelicula === peliculaId) {
      result = [...result, calificacion.puntuacion];
    }
  });
  return helper.promedioDeLista(result);
};

/**
 * Obtiene la lista de peliculas con alguna critica con
 * puntuacion excelente (critica >= 9).
 * En caso de no existir el criticas que cumplan, devolver un array vacio [].
 * Ejemplo del formato del resultado: 
 *  [
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
    ],
 */
export const obtenerPeliculasConPuntuacionExcelente = () => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  // console.log(basededatos.peliculas);
  let result = [];
  database.calificaciones.filter((calificacion) => {
    if (calificacion.puntuacion >= 9) {
      database.peliculas.find((pelicula) => {
        if (pelicula.id === calificacion.pelicula) {
          result = [...result, pelicula];
        }
      });
    }
  });
  return result;
};

/**
 * Devuelve informacion ampliada sobre una pelicula.
 * Si no existe la pelicula con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto pelicula,
 * agregar la lista de criticas recibidas, junto con los datos del critico y su pais.
 * Tambien agrega informacion de los directores y generos a los que pertenece.
 * Ejemplo de formato del resultado para 'Indiana Jones y los cazadores del arca perdida':
 * {
            id: 3,
            nombre: 'Indiana Jones y los cazadores del arca perdida',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Camboya'
            },
            directores: [
                { id: 5, nombre: 'Steven Spielberg' },
                { id: 6, nombre: 'George Lucas' },
            ],
            generos: [
                { id: 2, nombre: 'Accion' },
                { id: 6, nombre: 'Aventura' },
            ],
            criticas: [
                { critico: 
                    { 
                        id: 3, 
                        nombre: 'Suzana Mendez',
                        edad: 33,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 5 
                },
                { critico: 
                    { 
                        id: 2, 
                        nombre: 'Alina Robles',
                        edad: 21,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 7
                },
            ]
        },
 * @param {string} nombrePelicula
 */
export const expandirInformacionPelicula = (nombrePelicula) => {
  // return {};
  let peli = database.peliculas.find(
    (pelicula) => pelicula.nombre === nombrePelicula
  );
  let directores = peli.directores.map((director) =>
    database.directores.find((dire) => dire.id === director)
  );
  let generos = peli.generos.map((genero) =>
    database.generos.find((gen) => gen.id === genero)
  );
  let criticas = database.calificaciones.filter(
    (calif) => calif.pelicula === peli.id
  );

  criticas.map(
    (critica) =>
      (critica.critico = database.criticos.find((c) => {
        if (c.id === critica.critico) {
          c.pais = database.paises.find((p) => p.id === c.pais)?.nombre;
          return c;
        }
      }))
  );

  return {
    ...peli,
    directores: directores,
    generos: generos,
    criticas: criticas.map((critica) => {
      return {
        critico: JSON.stringify(critica.critico),
        puntuacion: critica.puntuacion,
      };
    }),
  };
};
