var mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'divTP2');

var languages = [{
    t: 'JavaScript',
    d: 'JavaScript est un langage de programmation de scripts principalement\
    utilisé dans les pages web interactives mais aussi coté serveur.'
}, {
    t: 'JScript',
    d: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
}, {
    t: 'ActionScript',
    d: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes\
     (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'
}, {
    t: 'EX4',
    d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
}];


var p = document.createElement('p');
var pText = document.createTextNode('Langages basés sur ECMAScript :');
p.appendChild(pText);

var dl = document.createElement('dl');
var dt, dd, dtText, ddText;

for (var i=0; i < 4; i++){
	dt = document.createElement('dt');
	dtText = document.createTextNode(languages[i].t);
	dt.appendChild(dtText);

	dd = document.createElement('dd');
	ddText = document.createTextNode(languages[i].d);
	dd.appendChild(ddText);

	dl.appendChild(dt);
	dl.appendChild(dd);
}



mainDiv.appendChild(p);
mainDiv.appendChild(dl);

document.body.appendChild(mainDiv);
