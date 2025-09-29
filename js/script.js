// JavaScript para una aplicación interactiva de Pokémon

// Array de objetos Pokémon, precargado con 3 Pokémon por defecto
const pokemones = [
  {
    nombre: "Bulbasaur",
    nivel: 5,
    tipo: ["Planta", "Veneno"],
    foto: "",
    hp: 45,
    hp_total: 45,
    evolucion: false,
  },
  {
    nombre: "Charmander",
    nivel: 5,
    tipo: ["Fuego"],
    foto: "",
    hp: 39,
    hp_total: 39,
    evolucion: false,
  },
  {
    nombre: "Squirtle",
    nivel: 5,
    tipo: ["Agua"],
    foto: "",
    hp: 44,
    hp_total: 44,
    evolucion: false,
  },
];

// Función para mostrar el array completo y la lista de nombres en la consola
function mostrarEstado() {
  console.log("--- Array Completo de Pokémon ---");
  console.log(pokemones);

  console.log("\n--- Lista de Nombres ---");
  const nombres = pokemones.map((p) => p.nombre);
  console.log(nombres.join(", "));
}

// --- INTERACCIÓN CON EL USUARIO ---

// Bucle principal para mostrar el menú
let continuar = true;
while (continuar) {
  const opcion = prompt(
    "Menú principal:\n" +
    "a. Mostrar los Pokémon cargados\n" +
    "b. Cargar un nuevo Pokémon\n" +
    "c. Restar HP a un Pokémon existente\n" +
    "d. Salir del programa\n\n" +
    "Seleccione una opción (a, b, c, d):"
  );

  switch (opcion.toLowerCase()) {
    case "a":
      // a. Mostrar los pokemones cargados.
      console.log("Mostrando Pokémon...");
      mostrarEstado();
      break;

    case "b":
      // b. Cargar un nuevo pokémon.
      let cargarOtro = true;
      while (cargarOtro) {
        const nuevoPokemon = {
          nombre: prompt("Ingrese el nombre del Pokémon:"),
          nivel: parseInt(prompt("Ingrese el nivel del Pokémon:")),
          tipo: prompt("Ingrese el(los) tipo(s) (separados por coma):").split(",").map(item => item.trim()),
          foto: prompt("Ingrese la URL de la foto del Pokémon:"),
          hp: parseInt(prompt("Ingrese los HP del Pokémon:")),
          evolucion: confirm("¿El Pokémon tiene evolución? (Aceptar para Sí, Cancelar para No)"),
        };
        // Establecer el hp_total inicial
        nuevoPokemon.hp_total = nuevoPokemon.hp;

        // Validar y agregar al array
        if (nuevoPokemon.nombre && !isNaN(nuevoPokemon.nivel) && !isNaN(nuevoPokemon.hp)) {
          pokemones.push(nuevoPokemon);
          console.log(`Se ha agregado a ${nuevoPokemon.nombre}.`);
        } else {
          alert("Datos incompletos o no válidos. No se agregó el Pokémon.");
        }

        // Preguntar si se quiere agregar otro o terminar
        const respuesta = prompt("¿Desea cargar otro Pokémon? (si/no)");
        if (respuesta.toLowerCase() !== "si") {
          cargarOtro = false;
        }
      }
      mostrarEstado();
      break;

    case "c":
      // c. Restar HP a un pokémon existente.
      if (pokemones.length === 0) {
        alert("No hay Pokémon cargados para modificar.");
        break;
      }
      
      const listaNombres = pokemones.map((p, index) => `${index + 1}. ${p.nombre}`).join("\n");
      const seleccion = parseInt(prompt(`Seleccione el número del Pokémon al que desea restar HP:\n${listaNombres}`)) - 1;

      // Validar la selección
      if (seleccion >= 0 && seleccion < pokemones.length) {
        const hpRestar = parseInt(prompt(`Ingrese la cantidad de HP a restar de ${pokemones[seleccion].nombre}:`));
        if (!isNaN(hpRestar) && hpRestar > 0) {
          pokemones[seleccion].hp -= hpRestar;
          if (pokemones[seleccion].hp < 0) {
            pokemones[seleccion].hp = 0;
          }
          console.log(`Se restaron ${hpRestar} HP a ${pokemones[seleccion].nombre}. HP actual: ${pokemones[seleccion].hp}`);
        } else {
          alert("Cantidad de HP a restar no válida.");
        }
      } else {
        alert("Selección no válida.");
      }
      mostrarEstado();
      break;

    case "d":
      // d. Salir del programa.
      console.log("Saliendo del programa. ¡Hasta luego!");
      continuar = false;
      break;

    default:
      alert("Opción no válida. Por favor, elija una de las opciones del menú.");
      break;
  }
}