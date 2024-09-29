import { Auto, Moto, Camion } from "./Vehiculos";

// Clase RegistroAutomotor
export class RegistroAutomotor {
	// array para almacenar vehiculos
	private vehiculos: (Auto | Moto | Camion)[] = [];

	// Metodo para agregar un vehiculo
	agregarVehiculo(vehiculo: Auto | Moto | Camion) {
		this.vehiculos.push(vehiculo); // Agregamos el vehiculo al array
	}

	// Metodo para obtener la lista de vehiculos deu tipo especifico
	getVehiculoPorTipo(tipo: "Auto" | "Moto" | "Camion"): string {
		const vehiculosFiltrados = this.vehiculos.filter((vehiculo) => {
			if (tipo === "Auto" && vehiculo instanceof Auto) {
				return true;
			} else if (tipo === "Moto" && vehiculo instanceof Moto) {
				return true;
			} else if (tipo === "Camion" && vehiculo instanceof Camion) {
				return true;
			}
			return false;
		});

		if (vehiculosFiltrados.length === 0) {
			return `No hay ${tipo}s Registrados`;
		}

		return vehiculosFiltrados
			.map((vehiculo) => vehiculo.getInfo())
			.join("\n");
	}

	// Metodo para modificar un Vehiculo
	modificarVehiculo(
		tipo: "Auto" | "Moto" | "Camion",
		marca: string,
		modelo: string,
		año: number,
		patente: string
	): string {
		for (const vehiculo of this.vehiculos) {
			if (
				(tipo === "Auto" && vehiculo instanceof Auto) ||
				(tipo === "Moto" && vehiculo instanceof Moto) ||
				(tipo === "Camion" && vehiculo instanceof Camion)
			) {
				vehiculo.setInfo(marca, modelo, año, patente);
				return `${tipo} modificado exitosamente`;
			}
		}
		return `No hay ${tipo} registrados para modificar`;
	}

	// Metodo para dar de baja un vehiculo
	darDeBajaVehiculo(
		tipo: "Auto" | "Moto" | "Camion",
		patente: string
	): string {
		for (let i = 0; i < this.vehiculos.length; i++) {
			if (
				(tipo === "Auto" &&
					this.vehiculos[i] instanceof Auto &&
					this.vehiculos[i].getPatente() === patente) ||
				(tipo === "Moto" &&
					this.vehiculos[i] instanceof Moto &&
					this.vehiculos[i].getPatente() === patente) ||
				(tipo === "Camion" &&
					this.vehiculos[i] instanceof Camion &&
					this.vehiculos[i].getPatente() === patente)
			) {
				this.vehiculos.splice(i, 1); // Elimina el vehiculo del array
				return `${tipo} con la patente ${patente} dado de baja correctamente`;
			}
		}
		return `No se encontró ${tipo} con la patente ${patente}`;
	}
}
