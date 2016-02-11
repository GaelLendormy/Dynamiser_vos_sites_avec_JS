function convertirEnLettre(data){
	var centaine = parseInt(data / 100,10);
	var moduloCentaine = data % 100;
	var dizaine = parseInt(moduloCentaine/10);
	var unite = moduloCentaine%10;
	
	// Convertion centaine
	switch(centaine){
		case 1 : 
			centaineLettre = 'cent';
			break;
		case 2 : 
			centaineLettre = 'deux-cents';
			break;
		case 3 : 
			centaineLettre = 'trois-cents';
			break;
		case 4 : 
			centaineLettre = 'quatre-cents';
			break;
		case 5 : 
			centaineLettre = 'cinq-cents';
			break;
		case 6 : 
			centaineLettre = 'six-cents';
			break;
		case 7 : 
			centaineLettre = 'sept-cents';
			break;
		case 8 : 
			centaineLettre = 'huit-cents';
			break;
		case 9 : 
			centaineLettre = 'neuf-cents';
			break;
		case 0 : 
			centaineLettre = '';
			break;
	}

	//Convertion dizaine
	switch(dizaine){
		case 1 : 
			if (unite>0 && unite<7){
				var dizaineLettre = '';
			}else{
				var dizaineLettre = 'dix';	
			}

			break;
		case 2 : 
			var dizaineLettre = 'vingt';
			break;
		case 3 : 
			var dizaineLettre = 'trente';
			break;
		case 4 : 
			var dizaineLettre = 'quarante';
			break;
		case 5 : 
			var dizaineLettre = 'cinquante';
			break;
		case 6 : 
			var dizaineLettre = 'soixante';
			break;
		case 7 : 
			var dizaineLettre = 'soixante';
			break;
		case 8 : 
			var dizaineLettre = 'quatre-vingt';
			break;
		case 9 : 
			var dizaineLettre = 'quatre-vingt';
			break;
		case 0 : 
			var dizaineLettre = '';
			break;				
	}			

	// Convertion unité
	if((dizaine === 1 || dizaine === 7 ||dizaine === 9) && (unite>0 && unite<7)){
		switch(unite){
				case 1 : 
					var uniteLettre = 'onze';
					break;
				case 2 : 
					var uniteLettre = 'douze';
					break;
				case 3 : 
					var uniteLettre = 'treize';
					break;
				case 4 : 
					var uniteLettre = 'quatorze';
					break;
				case 5 : 
					var uniteLettre = 'quinze';
					break;
				case 6 : 
					var uniteLettre = 'seize';
					break;

		}	
	}else if((dizaine === 7 || dizaine === 9) && (unite>6 && unite<10)){
		switch(unite){
			case 7 : 
				var uniteLettre = 'dix-sept';
				break;
			case 8 : 
				var uniteLettre = 'dix-huit';
				break;
			case 9 : 
				var uniteLettre = 'dix-neuf';
				break;
		}
	}else{
		switch(unite){
			case 1 : 
				var uniteLettre = 'un';
				break;
			case 2 : 
				var uniteLettre = 'deux';
				break;
			case 3 : 
				var uniteLettre = 'trois';
				break;
			case 4 : 
				var uniteLettre = 'quatre';
				break;
			case 5 : 
				var uniteLettre = 'cinq';
				break;
			case 6 : 
				var uniteLettre = 'six';
				break;
			case 7 : 
				var uniteLettre = 'sept';
				break;
			case 8 : 
				var uniteLettre = 'huit';
				break;
			case 9 : 
				var uniteLettre = 'neuf';
				break;
			case 0 :
				if (centaine === 0 && dizaine === 0){
					uniteLettre = 'zero';
					break;
				}else if (dizaine === 7 || dizaine ===9){
					uniteLettre = 'dix';
					break;
				}else{
				var uniteLettre = '';
				break;		
				}	
		}
	}
		// 
	if ((dizaine>1 && dizaine<8) && (unite ===1)){
		dizaineLettre+='-et';
	}	
	
	 var nombreEnLettre = centaineLettre + (centaineLettre && dizaineLettre ? '-' : '') 
	 + dizaineLettre + ((centaineLettre && uniteLettre) || (dizaineLettre && uniteLettre) ? '-' : '') + uniteLettre;

 alert(nombreEnLettre);
}

while (true) {
	var nombre = prompt('Veuillez saisir un nombre entre 0 et 999 :');

	if(nombre){
		if(!isNaN(nombre,10)){
			if(nombre >=0 && nombre<=999){
				convertirEnLettre(nombre);

			}else{
				alert('Le nombre saisis est en dehors de l\'interval!!');
			}
		}else{
			alert('Vous n\'avez pas saisis un nombre!!');
	
		}

	}else{
		break;
	}
}
