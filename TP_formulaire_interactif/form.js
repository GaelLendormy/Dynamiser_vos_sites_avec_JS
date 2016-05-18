//On place le code dans une IIFE pour isoler le code
(function(){

//Fonction desactivant l'affichage des tooltips
function desactivateTooltips() {
	var tooltips = document.querySelectorAll('.tooltip');
	var tooltipsLength = tooltips.length;
	for (var i = 0; i < tooltipsLength; i++) {
		tooltips[i].style.display = 'none';
     	}
 }

//On crée un objet dans lequel on place toutes les fonctions de controle
var check= {};
check['sex'] = function (){
	var inputs = document.querySelectorAll('.gender');
	var inputsLength = inputs.length;
	var tooltip = document.querySelector('.sex');
	for (var i = 0; i < inputsLength; i++) {
		if(inputs[i]. checked) {
			tooltip.style.display = 'none';
			break;
		}else{
			tooltip.style.display = 'inline';
		}
	}
};

check['lastName'] = function (){
	var input = document.getElementById('lastName');
	var inputLength = input.value.length;
	var inputValue = input.value;
	var tooltip = document.querySelector('.lastName');

	if (isNaN(inputValue)) {
		if(inputLength>0 && inputLength<2){
			tooltip.style.display = 'inline';
			input.style.borderColor = 'red';
		}else if(inputLength>1){
			tooltip.style.display = 'none';
			input.style.borderColor = 'green';
		}
	}else{
		tooltip.style.display = 'inline';
		input.style.borderColor = 'red';
		return false;
	}
};

check['firstName'] = function (){
	var input = document.getElementById('firstName');
	var inputLength = input.value.length;
	var inputValue = input.value;
	var tooltip = document.querySelector('.firstName');

	if (isNaN(inputValue)) {
		if(inputLength>0 && inputLength<2){
			tooltip.style.display = 'inline';
			input.style.borderColor = 'red';
		}else if(inputLength>1){
			tooltip.style.display = 'none';
			input.style.borderColor = 'green';
		}

	}else{
		tooltip.style.display = 'inline';
		input.style.borderColor = 'red';
		return false;
	}
};

check['age'] = function (){
	var input = document.getElementById('age');
	var inputLength = input.value.length;
	var inputValue = input.value;
	var tooltip = document.querySelector('.age');

	
	if(inputValue>4 && inputValue<141){
		tooltip.style.display = 'none';
		input.style.borderColor = 'green';
	}else{
		tooltip.style.display = 'inline';
		input.style.borderColor = 'red';
		return false;
	}
	
};

check['login'] = function (){
	var input = document.getElementById('login');
	var inputLength = input.value.length;
	var inputValue = input.value;
	var tooltip = document.querySelector('.login');

	if(inputLength>=0 && inputLength<4){
		tooltip.style.display = 'inline';
		input.style.borderColor = 'red';
		return false;			
	}else{
		tooltip.style.display = 'none';
		input.style.borderColor = 'green';
	}
};

check['password'] = function (){
	var input = document.getElementById('password');
	var inputLength = input.value.length;
	var inputValue = input.value;
	var tooltip = document.querySelector('.password');

	if(inputLength>=0 && inputLength<6){
		tooltip.style.display = 'inline';
		input.style.borderColor = 'red';
		return false;			
	}else{
		tooltip.style.display = 'none';
		input.style.borderColor = 'green';
	}
};

check['password2'] = function (){
	var inputPassword = document.getElementById('password');
	var inputPassword2 = document.getElementById('password2');
	var inputPasswordValue = inputPassword.value;
	var inputPassword2Value = inputPassword2.value;
	var tooltip = document.querySelector('.password2');

	if((inputPasswordValue) && (inputPasswordValue === inputPassword2Value)){
		tooltip.style.display = 'none';
		input.style.borderColor = 'green';			
	}else{
		tooltip.style.display = 'inline';
		inputPassword2.style.borderColor = 'red';
		return false;
	}
};

check['country'] = function (){
	var list = document.getElementById('country');
	var tooltip = document.querySelector('.country');

	if(list.selectedIndex){
		tooltip.style.display = 'none';
	}else {
		tooltip.style.display = 'inline';
	}
};


//On ajoute un evenement de controle à tous les inputs de saisie
var inputs = document.getElementsByTagName('input');
var c = inputs.length;
for (var i = 2; i < (c-1); i++) {
 	var inputID = inputs[i].id;
 	inputs[i].addEventListener('keyup', function(){
 		check[this.id]();
 	});
}

//On ajoute un evenement de controle lors de la selection du sexe
var genders = document.querySelectorAll('.gender');
var gendersLength = genders.length;
for (var i = 0; i < gendersLength; i++) {
	genders[i].addEventListener('click', function(){
		check['sex']();
	});
}

//On ajoute un evenement de controle lors de la selection d'un pays
var listCountry = document.getElementById('country');
listCountry.addEventListener('change', function(){
	check[this.id]();
});

//On controle tous les champs lors du submit
var submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
	
	for (var id in check){
		var verif = check[id]();
		if (verif  == false) {
			e.preventDefault();
		}	
	}
});
 
 //On desactive l'affichage des tooltips lors du reset des champs
var submit = document.getElementById('reset');
submit.addEventListener('click', function(e){	
	desactivateTooltips();
});

//On desactive de base l'affichage des tooltips
desactivateTooltips();
})();
