$(document).ready(function(){

	var gridX = 23;
	var gridY = 16;

	/**
	 * Return a number that respect the grid
	 * @param  {String} axis
	 * @param  {Number} num
	 * @return {Number}
	 */
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


	/**
	 * [Create a polygon path with the "M" and "z" command]
	 * @param  {Number} points
	 * @return {Array}
	 */
	function polygonPath(points) {
	
		if(!points||points.length < 2) {
			return []; 
		}

		var path = []; //will use path object type
			path.push(['m',points[0], points[1]]);
		
		for (var i = 2; i < points.length; i+=2) {		
			path.push([points[i], points[i+1]]);
		}

		path.push(['z']);
		return path;
	}

	var canvas = $('#canvas')[0];
 
	var paper = new Raphael(canvas, 500, 500);
	var paper = new Raphael(canvas, getGrig('x', 6), getGrig('y', 11));

	


});