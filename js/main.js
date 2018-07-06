/*var createButton = document.getElementById('create');
var block = document.getElementById('block');
var elementName, width, height, borderWidth, color, elem;
createButton.onclick = function() {
	elementName = document.getElementById('element').value;
	width = document.getElementById('width').value;
	height = document.getElementById('height').value;
	borderWidth = document.getElementById('border').value;
	color = document.getElementById('color').value;
	elem = document.createElement(elementName); //'div', 'p'
	elem.style.width = width + 'px';
	elem.style.height = height + 'px';
	elem.style.border = borderWidth + 'px black solid';
	elem.style.backgroundColor = color;
	block.appendChild(elem);
};*/
/*var block = document.getElementById('block');
var flag = true;
var up = 0;
var left = 0;
var int;

block.onclick = function() {
	if (flag) {
		int = setInterval(function() {
			up += 10;
			block.style.top = up + 'px';
			left += 10;
			block.style.left = left + 'px';
			console.log(block.style.top);
			console.log(block.style.left);
			console.log('')
		}, 100);
		flag = false;
	} else {
		clearInterval(int);
		flag = true;
	}
};*/

//document.addEventListener('DOMContentLoaded', function(){})
//jQuery()
//$(function(){})

$(document).ready(function() {
	console.log('loaded');
	$('h1').css({ color: 'red' });
	$('#block').css({
		boxShadow: '10px 10px 5px grey',
		top: '500px'
	});
	$('.listItem').css({ 'background-color': 'lightgreen' });
	// $('li') !== document.getElementsByTagName('li')
	$('li:first-child').css({ 'text-transform': 'uppercase' });
	$('li:eq(5)').css('border', '1px black solid');
	$('li')
		.eq(5)
		.css('border', '1px black solid');

	$('h1').attr('id', 'header');
	console.log($('h1').attr('id'));
	$('a').removeAttr('href');
	$('#block').attr({ class: 'header', name: 'asd' });

	$('li:first-child').addClass('listItem');
	$('#block').removeClass('header');
	console.log($('li:first-child').hasClass('listItem'));
});
