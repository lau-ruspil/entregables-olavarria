import { Vehiculo } from "./Vehiculo";

export class AutoCiudad extends Vehiculo {
	private velocidadMaxima: number = 180;

	public acelerar(): string {
		if (this.velocidad < this.velocidadMaxima) {
			this.velocidad += 20;
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
			this.velocidad -= 10;
			if (this.velocidad < 0) {
				this.velocidad = 0;
			}
			return `El vehpublic ículo ${this.marca} ${this.modelo} está desacelerando a una velocidad de ${this.velocidad} km/h.`;
		}
	}
}
