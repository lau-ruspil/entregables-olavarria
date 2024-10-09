import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./RegistroAutomotor";

// Instanciando el registro del automotor
const registro = new RegistroAutomotor();

// Instanciando y agregando un Auto
const auto1 = new Auto("Toyota", "Corolla", 4, "AA 123 BB", "Eléctrico");
registro.agregarVehiculo(auto1);

// Instanciando y agregando un Camion
const camion1 = new Camion("Ford", "F-150", 6, "AC 987 CD", 5000); // Capacidad en kg
registro.agregarVehiculo(camion1);

// Instanciando y agregando una Moto
const moto1 = new Moto("Honda", "CBR 1000", 2, "AA 456 AA", 1000); // Cilindrada en cc
registro.agregarVehiculo(moto1);

// Obtener la lista de vehículos de tipo Auto
console.log("Lista de Autos:");
console.log(registro.getVehiculoPorTipo("Auto"));

// Obtener la lista de vehículos de tipo Camion
console.log("Lista de Camiones:");
console.log(registro.getVehiculoPorTipo("Camion"));

// Obtener la lista de vehículos de tipo Moto
console.log("Lista de Motos:");
console.log(registro.getVehiculoPorTipo("Moto"));

// Uso de métodos específicos
console.log(
	`Tipo de combustible del auto con patente AA 123 BB: ${auto1.getCombustible()}`
);
console.log(
	`Capacidad de carga del camión con patente AC 987 CD: ${camion1.getCapacidadDeCarga()} kg`
);
console.log(
	`Cilindrada de la moto con patente AA 456 AA: ${moto1.getCilindrada()} cc`
);

// Modificar un Auto
console.log("Modificando el Auto con patente AA 123 BB...");
console.log(
	registro.modificarVehiculo("Auto", "Toyota", "Corolla", 2021, "AA 123 BB")
);
console.log("Lista de Autos después de la modificación:");
console.log(registro.getVehiculoPorTipo("Auto"));

// Dar de baja una Moto
console.log("Dando de baja la Moto con patente AA 456 AA...");
console.log(registro.darDeBajaVehiculo("Moto", "AA 456 AA"));
console.log("Lista de Motos después de la baja:");
console.log(registro.getVehiculoPorTipo("Moto"));
