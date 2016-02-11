var nicks = []; 
var nick;

while (true) {
    nick = prompt('Entrez un prénom :');
  
    if (nick) {
        nicks.push(nick);// Ajoute le nouveau prénom ainsi qu'une espace juste après
    } else {
        break; // On quitte la boucle
    }
}

if(nicks){
alert(nicks); // Affiche les prénoms à la suite
} else{
	alert('Vous n\'avez entrez aucun prénom');
}