import { Television } from "./Television";
import { Radio } from "./Radio";

const radio = new Radio("Radio", "Sanyo", "Xcf");

const televisor = new Television("Televisor", "Philips", "Smart Tv Full HD 4K");

radio.apagar();
radio.encender();
radio.funcionalidadEspecial();

televisor.encender();
televisor.apagar();
televisor.funcionalidadEspecial();
