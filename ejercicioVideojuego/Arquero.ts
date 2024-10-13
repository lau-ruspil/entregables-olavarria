import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
	protected nivel: number;
	protected puntosDeVida: number;
	constructor(nombre: string, habilidad: string) {
		super(nombre, habilidad);
		this.nivel = 1;
		this.puntosDeVida = 100;
	}

	atacar(): void {
		if (this.puntosDeVida <= 0) {
			console.log(`El personaje ${this.nombre} ha sido eliminado`);
		} else {
			this.puntosDeVida -= 10;
			console.log(`
			El personaje ${this.nombre} con nivel ${this.nivel} 
			está atacando con su habilidad ${this.habilidad} 
			y tiene ${this.puntosDeVida} puntos de vida
			`);
		}
	}

	defender(): void {
		if (this.puntosDeVida < 100) {
			this.puntosDeVida += 10;
			if (this.puntosDeVida > 100) {
				this.puntosDeVida = 100;
			}
		}
		console.log(`
			El personaje ${this.nombre} con nivel ${this.nivel}
			está defendiendo con su habilidad ${this.habilidad}
			y tiene ${this.puntosDeVida} puntos de vida	
			`);
	}

	subirNivel(): void {
		this.nivel += 1;
		console.log(`
			El personaje ${this.nombre} ahora sube al nivel ${this.nivel}`);
	}
}
