function calcularIMC() {
    const nome = document.getElementById('Nome').value;
    const peso = parseFloat(document.getElementById('Peso').value);
    const altura = parseFloat(document.getElementById('Altura').value);
    
    if (!nome || isNaN(peso) || isNaN(altura)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    
  
    document.getElementById('resultadoIMC').innerText = `${nome}, seu IMC é ${imc}`;
    document.getElementById('modal').style.display = 'block';
}


function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
