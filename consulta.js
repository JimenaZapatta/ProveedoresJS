const listapagos= function (Rut, Razónsocial){
this.Rut= Rut
this.Razónsocial=Razónsocial
}
let prov1 = new listapagos (123, "Bioterra")
let prov2 = new listapagos (124, "Sudel")
let prov3 = new listapagos (125, "Granelur")
let prov4 = new listapagos (126, "Ijasa")
let prov5 = new listapagos (127, "Tor")

let lista = [prov1,prov2,prov3,prov4,prov5];
 
let ingresers= prompt("Ingrese Razón Social").toLowerCase().trim(); 

if (ingresers== ""){

    alert ("favor ingresa razón social");
for (break;)

}else { (alert ("Bienvenido" +" "+ ingresers))}


let resultado = lista.filter((listapagos)=>listapagos.Razónsocial.toLowerCase().trim())
if(resultado.length<0){
alert("puede pasar este viernes en el horario de 8:30 a 12:00")

}else{alert("no tiene pago para este Viernes, vuelva a intetar la semana que viene")}



