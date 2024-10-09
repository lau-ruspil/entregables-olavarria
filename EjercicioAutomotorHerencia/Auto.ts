import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
	private tipoCombustible: string;

	constructor(
		marca: string,
		modelo: string,
		tipo: number,
		patente: string,
		tipoCombustible: string
	) {
		super(marca, modelo, tipo, patente);
		this.tipoCombustible = tipoCombustible;
	}

	public getCombustible(): string {
		return this.tipoCombustible;
	}

	public setTipoCombustible(combustible: string): void {
		this.tipoCombustible = combustible;
	}

	public getInfo(): string {
		return `
			Vehiculo: Auto
				Marca: ${this.marca}
				Modelo: ${this.modelo}
				Tipo: ${this.tipo}
				Patente: ${this.patente}
				Combustible: ${this.tipoCombustible}
		`;
	}
}
