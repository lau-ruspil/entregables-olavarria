import { CuentaBancaria } from "./CuentaBancaria";
export class CuentaDeAhorros extends CuentaBancaria {
	public tipoDeCuenta(): void {
		console.log(`Cuenta de Ahorros`);
	}
}
