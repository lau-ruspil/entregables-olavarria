import { Auto, Moto, Camion } from "./Vehiculos";
import { RegistroAutomotor } from "./registroAutomotor";

// Crear instancias de los vehiculos
const auto1 = new Auto("Volkswagen", "Vento", 2023, "AG 858 FG");
const auto2 = new Auto("Toyota", "Corolla", 2023, "AG 418 CH");
const moto1 = new Moto("Yamaha", "YZ", 2023, "E482VAM");
const moto2 = new Moto("Honda", "CBR", 2022, "D269RFM");
const camion1 = new Camion("Mercedes Benz", "Actros", 2022, "AF 723 BC");

// Crear una instancia del Registro Automotor
const registro = new RegistroAutomotor();

// Agregar los vehiculos al registro del automotor
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(auto2);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(moto2);
registro.agregarVehiculo(camion1);

// Dar de baja un vehiculo
const baja = registro.darDeBajaVehiculo("Camion", "AF 723 BC");
console.log(baja);

// Modificacion de un vehiculo
const resultadoModificacion = registro.modificarVehiculo(
	"Auto",
	"Ford",
	"Focus",
	2022,
	"AF 470 CH"
);
console.log(resultadoModificacion);

// Obtener Y mostrar la lista de Autos con su info
console.log("Lista de Autos:");
console.log(registro.getVehiculoPorTipo("Auto"));

// Obtener Y mostrar la lista de Motos con su info
console.log("Lista de Motos:");
console.log(registro.getVehiculoPorTipo("Moto"));

// Obtener Y mostrar la lista de Camiones con su info
console.log("Lista de Camiones:");
console.log(registro.getVehiculoPorTipo("Camion"));
