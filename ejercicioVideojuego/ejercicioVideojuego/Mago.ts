import { Personaje } from "./Personaje";
export class Mago extends Personaje {
	constructor(nombre: string, habilidad: string) {
		super(nombre, habilidad);
		this.danioBase = 15;
	}

	public subirNivel(): void {
		this.nivel += 1;
		this.danioBase += 5; //El mago aumenta su daño al subir de nivel
		console.log(
			`El mago ${this.nombre} ha subido al nivel ${this.nivel}, ahora inflige ${this.danioBase} puntos de daño`
		);
	}
}
