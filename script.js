var images=[];
images=['1.png','2.jpg','3.jpg','4.jpg'];
var i = images.length;
var current =0;
var imageHolder = document.getElementById('imageHolder');


function nextImage() {
	console.log('c',i,current);
	if (current<i-1) {
		current+=1;
		console.log('c',i,current);
	}
	else {
		current=0;
	}
	console.log('im',imageHolder);
	imageHolder.innerHTML = "<img src="+images[i]+">";
	console.log('im',imageHolder);
}

function prevImage() {
	alert('prev clicked');
}
