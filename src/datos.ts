let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let dato4 = <HTMLInputElement>document.getElementById("dato4");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");
let rotulo4 = <HTMLParagraphElement>document.getElementById("rotulo4");

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let tiempoVuelta1: number = Number(dato1.value);
  let tiempoVuelta2: number = Number(dato2.value);
  let tiempoVuelta3: number = Number(dato3.value);
  let tiempoVuelta4: number = Number(dato4.value);
  let sumaVueltas: number;
  let promedioVueltas: number;
  rotulo1.innerHTML = "Ingrese tiempo de primera vuelta";
  rotulo2.innerHTML = "Ingrese tiempo de segunda vuelta";
  rotulo3.innerHTML = "Ingrese tiempo de tercera vuelta";
  rotulo4.innerHTML = "Ingrese tiempo de cuarta vuelta";
  sumaVueltas = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
  promedioVueltas = sumaVueltas / 4;
  console.log("El tiempo promedio de Vuelta es :", promedioVueltas);
});
