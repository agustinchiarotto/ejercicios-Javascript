import {
  expandirInformacionPelicula,
  obtenerPeliculasConPuntuacionExcelente,
  pelicuasConCriticaPromedioMayorA,
  peliculasDeUnDirector,
  promedioAnioEstreno,
  promedioDeCriticaBypeliculaId,
} from '../src/moduloEjercicios.js';

console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios de peliculas.');

const promedioAnio = promedioAnioEstreno();
console.log(
  'Promedio de Anios de estreno de toda la base de datos:',
  promedioAnio
);

const pelicuasConCriticaPromedioMayorA5 = pelicuasConCriticaPromedioMayorA(5);
console.log(
  'Peliculas con criticas promedio mayores a 5:',
  pelicuasConCriticaPromedioMayorA5
);

const promedioDeCriticaDeMatrix = promedioDeCriticaBypeliculaId(2);
console.log(
  'Promedio de criticas de Matrix (id 2):',
  promedioDeCriticaDeMatrix
);

const peliculasDeSpielberg = peliculasDeUnDirector('Steven Spielberg');
console.log('Peliculas dirigidas por Spielberg:', peliculasDeSpielberg);

const peliculasCriticasExcelentes = obtenerPeliculasConPuntuacionExcelente();
console.log('Peliculas con criticas excelentes:', peliculasCriticasExcelentes);

console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios expandir informacion de pelicula.');

const infoBackToTheFuture = expandirInformacionPelicula('Back to the Future');
console.log('Informacion de Back to the Future:', infoBackToTheFuture);

const infoMatrix = expandirInformacionPelicula('Matrix');
console.log('Informacion de Matrix', infoMatrix);
