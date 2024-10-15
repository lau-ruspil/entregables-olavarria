import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
	constructor(nombre: string, habilidad: string) {
		super(nombre, habilidad);
		this.danioBase = 12;
	}

	public subirNivel(): void {
		this.nivel += 1;
		this.puntosDeVida += 20; // El luchador aumenta su vida al subir de nivel
		console.log(
			`El luchador ${this.nombre} ha subido al nivel ${this.nivel} ahora tiene ${this.puntosDeVida} puntos de vida`
		);
	}
}
