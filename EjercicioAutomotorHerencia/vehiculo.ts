export class Vehiculo {
	protected marca: string;
	protected modelo: string;
	protected tipo: number;
	protected patente: string;

	constructor(marca: string, modelo: string, tipo: number, patente: string) {
		this.marca = marca;
		this.modelo = modelo;
		this.tipo = tipo;
		this.patente = patente;
	}
}
