/** Dado una lista de objetos, devuelve el promedio.
 * @param  {} lista
 */
export const promedioDeLista = (list) => {
  let add = 0;
  list.map((elem) => {
    add += elem;
  });
  return add / list.length;
};

// console.log(promedioDeLista([7, 7, 7]));
