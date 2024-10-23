import { DispositivoElectronico } from "./DispositivoElectronico";

export class Television extends DispositivoElectronico {
	private canal: number;

	constructor(tipo: string, marca: string, modelo: string) {
		super(tipo, marca, modelo);
		this.canal = 10;
	}

	public funcionalidadEspecial(): void {
		this.canal += 1;
		console.log(
			`El dispositivo ${this.tipo} ${this.marca} ${this.modelo} ahora cambió al canal ${this.canal}`
		);
	}
}
