/* code for a bookmarklet to edit the grid at entomology.gitlab.io
 * You can just paste it into the console (if you can get it open)
 * but a bookmarklet is easier.  Compressed here:
 * https://chriszarate.github.io/bookmarkleter/
 *
 * m.c.de marco 2025
 */

// jshint esversion: 6

const regexp = /([\+-])/ig;
const selector = "g.HexGrid g.Hexagon text";
const alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
const doubleArray = alphaArray.map(elt => elt + elt);
const allColumns = doubleArray.concat(alphaArray).concat(doubleArray); //38 is the midpoint of this array

document.querySelector("g.HexGrid").setAttribute("style","opacity:0.5;");

const gridNodeList = document.querySelectorAll(selector);
gridNodeList.forEach((elt) => {
	const restring = elt.textContent;
	const arr = restring.split(regexp).filter(x => x.length);
	if (arr.length == 4) {
		const column = allColumns[parseInt(arr[0] + arr[1]) + 38];
		elt.textContent = column + (arr[2] == "+" ? "+" : "-")  + arr[3];
	}
});
