import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
	private cilindrada: number;

	constructor(
		marca: string,
		modelo: string,
		tipo: number,
		patente: string,
		cilindrada: number
	) {
		super(marca, modelo, tipo, patente);
		this.cilindrada = cilindrada;
	}

	getCilindrada(): number {
		return this.cilindrada;
	}

	setCilindrada(cilindrada: number): void {
		this.cilindrada = cilindrada;
	}

	public getInfo(): string {
		return `
			 Vehiculo: Moto
                Marca: ${this.marca}
                Modelo: ${this.modelo}
                Tipo: ${this.tipo}
                Patente: ${this.patente}
                Cilindrada: ${this.cilindrada} cc
		`;
	}
}
