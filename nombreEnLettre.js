function convertirEnLettre(data){
	var centaine = parseInt(data / 100,10);

	
	switch(centaine){
		case 1 : 
			centaineLettre = 'cent';
			break;
		case 2 : 
			centaineLettre = 'deux-cent';
			break;
		case 3 : 
			centaineLettre = 'trois-cent';
			break;
		case 4 : 
			centaineLettre = 'quatre-cent';
			break;
		case 5 : 
			centaineLettre = 'cinq-cent';
			break;
		case 6 : 
			centaineLettre = 'six-cent';
			break;
		case 7 : 
			centaineLettre = 'sept-cent';
			break;
		case 8 : 
			centaineLettre = 'huit-cent';
			break;
		case 9 : 
			centaineLettre = 'neuf-cent';
			break;
		case 0 : 
			centaineLettre = '';
			break;
	}

	var moduloCentaine = data % 100;

	switch(moduloCentaine){
		case 11 : 
			var dizaineLettre = 'onze';
			var uniteLettre = ''
			break;
		case 12 : 
			var dizaineLettre = 'douze';
			var uniteLettre = ''
			break;
		case 13 : 
			var dizaineLettre = 'treize';
			var uniteLettre = ''
			break;
		case 14 : 
			var dizaineLettre = 'quatorze';
			var uniteLettre = ''
			break;
		case 15 : 
			var dizaineLettre = 'quinze';
			var uniteLettre = ''
			break;
		case 16 : 
			var dizaineLettre = 'seize';
			var uniteLettre = ''
			break;
		case 21 : 
			var dizaineLettre = 'vingt-et-un';
			var uniteLettre = ''
			break;
		case 31 : 
			var dizaineLettre = 'trente-et-un';
			var uniteLettre = ''
			break;
		case 41 : 
			var dizaineLettre = 'quarante-et-un';
			var uniteLettre = ''
			break;
		case 51 : 
			var dizaineLettre = 'cinquante-et-un';
			var uniteLettre = ''
			break;
		case 61 : 
			var dizaineLettre = 'soixante-et-un';
			var uniteLettre = ''
			break;
		case 71 : 
			var dizaineLettre = 'soixante-et-onze';
			var uniteLettre = ''
			break;
		case 72 : 
			var dizaineLettre = 'soixante-douze';
			var uniteLettre = ''
			break;
		case 73 : 
			var dizaineLettre = 'soixante-treize';
			var uniteLettre = ''
			break;	
		case 74 : 
			var dizaineLettre = 'soixante-quatorze';
			var uniteLettre = ''
			break;
		case 75 : 
			var dizaineLettre = 'soixante-quinze';
			var uniteLettre = ''
			break;
		case 76 : 
			var dizaineLettre = 'soixante-seize';
			var uniteLettre = ''
			break;	
		case 77 : 
			var dizaineLettre = 'soixante-dix-sept';
			var uniteLettre = ''
			break;
		case 78 : 
			var dizaineLettre = 'soixante-dix-huit';
			var uniteLettre = ''
			break;
		case 79 : 
			var dizaineLettre = 'soixante-dix-neuf';
			var uniteLettre = ''
			break;	
		case 91 : 
			var dizaineLettre = 'quatre-vingt-onze';
			var uniteLettre = ''
			break;
		case 92 : 
			var dizaineLettre = 'quatre-vingt-douze';
			var uniteLettre = ''
			break;
		case 93 : 
			var dizaineLettre = 'quatre-vingt-treize';
			var uniteLettre = ''
			break;	
		case 94 : 
			var dizaineLettre = 'quatre-vingt-quatorze';
			var uniteLettre = ''
			break;
		case 95 : 
			var dizaineLettre = 'quatre-vingt-quinze';
			var uniteLettre = ''
			break;
		case 96 : 
			var dizaineLettre = 'quatre-vingt-seize';
			var uniteLettre = ''
			break;	
		case 97 : 
			var dizaineLettre = 'quatre-vingt-dix-sept';
			var uniteLettre = ''
			break;
		case 98 : 
			var dizaineLettre = 'quatre-vingt-dix-huit';
			var uniteLettre = ''
			break;
		case 99 : 
			var dizaineLettre = 'quatre-vingt-dix-neuf';
			var uniteLettre = ''
			break;						
		default : 
			var dizaine = parseInt(moduloCentaine/10);
			switch(dizaine){
				case 1 : 
					var dizaineLettre = 'dix';
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
					var dizaineLettre = 'soixante-dix';
					break;
				case 8 : 
					var dizaineLettre = 'quatre-vingt';
					break;
				case 9 : 
					var dizaineLettre = 'quatre-vingt-dix';
					break;
				case 0 : 
					var dizaineLettre = '';
					break;				
			}
			var unite = moduloCentaine%10;
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
					var uniteLettre = '';
					break;	

			}
			
			
	}
	 var nombreEnLettre = centaineLettre + (centaineLettre && dizaineLettre ? '-' : '') 
	 + dizaineLettre + (dizaineLettre && uniteLettre ? '-' : '') + uniteLettre;
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



