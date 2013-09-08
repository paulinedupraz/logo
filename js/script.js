$(document).ready(function () {

	var gridX = 24,
		gridY = 16,

	var color1 = '#83346B';
	var color2 = '#5A2961';

	/**
	 * Return a number that respect the grid
	 * @param  {String} axis
	 * @param  {Number} num
	
	 * @return {Number}
	 */
	function getGrig(axis, num) {

		var result = 0;

		switch (axis.toUpperCase()) {

		case 'X':
			result = gridX * num;
			return result;

		case 'Y':
			result = gridY * num;
			return result;
		}
	}


	/**
	 * [Create a polygon path with the "M" and "z" command]
	 * @param  {Number} points
	 * @return {Array}
	 */
	function polygonPath(points) {

		if (!points || points.length < 2) {
			return [];
		}

		var path = []; //will use path object type
			path.push(['m', points[0], points[1]]);

		for (var i = 2; i < points.length; i += 2) {        
			path.push([points[i], points[i+1]]);
		}

		path.push(['z']);
		return path;
	}

	var canvas = $('#canvas')[0];
	var paper = new Raphael(canvas, getGrig('x', 6), getGrig('y', 11));



	/**
	 * Set of all triangles needed to draw the logo
	 * @type {Array}
	 */

	var triangles = paper.set();
		triangles.push(
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 0), getGrig('x', 4), getGrig('y', 4), getGrig('x', 0), getGrig('y', 8), getGrig('x', 0), getGrig('y', 6), getGrig('x', 2), getGrig('y', 4), getGrig('x', 0), getGrig('y', 2)])),
				paper.path(polygonPath([getGrig('x', 6), getGrig('y', 3), getGrig('x', 2), getGrig('y', 7), getGrig('x', 6), getGrig('y', 11), getGrig('x', 6), getGrig('y', 9), getGrig('x', 4), getGrig('y', 7), getGrig('x', 6), getGrig('y', 5)])),

				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 0), getGrig('x', 1), getGrig('y', 1), getGrig('x', 0), getGrig('y', 1)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 1), getGrig('x', 1), getGrig('y', 1), getGrig('x', 0), getGrig('y', 2)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 2), getGrig('x', 1), getGrig('y', 1), getGrig('x', 2), getGrig('y', 2)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 2), getGrig('x', 2), getGrig('y', 2), getGrig('x', 1), getGrig('y', 3)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 3), getGrig('x', 2), getGrig('y', 2), getGrig('x', 3), getGrig('y', 3)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 3), getGrig('x', 3), getGrig('y', 3), getGrig('x', 2), getGrig('y', 4)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 4), getGrig('x', 3), getGrig('y', 3), getGrig('x', 4), getGrig('y', 4)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 4), getGrig('x', 4), getGrig('y', 4), getGrig('x', 3), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 5), getGrig('x', 2), getGrig('y', 4), getGrig('x', 3), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 5), getGrig('x', 3), getGrig('y', 5), getGrig('x', 2), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 6), getGrig('x', 1), getGrig('y', 5), getGrig('x', 2), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 6), getGrig('x', 2), getGrig('y', 6), getGrig('x', 1), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 6), getGrig('x', 1), getGrig('y', 7), getGrig('x', 0), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 7), getGrig('x', 1), getGrig('y', 7), getGrig('x', 0), getGrig('y', 8)])),

				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 4), getGrig('x', 6), getGrig('y', 4), getGrig('x', 6), getGrig('y', 3)])),
				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 4), getGrig('x', 6), getGrig('y', 4), getGrig('x', 6), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 5), getGrig('x', 5), getGrig('y', 4), getGrig('x', 6), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 5), getGrig('x', 6), getGrig('y', 5), getGrig('x', 5), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 6), getGrig('x', 4), getGrig('y', 5), getGrig('x', 5), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 6), getGrig('x', 5), getGrig('y', 6), getGrig('x', 4), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 7), getGrig('x', 3), getGrig('y', 6), getGrig('x', 4), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 7), getGrig('x', 4), getGrig('y', 7), getGrig('x', 3), getGrig('y', 8)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 8), getGrig('x', 4), getGrig('y', 7), getGrig('x', 5), getGrig('y', 8)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 8), getGrig('x', 5), getGrig('y', 8), getGrig('x', 4), getGrig('y', 9)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 9), getGrig('x', 5), getGrig('y', 8), getGrig('x', 6), getGrig('y', 9)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 9), getGrig('x', 6), getGrig('y', 9), getGrig('x', 5), getGrig('y', 10)])),
				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 10), getGrig('x', 6), getGrig('y', 9), getGrig('x', 6), getGrig('y', 10)])),
				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 10), getGrig('x', 6), getGrig('y', 10), getGrig('x', 6), getGrig('y', 11)]))
		).attr({
			'fill': '#ffffff',
			'stroke': '#ffffff',
			'stroke-width': 0
		});
		
});
