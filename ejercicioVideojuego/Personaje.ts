export abstract class Personaje {
	protected nombre: string;
	protected nivel: number = 1;
	protected puntosDeVida: number = 100;
	protected habilidad: string;

	constructor(nombre: string, habilidad: string) {
		this.nombre = nombre;
		this.habilidad = habilidad;
	}

	abstract atacar(): void;

	abstract defender(): void;

	abstract subirNivel(): void;
}
