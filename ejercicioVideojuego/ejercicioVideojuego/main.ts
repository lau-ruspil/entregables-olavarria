import { Personaje } from "./Personaje";
import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";

const mago = new Mago("Zarathos", "Cadenas del Abismo");
const luchador = new Luchador("Ragnar", "Golpe del Ragnarok");
const arquero = new Arquero("Valen", "Flecha del Destino");

// Subir nivel del mago y realizar ataques
mago.subirNivel();
mago.defender(luchador);
mago.atacar(luchador);

// Subir nivel del luchador y realizar ataques
luchador.defender(mago);
luchador.subirNivel();
luchador.atacar(mago);

// Subir nivel del arquero y realizar ataques
arquero.subirNivel();
arquero.defender(luchador);
arquero.atacar(luchador);
