import { log } from "node:console";
import { AutoCiudad } from "./AutoCiudad";
import { AutoDeportivo } from "./AutoDeportivo";
import { Camioneta } from "./Camioneta";

const autoCiudad = new AutoCiudad("Volkswagen", "Fox", 2016);

const autoDeportivo = new AutoDeportivo("Audi", "r8", 2022);

const camioneta = new Camioneta("Ford", "Raptor", 2022);

console.log(autoCiudad.getInfo());
console.log(autoDeportivo.getInfo());
console.log(camioneta.getInfo());

console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.acelerar());
console.log(autoCiudad.desacelerar());
console.log(autoCiudad.desacelerar());
console.log(autoCiudad.desacelerar());
console.log(autoCiudad.getVelocidadActual());

console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.acelerar());
console.log(autoDeportivo.desacelerar());
console.log(autoDeportivo.desacelerar());
console.log(autoDeportivo.desacelerar());
console.log(autoDeportivo.getVelocidadActual());

console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.acelerar());
console.log(camioneta.desacelerar());
console.log(camioneta.desacelerar());
console.log(camioneta.desacelerar());
console.log(camioneta.getVelocidadActual());
