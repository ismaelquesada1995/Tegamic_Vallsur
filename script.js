const espirales = [
"A11","A12","A13","A14","A15","A16",
"A21","A22","A23","A24","A25","A26",
"A31","A32","A33","A34","A35","A36",
"A41","A42","A43","A44","A45","A46",
"A51","A52","A53","A54","A55","A56",
"A61","A62","A63","A64","A65","A66"
];

const maquina = document.getElementById("maquina");

espirales.forEach(id=>{
let btn=document.createElement("button");
btn.innerText=id;

btn.onclick=()=>mostrarEspiral(id);

maquina.appendChild(btn);
});

async function mostrarEspiral(id){

const data = await fetch("data/espirales.json");
const json = await data.json();

const espiral = json[id];

if(!espiral){
document.getElementById("resultado").innerHTML="No hay datos para este carril";
return;
}

let html=`<h2>${id} - ${espiral.coleccion}</h2>`;

espiral.cartas.forEach(carta=>{

html+=`
<div class="carta">
<img src="${carta.imagen}">
<p>${carta.nombre}</p>
<b>${carta.precio}</b>
</div>
`;

});

document.getElementById("resultado").innerHTML=html;

}