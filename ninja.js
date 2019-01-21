Debes obtener una matriz con los resultados de ejecutar la función calculoP() o calculoC()
 (puedes elegir cualquiera de las dos). 
 Esa función debes ejecutarla sobre todos los valores de la matriz 
 (la variable con los datos de origen se llama matriz).
  El resultado debes imprimirlo con un console.log y debe darte este resultado: 
  [ 99, 399, 899, 1599, 2499, 3599, 4899, 6399, 8099, 9999 ]. 
  Debes tener en cuenta que calculoP() es una función basada en promesas y calculoC() en callbacks.
   Como ya te hemos comentado, puedes elegir cualquiera de las dos, la que más te guste. 
   Se puede abordar cómo se quieras, pero sólo utilizando estas dos funciones. Si no lo resuelves del todo, envía tu mejor aproximación.
 

const matriz   = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const calculoP = (a) => new Promise(resolve => setTimeout(() => resolve(a * a - 1), Math.random() * 100));
const calculoC = (a, fn) => setTimeout(() => fn(a * a - 1), Math.random() * 100);