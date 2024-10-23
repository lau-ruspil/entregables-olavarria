export abstract class Vehiculo {
	protected marca: string;
	protected modelo: string;
	protected anio: number;
	protected velocidad: number;

	constructor(marca: string, modelo: string, anio: number) {
		this.marca = marca;
		this.modelo = modelo;
		this.anio = anio;
		this.velocidad = 0;
	}

	abstract acelerar(): string;

	abstract desacelerar(): string;

	public getVelocidadActual(): string {
		return `
			El vehículo ${this.marca} ${this.modelo} está yendo a una velocidad actual de ${this.velocidad} km/h.
		`;
	}

	public getInfo(): string {
		return `
		Informacion del Vehiculo:
			Marca: ${this.marca}
			Modelo: ${this.modelo}
			Año: ${this.anio}
		`;
	}
}
