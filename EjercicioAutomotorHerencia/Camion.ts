import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo {
	private capacidadDeCarga: number;

	constructor(
		marca: string,
		modelo: string,
		tipo: number,
		patente: string,
		capacidadDeCarga: number
	) {
		super(marca, modelo, tipo, patente);
		this.capacidadDeCarga = capacidadDeCarga;
	}

	public getCapacidadDeCarga(): number {
		return this.capacidadDeCarga;
	}

	public setCapacidadDeCarga(capacidadDeCarga: number): void {
		this.capacidadDeCarga = capacidadDeCarga;
	}

	public getInfo(): string {
		return `
			Vehiculo: Camion
				Marca: ${this.marca}
				Modelo: ${this.modelo}
				Tipo: ${this.tipo}
				Patente: ${this.patente}
				Capacidad de Carga: ${this.capacidadDeCarga} Kg
		`;
	}
}
