
/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje


  Fecha de entrega: 19/05/2025
*/

/**
 * @file Simulador de combate entre personajes de un videojuego.
 * @author [Gabriel Gutiérrez]
 * @version 1.0.0
 * @description Este script implementa un sistema básico de combate por turnos
 * para personajes con diferentes clases (Guerrero, Mago, Arquero).
 * Permite la creación de personajes, simula ataques basados en sus
 * estadísticas y habilidades específicas de clase, y gestiona
 * las rondas de combate hasta que solo quede un personaje en pie.
 * Las estadísticas y las habilidades de ataque son aleatorias
 * dentro de un rango definido por las propiedades del personaje.
 * @license MIT
 * @see {@link } para más información.
 * @class personajes
    * @property {string} nombre - Nombre del personaje.
    * @property {number} vida - Vida del personaje.
    * @property {number} ataque - Ataque del personaje.
    * @property {number} defensa - Defensa del personaje.
    * @property {number} velocidad - Velocidad del personaje.
    * @method saludar - Saluda al personaje.
    * @method atacar - Ataca a otro personaje.
    * @method estaVivo - Verifica si el personaje está vivo.
    * @method recibirDanio - Recibe daño y actualiza la vida.
 * @method atacarconarma - Ataca con un arma (solo para guerreros).
 * @method lanzarhechizo - Lanza un hechizo (solo para magos).
 * @method dispararflecha - Dispara una flecha (solo para arqueros).
 * @method jugar - Inicia el juego y permite a los personajes atacar.
 * @method seleccionarObjetivo - Selecciona un objetivo aleatorio para atacar.
 * @method obtenerOrdenTurnos - Obtiene el orden de turnos basado en la velocidad.
 * @function atacar - Función para realizar un ataque entre dos personajes.
 */

