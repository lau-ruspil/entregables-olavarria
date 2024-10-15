import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
	constructor(nombre: string, habilidad: string) {
		super(nombre, habilidad);
	}

	public subirNivel(): void {
		this.nivel += 1;
		this.danioBase += 3; //El arquero incrementa levemente su daño
		console.log(
			`El arquero ${this.nombre} ha subido al nivel ${this.nivel} ahora inflige ${this.danioBase} puntos de daño`
		);
	}
}
