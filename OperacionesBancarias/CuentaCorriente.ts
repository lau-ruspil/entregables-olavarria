import { CuentaBancaria } from "./CuentaBancaria";
export class CuentaCorriente extends CuentaBancaria {
	public tipoDeCuenta(): void {
		console.log("Cuenta Corriente");
	}
}
