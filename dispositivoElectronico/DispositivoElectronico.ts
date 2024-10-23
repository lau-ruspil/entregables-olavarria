export abstract class DispositivoElectronico {
	protected tipo: string;
	protected marca: string;
	protected modelo: string;
	protected estado: boolean;

	constructor(tipo: string, marca: string, modelo: string) {
		this.tipo = tipo;
		this.marca = marca;
		this.modelo = modelo;
		this.estado = false;
	}

	public encender(): void {
		this.estado = true;
		console.log(
			`El dispositivo ${this.tipo} ${this.marca} ${this.modelo} está encendido.`
		);
	}

	public apagar(): void {
		this.estado = false;
		console.log(
			`El dispositivo ${this.tipo} ${this.marca} ${this.modelo} está apagado.`
		);
	}

	abstract funcionalidadEspecial(): void;
}
