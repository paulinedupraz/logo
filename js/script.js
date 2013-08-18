$(document).ready(function(){

	var gridX = 23;
	var gridY = 16;

	var color1 = '#83346B';
	var color2 = '#5A2961';

	
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
	var paper = new Raphael(canvas, getGrig('x', 6), getGrig('y', 11));


	// first triangle

	var triangle = paper.path(polygonPath([
			getGrig('x', 0), 
			getGrig('x', 0),
			getGrig('x', 1), 
			getGrig('y', 1), 
			getGrig('x', 0), 
			getGrig('y', 1)]
		));
		triangle.attr("fill", color1);
		triangle.attr("stroke", color1);

	var triangle2 = paper.path(polygonPath([
			getGrig('x', 0), 
			getGrig('y', 1), // + 1
			getGrig('x', 1), 
			getGrig('y', 1), 
			getGrig('x', 0), 
			getGrig('y', 2)] // + 1
		));
		triangle2.attr("fill", color2);
		triangle2.attr("stroke", color2);

	var triangle3 = paper.path(polygonPath([
			getGrig('x', 0), 
			getGrig('y', 2), // + 1
			getGrig('x', 1), 
			getGrig('y', 1), 
			getGrig('x', 2), // + 1
			getGrig('y', 2)] 
		));
		triangle3.attr("fill", color1);
		triangle3.attr("stroke", color1);

	var triangle4 = paper.path(polygonPath([
			getGrig('x', 0), 
			getGrig('y', 2), 
			getGrig('x', 2), // + 1
			getGrig('y', 2), // + 1
			getGrig('x', 1), // - 1
			getGrig('y', 3)] // + 1
		));
		triangle4.attr("fill", color2);
		triangle4.attr("stroke", color2);

	var triangle5 = paper.path(polygonPath([
			getGrig('x', 1), // + 1 
			getGrig('y', 3), // + 1
			getGrig('x', 2),
			getGrig('y', 2),
			getGrig('x', 3), // + 2
			getGrig('y', 3)] // + 1
		));
		triangle5.attr("fill", color1);
		triangle5.attr("stroke", color1);

	var triangle6 = paper.path(polygonPath([
			getGrig('x', 1), 
			getGrig('y', 3), 
			getGrig('x', 3), // + 1
			getGrig('y', 3), // + 1
			getGrig('x', 2), // - 1
			getGrig('y', 4)] // + 1
		));
		triangle6.attr("fill", color2);
		triangle6.attr("stroke", color2);

	var triangle7 = paper.path(polygonPath([
			getGrig('x', 2), // + 1 
			getGrig('y', 4), // + 1
			getGrig('x', 3),
			getGrig('y', 3),
			getGrig('x', 4), // + 2
			getGrig('y', 4)]
		));
		triangle7.attr("fill", color1);
		triangle7.attr("stroke", color1);

	var triangle8 = paper.path(polygonPath([
			getGrig('x', 2), 
			getGrig('y', 4), 
			getGrig('x', 4), // + 1
			getGrig('y', 4), // + 1
			getGrig('x', 3), // - 1
			getGrig('y', 5)] // + 1
		));
		triangle8.attr("fill", color2);
		triangle8.attr("stroke", color2);

	var triangle9 = paper.path(polygonPath([
			getGrig('x', 1),
			getGrig('y', 5),
			getGrig('x', 2),
			getGrig('y', 4),
			getGrig('x', 3),
			getGrig('y', 5)]
		));
		triangle9.attr("fill", color1);
		triangle9.attr("stroke", color1);

	var triangle10 = paper.path(polygonPath([
			getGrig('x', 1),
			getGrig('y', 5),
			getGrig('x', 3),
			getGrig('y', 5),
			getGrig('x', 2),
			getGrig('y', 6)]
		));
		triangle10.attr("fill", color2);
		triangle10.attr("stroke", color2);

	var triangle11 = paper.path(polygonPath([
			getGrig('x', 0),
			getGrig('y', 6),
			getGrig('x', 1),
			getGrig('y', 5),
			getGrig('x', 2),
			getGrig('y', 6)]
		));
		triangle11.attr("fill", color1);
		triangle11.attr("stroke", color1);

	var triangle12 = paper.path(polygonPath([
			getGrig('x', 0),
			getGrig('y', 6),
			getGrig('x', 2),
			getGrig('y', 6),
			getGrig('x', 1),
			getGrig('y', 7)]
		));
		triangle12.attr("fill", color2);
		triangle12.attr("stroke", color2);

	var triangle13 = paper.path(polygonPath([
			getGrig('x', 0),
			getGrig('y', 6),
			getGrig('x', 1),
			getGrig('y', 7),
			getGrig('x', 0),
			getGrig('y', 7)]
		));
		triangle13.attr("fill", color1);
		triangle13.attr("stroke", color1);

	var triangle14 = paper.path(polygonPath([
			getGrig('x', 0),
			getGrig('y', 7),
			getGrig('x', 1),
			getGrig('y', 7),
			getGrig('x', 0),
			getGrig('y', 8)]
		));
		triangle14.attr("fill", color2);
		triangle14.attr("stroke", color2);

	// second triangle	

	var triangle15 = paper.path(polygonPath([
			getGrig('x', 5),
			getGrig('y', 4),
			getGrig('x', 6),
			getGrig('y', 4),
			getGrig('x', 6),
			getGrig('y', 3)]
		));
		triangle15.attr("fill", color1);
		triangle15.attr("stroke", color1);

	var triangle16 = paper.path(polygonPath([
			getGrig('x', 5),
			getGrig('y', 4),
			getGrig('x', 6),
			getGrig('y', 4),
			getGrig('x', 6),
			getGrig('y', 5)]
		));
		triangle16.attr("fill", color2);
		triangle16.attr("stroke", color2);

	var triangle16 = paper.path(polygonPath([
			getGrig('x', 4),
			getGrig('y', 5),
			getGrig('x', 5),
			getGrig('y', 4),
			getGrig('x', 6),
			getGrig('y', 5)]
		));
		triangle16.attr("fill", color1);
		triangle16.attr("stroke", color1);

	var triangle17 = paper.path(polygonPath([
			getGrig('x', 4),
			getGrig('y', 5),
			getGrig('x', 6),
			getGrig('y', 5),
			getGrig('x', 5),
			getGrig('y', 6)]
		));
		triangle17.attr("fill", color2);
		triangle17.attr("stroke", color2);

	var triangle18 = paper.path(polygonPath([
			getGrig('x', 3),
			getGrig('y', 6),
			getGrig('x', 4),
			getGrig('y', 5),
			getGrig('x', 5),
			getGrig('y', 6)]
		));
		triangle18.attr("fill", color1);
		triangle18.attr("stroke", color1);

	var triangle19 = paper.path(polygonPath([
			getGrig('x', 3),
			getGrig('y', 6),
			getGrig('x', 5),
			getGrig('y', 6),
			getGrig('x', 4),
			getGrig('y', 7)]
		));
		triangle19.attr("fill", color2);
		triangle19.attr("stroke", color2);

	var triangle20 = paper.path(polygonPath([
			getGrig('x', 2),
			getGrig('y', 7),
			getGrig('x', 3),
			getGrig('y', 6),
			getGrig('x', 4),
			getGrig('y', 7)]
		));
		triangle20.attr("fill", color1);
		triangle20.attr("stroke", color1);

	var triangle21 = paper.path(polygonPath([
			getGrig('x', 2),
			getGrig('y', 7),
			getGrig('x', 4),
			getGrig('y', 7),
			getGrig('x', 3),
			getGrig('y', 8)]
		));
		triangle21.attr("fill", color2);
		triangle21.attr("stroke", color2);

	var triangle22 = paper.path(polygonPath([
			getGrig('x', 3),
			getGrig('y', 8),
			getGrig('x', 4),
			getGrig('y', 7),
			getGrig('x', 5),
			getGrig('y', 8)]
		));
		triangle22.attr("fill", color1);
		triangle22.attr("stroke", color1);

	var triangle23 = paper.path(polygonPath([
			getGrig('x', 3),
			getGrig('y', 8),
			getGrig('x', 5),
			getGrig('y', 8),
			getGrig('x', 4),
			getGrig('y', 9)]
		));
		triangle23.attr("fill", color2);
		triangle23.attr("stroke", color2);

	var triangle24 = paper.path(polygonPath([
			getGrig('x', 4),
			getGrig('y', 9),
			getGrig('x', 5),
			getGrig('y', 8),
			getGrig('x', 6),
			getGrig('y', 9)]
		));
		triangle24.attr("fill", color1);
		triangle24.attr("stroke", color1);

	var triangle25 = paper.path(polygonPath([
			getGrig('x', 4),
			getGrig('y', 9),
			getGrig('x', 6),
			getGrig('y', 9),
			getGrig('x', 5),
			getGrig('y', 10)]
		));
		triangle25.attr("fill", color2);
		triangle25.attr("stroke", color2);

	var triangle26 = paper.path(polygonPath([
			getGrig('x', 5),
			getGrig('y', 10),
			getGrig('x', 6),
			getGrig('y', 9),
			getGrig('x', 6),
			getGrig('y', 10)]
		));
		triangle26.attr("fill", color1);
		triangle26.attr("stroke", color1);

	var triangle27 = paper.path(polygonPath([
			getGrig('x', 5),
			getGrig('y', 10),
			getGrig('x', 6),
			getGrig('y', 10),
			getGrig('x', 6),
			getGrig('y', 11)]
		));
		triangle27.attr("fill", color2);
		triangle27.attr("stroke", color2);

});
