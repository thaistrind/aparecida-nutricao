var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;

	var altura = paciente.querySelector(".info-altura").textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValido = validaAltura(altura);

	if (!pesoValido) {
		tdImc.textContent = "Peso inválido!";
		pesoValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaValido) {
		tdImc.textContent = "Altura inválida!";
		alturaValido = false;
		paciente.classList.add("paciente-invalido");

	}

	if (pesoValido && alturaValido) {
		var imc = calculaImc(peso, altura);

		tdImc.textContent = imc;
	}
}

function calculaImc(peso, altura){
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.00){
		return true;
	}else {
		return false;
	}
}