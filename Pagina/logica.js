function validarPeso(event){
    event.preventDefault();

const peso = document.getElementById('peso').value;
const mensajeDiv = document.getElementById('mensaje');
const imagen1= document.createElement('img');
const imagen2= document.createElement('img');

if (peso >= 100){
    mensajeDiv.textContent ='Te pasas de gorda termotanque de suministro continuo, te recontra chorrea la grasa';
    mensajeDiv.style.color = 'red';

    imagen1.src = 'https://i.ibb.co/JRkSxjm/imagen-png.png';
    imagen1.width= 880;
    imagen1.height= 510;  

    mensajeDiv.appendChild(imagen1);
} 
else{
    mensajeDiv.textContent ='Mujere coman, engorden ese toto';
    mensajeDiv.style.color = 'green';

    imagen2.src = 'https://i.ibb.co/RcxFjwZ/imagen2.jpg';
    imagen2.width= 400;
    imagen2.height= 400;  

    mensajeDiv.appendChild(imagen2);
}
return false;
}