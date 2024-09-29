// Clase Auto
export class Auto {
	private marca: string;
	private modelo: string;
	private tipo: number;
	private patente: string;

	constructor(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}

	getInfo(): string {
		return `
			Vehiculo: Auto
				Marca: ${this.marca}
				Modelo: ${this.modelo}
				Tipo: ${this.tipo}
				Patente: ${this.patente}
		`;
	}

	// Metodo para acceder a la patente
	getPatente(): string {
		return this.patente;
	}

	setInfo(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}
}

// Clase Moto
export class Moto {
	private marca: string;
	private modelo: string;
	private tipo: number;
	private patente: string;

	constructor(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}

	getInfo(): string {
		return `
			Vehiculo: Moto
				Marca: ${this.marca}
				Modelo: ${this.modelo}
				Tipo: ${this.tipo}
				Patente: ${this.patente}
		`;
	}

	// Metodo para acceder a la patente
	getPatente(): string {
		return this.patente;
	}

	setInfo(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}
}

// Clase Camion
export class Camion {
	private marca: string;
	private modelo: string;
	private tipo: number;
	private patente: string;

	constructor(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}

	getInfo(): string {
		return `
			Vehiculo: Camion
				Marca: ${this.marca}
				Modelo: ${this.modelo}
				Tipo: ${this.tipo}
				Patente: ${this.patente}
		`;
	}

	// Metodo para acceder a la patente
	getPatente(): string {
		return this.patente;
	}

	setInfo(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}
}
