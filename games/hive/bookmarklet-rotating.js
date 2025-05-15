/* Code for a fancier bookmarklet to edit the grid at entomology.gitlab.io that
 * rotates through all twelve algebraic coordinate layouts on repeated application.
 * You can just paste it into the console (if you can get the console open)
 * but a bookmarklet is easier.  Encoded here:
 * https://chriszarate.github.io/bookmarkleter/
 *
 * m.c.de marco 2025
 */

// jshint esversion: 6

(function(){

const alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
const doubleArray = alphaArray.map(elt => elt + elt);
const allColumns = doubleArray.concat(alphaArray).concat(doubleArray); //38 is the midpoint of this array

const grid = document.querySelector("g.HexGrid");
grid.setAttribute("style","opacity:0.5;");

const state = grid.hasAttribute("data-state") ? parseInt(grid.getAttribute("data-state"),10) + 1 : 0;
grid.setAttribute("data-state",state);

function getColumn(coord) {
	return allColumns[coord + 38];
}

function mangleCoord(secondCoord, isReflected) {
	//Both reflects and plus-fills the second coordinate, as needed.
	secondCoord = isReflected ? 0 - secondCoord : secondCoord;
  return (secondCoord > 0 ? "+" : "") + secondCoord;
}

function parse(restring) {
	const regexp = /([\+-])/ig;
	const arr = restring.split(regexp).filter(x => x.length);
	const q = parseInt(arr[0] + arr[1]);
	const r = parseInt(arr[2] + arr[3]);
	const s = 0 - q - r;
	return q + "c" + r + "c" + s;
}

function rotate(arr) {
	const q = arr[0];
	const r = arr[1];
	const s = arr[2];
	return [-r,-s,-q];
}

const gridNodeList = document.querySelectorAll("g.HexGrid g.Hexagon text");

gridNodeList.forEach((elt) => {
	const restring = elt.textContent;
	if (!elt.hasAttribute("data-coords")) {
		//We only want to set and display the coordinates.
		elt.setAttribute("data-coords",parse(restring));
	} else {
		//We also want to manipulate the coordinates.
	}
	let coords = elt.getAttribute("data-coords").split("c").map(c => parseInt(c,10));
	const currentRotation = state % 6 > 0;
	const currentReflection = state % 12 >= 6;

	if (currentRotation) {
		coords = rotate(coords);
		elt.setAttribute("data-coords",coords.join("c"));
	}

	const column = getColumn(coords[0]);
	elt.textContent = column + mangleCoord(coords[1],currentReflection);
});

})();
