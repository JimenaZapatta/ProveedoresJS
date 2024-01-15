let razonsocial=prompt("Ingrese Razón Social");

if(razonsocial == "") {
    alert( "Error: Favor ingresar su Razón Social");}
    
else  { alert("Bienvenido" + " "+ razonsocial);}

const ListaPagos=["Ecoquimica"," Mircoslues", "Larrique","Granelur", "Bioterra"," Linn"," Bako"]
console.log (ListaPagos);
console.log (ListaPagos.includes(razonsocial));

let resultado= ListaPagos.includes(razonsocial)
if(resultado == true){
    alert("Pueden pasar a cobrar el martes desde 8:30 a 12:00, gracias.");
}
else {alert(razonsocial +":"+ " "+ "No hay pago para dicha empresa, consultar nuevamente el jueves que viene.")}