
function filtrelistadepagos (){
let razonsocial = prompt ("Ingrese razón social").toLowerCase().trim(); {

if(razonsocial == "") {
    alert( "Error: Favor ingresar su Razón Social")}
    
else { alert("Bienvenido" + " "+ razonsocial);}}

const ListaPagos=["Bioterra"," Mircoslues", "Larrique","Granelur", "Bioterra"," Linn"," Bako"]
console.log (ListaPagos.includes(razonsocial));
console.log (ListaPagos);


let resultado= ListaPagos.filter((x)=> x.razonsocial.toUpperCase().trim().includes(razonsocial))

if(resultado.length>0){
    alert("Pueden pasar a cobrar el martes desde 8:30 a 12:00, gracias.");
}
else {alert(razonsocial +":"+ " "+ "No hay pago para dicha empresa, consultar nuevamente el jueves que viene.")}}