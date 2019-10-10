/*
js */
var images=['1.png','2.jpg','3.jpg','4.jpg'];
var i = images.length;
var current =0;

function nextImage() {
	console.log('c',i,current);
	if (current<i-1) {
		current+=1;
		console.log('c',i,current);
	}
	else {
		current=0;
	}
	var imageHolder = document.getElementById('imageHolder');
	imageHolder.innerHTML = "<img src="+images[current]+">";
}

function prevImage() {
	console.log('c',i,current);
	if (current<i && current>0) {
		current-=1;
		console.log('c',i,current);
	}
	else {
		current=i-1;
	}
	var imageHolder = document.getElementById('imageHolder');
	imageHolder.innerHTML = "<img src="+images[current]+">";
}