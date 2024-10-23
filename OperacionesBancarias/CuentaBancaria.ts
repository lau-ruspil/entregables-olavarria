import { OperacionesBancarias } from "./OpBancariasInterfaz";

export abstract class CuentaBancaria implements OperacionesBancarias {
	protected saldo: number;
	constructor() {
		this.saldo = 0;
	}

	public depositar(monto: number): void {
		this.saldo += monto;
		console.log(
			`Depósito realizado exitosamente. Ahora tu saldo disponible es de $${this.saldo} ARS.`
		);
	}

	public retirar(monto: number): void {
		if (monto > this.saldo) {
			console.log(
				`No se puede realizar el retiro. El monto solicitado es mayor que tu saldo disponible de $${this.saldo} ARS.`
			);
		} else if (this.saldo <= 0) {
			this.saldo = 0;
			console.log(
				`Retiro Cancelado. Tienes un saldo de $${this.saldo} ARS.`
			);
		} else {
			this.saldo -= monto;
			console.log(
				`Retiro realizado exitosamente. Ahora tu saldo disponible es de $${this.saldo} ARS.`
			);
		}
	}

	abstract tipoDeCuenta(): void;
}
