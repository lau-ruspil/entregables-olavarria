export abstract class Personaje {
	public nombre: string;
	public nivel: number = 1;
	public puntosDeVida: number = 100;
	protected habilidad: string;
	protected danioBase: number = 10; // Daño base para los atques

	constructor(nombre: string, habilidad: string) {
		this.nombre = nombre;
		this.habilidad = habilidad;
	}

	public atacar(oponente: Personaje): void {
		if (this.puntosDeVida <= 0) {
			console.log(
				`El personaje ${this.nombre} con su habilidad especial ${this.habilidad} de nivel ${this.nivel} ha sido eliminado y no puede atacar.`
			);
			return;
		}

		// Verificación si el oponente ya ha sido eliminado
		if (oponente.puntosDeVida <= 0) {
			console.log(
				`El personaje ${oponente.nombre} ya ha sido eliminado y no puede ser atacado.`
			);
			return;
		}

		// Realiza el ataque y reduce los puntos de vida del oponente
		oponente.puntosDeVida -= this.danioBase;

		// Mensaje sobre el ataque
		if (oponente.puntosDeVida > 0) {
			console.log(
				`El personaje ${this.nombre} atacó a ${oponente.nombre} con su habilidad ${this.habilidad} de nivel ${this.nivel}, dejándolo con ${oponente.puntosDeVida} puntos de vida.`
			);
		} else {
			console.log(
				`El personaje ${oponente.nombre} ha sido eliminado por ${this.nombre} con su habilidad ${this.habilidad} de nivel ${this.nivel}.`
			);
		}
	}

	public defender(oponente: Personaje): void {
		if (this.puntosDeVida <= 0) {
			console.log(
				`El personaje ${this.nombre} ha sido eliminado por el oponente ${oponente.nombre} con su habilidad especial ${oponente.habilidad} de nivel ${oponente.nivel}`
			);
			return;
		}

		const danioRecibido = oponente.danioBase;
		this.puntosDeVida -= danioRecibido;

		if (this.puntosDeVida <= 0) {
			this.puntosDeVida = 0;
		}

		console.log(
			`El personaje ${this.nombre} se defendió del ataque de ${oponente.nombre} con su habilidad especial ${this.habilidad} de nivel ${this.nivel}, pero recibió ${danioRecibido} puntos de daño. Ahora tiene ${this.puntosDeVida} puntos de vida.`
		);
	}

	public abstract subirNivel(): void;
}
