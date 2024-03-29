export interface Provincia{

  id?:number;//así puede o no tener el id con la ?
  nombre:string;
  activo:number;

}

export interface Poblacion{
  id?:number;
  nombre:string;
  provincia:Provincia;
  activo:number;
}
export interface Tipo{
  id?:number;
  nombre:string;
  activo:number;
}

export interface Inmueble{
  id?:number;

  activo:number;
  amueblado:number;
  apertura:string;
  ascensor:number;
  cp:string;
  operacion:string;
  descripcion:string;
  jardin:number;
  nombreVia:string;
  numero:string;
  numeroBalcones:string;
  numeroBanhos:string;
  numeroHabitaciones:string;
  orientacion:string;
  piscina:number;
  planta:string;
  plazasGaraje:string;
  portada:number;
  precio:number;
  puerta:string;
  superficieConstruida:string;
  superficieUtil:string;
  tendedero:number;
  tipoCalefaccion:string;
  titular:string;
  trastero:number;
  via:string;
  poblacion:Poblacion;
  tipo:Tipo;
  direccionCompleta?:string;


}
export interface Credentials{

  username:string;
  password:string;
}
export interface Usuario{

  id?:number;
  user:string;
  email:string;
  password:string;
  rol?:string;
  activo?:number;

}
