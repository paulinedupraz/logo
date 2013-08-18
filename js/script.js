$(document).ready(function(){

	var gridX = 15;
	var gridY = 10.4;

	function getGrig(axis, num){

		var result = 0;

		switch(axis.toUpperCase()) {

			case 'X' :
				result = gridX*num;
				return result;
				break;

			case 'Y' :
				result = gridY*num;
				return result;
				break;
		}
		
	}

	var canvas = $('#canvas')[0];
 
	var paper = new Raphael(canvas, 500, 500);
	var paper = new Raphael(canvas, getGrig('x', 6), getGrig('y', 11));

	


});