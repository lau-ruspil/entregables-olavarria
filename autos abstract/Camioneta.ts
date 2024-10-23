import { Vehiculo } from "./Vehiculo";

export class Camioneta extends Vehiculo {
	private velocidadMaxima: number = 200;

	public acelerar(): string {
		if (this.velocidad < this.velocidadMaxima) {
			this.velocidad += 30;
			if (this.velocidad > this.velocidadMaxima) {
				this.velocidad = this.velocidadMaxima;
			}
			return `El vehículo ${this.marca} ${this.modelo} está acelerando a ${this.velocidad} km/h.`;
		} else {
			return `El Vehículo ${this.marca} ${this.modelo} ha alcanzado la velocidad máxima de ${this.velocidadMaxima} km/h.`;
		}
	}

	public desacelerar(): string {
		if (this.velocidad <= 0) {
			this.velocidad = 0;
			return `El vehículo ${this.marca} ${this.modelo} está frenado.`;
		} else {
			this.velocidad -= 20;
			if (this.velocidad < 0) {
				this.velocidad = 0;
			}
			return `El vehículo ${this.marca} ${this.modelo} está desacelerando a una velocidad de ${this.velocidad} km/h.`;
		}
	}
}