class personajes {
    constructor(nombre, vida, ataque, defensa, velocidad) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }

    
    atacar(objetivo) {
        let ataque = Math.floor(Math.random() * this.ataque);
        let defensa = Math.floor(Math.random() * objetivo.defensa);
        let daño = ataque - defensa;

        if (daño < 0) {
            daño = 0;
        }

        objetivo.vida -= daño;

        console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${daño} de daño`);
    }

    estaVivo() {
        return this.vida > 0;
    }

    recibirDanio(cantidad) { 
        this.vida -= cantidad;
        if (this.vida < 0) {
            this.vida = 0; 
        }
        console.log(`${this.nombre} recibe ${cantidad} de daño. Vida restante: ${this.vida}`);
        if (this.vida <= 0) {
            console.log(`${this.nombre} ha muerto.`);
        }
    }
}

class guerrero extends personajes {
    constructor (nombre, vida, ataque, defensa, velocidad, armas){ 
        super(nombre, vida, ataque, defensa, velocidad);
        this.armas = armas;
    }

    atacarconarma() {
        const arma = this.armas[Math.floor(Math.random() * this.armas.length)];
        return arma;
    }
}

class mago extends personajes {
    constructor(nombre, vida, ataque, defensa, velocidad, hechizos){
        super(nombre, vida, ataque, defensa, velocidad);
        this.hechizos = hechizos;
    }

    lanzarhechizo() { 
        const hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
        return hechizo;
    }
}

class arquero extends personajes {
    constructor(nombre, vida, ataque, defensa, velocidad, flechas){
        super(nombre, vida, ataque, defensa, velocidad);
        this.flechas = flechas;
    }

    dispararflecha() { 
        const flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
        return flecha;
    }
}


const listaDePersonajes = [
    new guerrero(
        "Garen",
        110,
        60,
        30,
        Math.floor(Math.random() * 10),
        [{ nombre: "Espada", daño: 30 }, { nombre: "Hacha", daño: 35 }]
    ),
    new guerrero(
        "Sett",
        105,
        65,
        35,
        Math.floor(Math.random() * 10),
        [{ nombre: "Martillo", daño: 40 }, { nombre: "Espada", daño: 30 }]
    ),
    new mago(
        "Ryze",
        94,
        55,
        20,
        Math.floor(Math.random() * 10),
        [{ nombre: "Fuego", daño: 65 }, { nombre: "Hielo", daño: 50 }]
    ),
    new mago(
        "Brand",
        93,
        50,
        25,
        Math.floor(Math.random() * 10),
        [{ nombre: "Rayo", daño: 70 }, { nombre: "Tierra", daño: 50 }]
    ),
    new arquero(
        "Wind",
        99,
        49,
        29,
        Math.floor(Math.random() * 10),
        [{ nombre: "Flecha de Fuego", daño: 55 }, { nombre: "Flecha de Hielo", daño: 48 }]
    )
];


function atacar(atacante, atacado) {
    if (!atacante.estaVivo() || !atacado.estaVivo()) return;

    let danio = 0;
    let accionDescripcion = '';

    if (atacante instanceof mago) {
        const accion = Math.floor(Math.random() * 2);
        if (accion === 0) {
            const ataqueRandom = Math.floor(Math.random() * atacante.ataque);
            const defensaRandom = Math.floor(Math.random() * atacado.defensa);
            danio = Math.max(0, ataqueRandom - defensaRandom);
            accionDescripcion = `ataca a`;
        } else {
            const hechizo = atacante.lanzarhechizo();
            const defensaRandom = Math.floor(Math.random() * atacado.defensa);
            danio = Math.max(0, hechizo.daño - defensaRandom);
            accionDescripcion = `lanza el hechizo ${hechizo.nombre} a`;
        }
    } else if (atacante instanceof guerrero) {
        const accion = Math.floor(Math.random() * 2);
        if (accion === 0) {
            const ataqueRandom = Math.floor(Math.random() * atacante.ataque);
            const defensaRandom = Math.floor(Math.random() * atacado.defensa);
            danio = Math.max(0, ataqueRandom - defensaRandom);
            accionDescripcion = `ataca a`;
        } else {
            const arma = atacante.atacarconarma(); 
            const defensaRandom = Math.floor(Math.random() * atacado.defensa);
            danio = Math.max(0, arma.daño - defensaRandom);
            accionDescripcion = `ataca con ${arma.nombre} a`; 
        }
    } else if (atacante instanceof arquero) {
        const accion = Math.floor(Math.random() * 2);
        if (accion === 0) {
            const ataqueRandom = Math.floor(Math.random() * atacante.ataque);
            const defensaRandom = Math.floor(Math.random() * atacado.defensa);
            danio = Math.max(0, ataqueRandom - defensaRandom);
            accionDescripcion = `ataca a`;
        } else {
            const flecha = atacante.dispararflecha();
            const defensaRandom = Math.floor(Math.random() * atacado.defensa);
            danio = Math.max(0, flecha.daño - defensaRandom);
            accionDescripcion = `dispara una ${flecha.nombre} a`;
        }
    } else {
        const ataqueRandom = Math.floor(Math.random() * atacante.ataque);
        const defensaRandom = Math.floor(Math.random() * atacado.defensa);
        danio = Math.max(0, ataqueRandom - defensaRandom);
        accionDescripcion = `ataca a`;
    }

    console.log(`${atacante.nombre} ${accionDescripcion} ${atacado.nombre} y causa ${danio} de daño.`);

    atacado.recibirDanio(danio);
}


function seleccionarObjetivo(atacante, listaDePersonajes) { 
    const posiblesObjetivos = listaDePersonajes.filter(p => p.estaVivo() && p !== atacante);
    if (posiblesObjetivos.length === 0) return null;
    return posiblesObjetivos[Math.floor(Math.random() * posiblesObjetivos.length)];
}

function obtenerOrdenTurnos(listaDePersonajes) { 
    const personajesVivos = listaDePersonajes.filter(p => p.estaVivo());
    personajesVivos.sort((a, b) => {
        const numA = Math.floor(Math.random() * (a.velocidad + 1));
        const numB = Math.floor(Math.random() * (b.velocidad + 1));
        return numB - numA; 
    });
    return personajesVivos;
}

function jugar() {
    let ronda = 1;
    while (listaDePersonajes.filter(p => p.estaVivo()).length > 1) { 
        console.log(`\n--- Ronda ${ronda} ---`);
        const orden = obtenerOrdenTurnos(listaDePersonajes); 
        for (const atacante of orden) {
            if (!atacante.estaVivo()) continue;
            const objetivo = seleccionarObjetivo(atacante, listaDePersonajes); 
            if (!objetivo) {
                break;
            }
            atacar(atacante, objetivo);

            if (listaDePersonajes.filter(p => p.estaVivo()).length <= 1) break; 
        }
        ronda++;
    }
    const ganador = listaDePersonajes.find(p => p.estaVivo()); 
    if (ganador) {
        console.log(`\n¡El ganador es ${ganador.nombre}!`);
    } else {
        console.log("No hay ganador, todos han muerto.");
    }
}

listaDePersonajes.forEach(p => p.saludar()); 
jugar();