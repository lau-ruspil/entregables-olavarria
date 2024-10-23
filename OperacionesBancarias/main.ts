import { CuentaCorriente } from "./CuentaCorriente";
import { CuentaDeAhorros } from "./CuentaDeAhorros";

const cuentaCorriente = new CuentaCorriente();
cuentaCorriente.depositar(5000);
cuentaCorriente.retirar(1000);

const cuentaDeAhorros = new CuentaDeAhorros();
cuentaDeAhorros.depositar(3000);
cuentaDeAhorros.retirar(4000);
