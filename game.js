"use strict"

document.addEventListener("DOMContentLoaded", (e) => {

	let container = document.querySelector(".container")


	// create square grid 64x64 (max is 100)


	// divs fill container


	function createGrid(gridCount) {

		// fill container with horizontal and vertical divs
		// create rows with gridCount squares

		// I think it overwrides same element because it bond to the variable
		// how to create element and give it a class without assigning the var??


		// var 1 : clone the same element 16 times
		// var 2 : create array, copy element 16 times, past to the dom
		// var 3 : create 16 divs, give them row classes, create 16 divs inside each row class

		let rowEl = document.createElement("div")
		rowEl.classList.add('row')

		let cloned = rowEl.cloneNode()
		console.log(cloned);


		let pixelEl = document.createElement("div")

		for (let i = 0; i < gridCount; i++) {
			console.log("hello");

			container.appendChild(pixelEl)
			container.appendChild(document.createElement("div"))
		}

		// for (let i = 0; i < gridCount; i++) {
		// 	container.appendChild(document.createElement("div"))
		// }
	}
	createGrid(16)
})

