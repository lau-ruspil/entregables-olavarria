import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
	constructor(marca: string, modelo: string, tipo: number, patente: string) {
		super(marca, modelo, tipo, patente);
	}

	public getInfo(): string {
		return `
			Vehiculo: Auto
				Marca: ${this.marca}
				Modelo: ${this.modelo}
				Tipo: ${this.tipo}
				Patente: ${this.patente}
		`;
	}

	// Metodo para acceder a la patente
	public getPatente(): string {
		return this.patente;
	}

	public setInfo(
		marca: string,
		modelo: string,
		tipo: number,
		patente: string
	) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}
}
