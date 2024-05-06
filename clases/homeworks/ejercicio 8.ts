//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!

function pluck<Type extends object, Prop extends keyof Type>(
  arreglo: Type[],
  prop: Prop
) {
  return arreglo.map((object) => {
    return object[prop];
  });
}
