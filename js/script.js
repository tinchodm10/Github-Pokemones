//Variables
// let nombre = "Arbok";
// let nivel = 35;
// let tipo = ["veneno", "siniestro"];
// let foto = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png";
// let hp = 80;
// let hp_total = 80;
// let evolución = false;
//Objetos
// const pokemon = {};
// const pokemon2 = {};
//Arrays
let seguir_cargando = false;
const pokemones = [];
const pokemon = {
  nombre: "",
  nivel: 0,
  tipo: [],
  foto: "",
  hp: 0,
  hp_total: 0,
  evolución: false,
};
//Captura
do {
  //Carga de pokemones
  pokemon.nombre = prompt("Ingrese el nombre del Pokémon:");
  pokemon.nivel = Number(prompt("Ingrese el nivel del Pokémon:"));

  //guardamos los datos en el array de
  pokemones.push(pokemon);
  let terminar = prompt("¿Desea cargar otro Pokémon? (si/no)");
  //reiniciamos el chekeo de la variable para seguir o no cargando datos
  seguir_cargando = false;
  if (terminar === "si") {
    seguir_cargando = true;
  }
} while (seguir_cargando === true);

//Mostrar datos cargados en array
console.log(pokemones);
for (let i = 0; i < pokemones.length; i++) {
  console.log(
    "Nombre: " + pokemones[i].nombre + ", Nivel: " + pokemones[i].nivel
  );
}
//Mostrar datos cargados en array en formato mas amigable
// console.log("Nombre: " + pokemon.nombre + ", Nivel: " + pokemon.nivel);
