import { DispositivoElectronico } from "./DispositivoElectronico";

export class Radio extends DispositivoElectronico {
	private emisora: number;

	constructor(tipo: string, marca: string, modelo: string) {
		super(tipo, marca, modelo);
		this.emisora = 99.9;
	}

	public funcionalidadEspecial(): void {
		this.emisora += 5;
		console.log(
			`El dispositivo ${this.tipo} ${this.marca} ${this.modelo} ahora cambió a la emisora FM ${this.emisora}`
		);
	}
}
