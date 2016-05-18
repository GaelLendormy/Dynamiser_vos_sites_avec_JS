var mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'divTP4');

var formulaire = document.createElement('form');
formulaire.enctype = 'multipart/form-data';
formulaire.method = 'post';
formulaire.action = 'upload.php';

var fieldset = document.createElement('fieldset');

var legend = document.createElement('legend'),
	legendText = document.createTextNode('Uploader une image');

var divForm = document.createElement('div');
divForm.style = 'text-align: center';

var labelForm = document.createElement('label'),
	labelText = document.createTextNode('Image à uploader :');
labelForm.setAttribute('for', 'inputUpload');

var inputFile = document.createElement('input');
inputFile.type = 'file';
inputFile.name = 'inputUpload';
inputFile.id = 'inputUpload';

var br = document.createElement('br');

var inputSubmit = document.createElement('input');
inputSubmit.type = 'submit';
inputSubmit.value = 'Envoyer';

mainDiv.appendChild(formulaire);
formulaire.appendChild(fieldset);
fieldset.appendChild(legend);
legend.appendChild(legendText);
fieldset.appendChild(divForm);
divForm.appendChild(labelForm);
labelForm.appendChild(labelText);
divForm.appendChild(inputFile);
divForm.appendChild(br);
divForm.appendChild(br.cloneNode(false));
divForm.appendChild(inputSubmit);

document.body.appendChild(mainDiv);


