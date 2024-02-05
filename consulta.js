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

const Buscar = document.getElementById ("buscar")
const buscardor= document.querySelector("#buscador")
const result1 = document.getElementById("ingrut").value;
Buscar.addEventListener ("click", function(){
    if( ingrut === "") {
        alert("Ingresar Rut");
        return;
    }
const pagoencontrado = lista.length (Rut===ingrut)
    
 if (pagoencontrado){

    const pagoviernes = document.createElement("div");
    pagoviernes.innerHTML = <p>$${rutok.Razónsocial} puede pasar el viernes desde 8:30 a 12:00</p>;
   
    buscardor.appendChild(pagoviernes); 
}else {
    alert ("No se encontro ningun pago.")
}
});    

