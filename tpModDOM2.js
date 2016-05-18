var mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'divTP2');

var textNodes = [
	document.createTextNode('Langages basés sur ECMAScript :'),
	document.createTextNode('JavaScript'),
	document.createTextNode('JScript'),
	document.createTextNode('ActionScript'),
	document.createTextNode('Ex4')
];

var p = document.createElement('p');
p.appendChild(textNodes[0]);

var table = document.createElement('ul');

var lignes = [];
for (var i=0; i < 4; i++){
	var li = document.createElement('li');
	lignes.push(li);
}

for (var i=0; i<4; i++){
	lignes[i].appendChild(textNodes[i+1]);
}

for (var i=0; i<4; i++){
	table.appendChild(lignes[i]);
}

mainDiv.appendChild(p);
mainDiv.appendChild(table);

document.body.appendChild(mainDiv);
