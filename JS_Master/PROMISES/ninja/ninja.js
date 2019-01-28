/* Obtener una matriz con los resultados de ejecutar la función 
calculoP() o calculoC()
 
 Esa función debes ejecutarla sobre todos los valores de la matriz 
 (la variable con los datos de origen se llama matriz).
  Imprimir este resultado: 
  [ 99, 399, 899, 1599, 2499, 3599, 4899, 6399, 8099, 9999 ]. 

 */

const matriz   = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const calculoP = (a) => new Promise(
   resolve => setTimeout(
      () => resolve(a * a - 1),
      Math.random() * 100
   )
);
const calculoC = (a, fn) => setTimeout(
   () => fn(a * a - 1),
   Math.random() * 100
);