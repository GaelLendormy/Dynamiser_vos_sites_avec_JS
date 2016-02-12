function convertirEnLettre(data){
	var centaine = parseInt(data / 100,10);
	var moduloCentaine = data % 100;
	var dizaine = parseInt(moduloCentaine/10);
	var unite = moduloCentaine%10;
	
	var arrayUniteLettre = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
	var arrayDizaineLettre= ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt',];

	// De 11 à 16
	if(moduloCentaine>10 && moduloCentaine<17){
		unite = moduloCentaine;
		dizaine = 0;
	}
	// De 0 à 9
	if(unite === 0 && dizaine === 0 && centaine === 0){
		var uniteLettre = 'zéro';
	}else{
		var uniteLettre = arrayUniteLettre[unite];	
	}

	// Les dizaines
	var dizaineLettre = arrayDizaineLettre[dizaine];
	// Cas particuliers 70 et 90	
	if(dizaine === 7 || dizaine === 9){

		if(unite > 6 && unite<10){
			uniteLettre = arrayDizaineLettre[1] +'-' + arrayUniteLettre[unite];	
		}else{
			unite = unite+10;
			uniteLettre = arrayUniteLettre[unite];	
		}
		
	}

	// Car particulier 21 31 41 51 61 71 
	if ((dizaine>1 && dizaine<8) && (unite === 1 || unite === 11)){
		uniteLettre = 'et-' + uniteLettre;
	}
	// Les centaines
	if (centaine ===1){
		var centaineLettre = 'cent';
	}else if (centaine===0){
		centaineLettre = '';
	
	}else{
		var centaineLettre = arrayUniteLettre[centaine];
		centaineLettre = centaineLettre + '-cent';
		if (dizaine === 0 && unite === 0){
			centaineLettre = centaineLettre + 's';
		}	
	}


 	var nombreEnLettre = centaineLettre + (centaineLettre && dizaineLettre ? '-' : '') 
	 + dizaineLettre + ((centaineLettre && uniteLettre) || (dizaineLettre && uniteLettre) ? '-' : '') + uniteLettre;
	console.log(nombreEnLettre);
}

for(var i=0; i<1000;i++){
	convertirEnLettre(i);
}