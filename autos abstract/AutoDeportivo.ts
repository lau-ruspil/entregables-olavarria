import { Vehiculo } from "./Vehiculo";

export class AutoDeportivo extends Vehiculo {
	private velocidadMaxima: number = 350;

	public acelerar(): string {
		if (this.velocidad < this.velocidadMaxima) {
			this.velocidad += 50;
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
			this.velocidad -= 40;
			if (this.velocidad < 0) {
				this.velocidad = 0;
			}
			return `El vehículo ${this.marca} ${this.modelo} está desacelerando a una velocidad de ${this.velocidad} km/h.`;
		}
	}
}
