"use strict"

document.addEventListener("DOMContentLoaded", (e) => {

	let container = document.querySelector("#gameGrid")
	let updGridBtn = document.querySelector("#updateGrid")
	const gridCountDefault = 32
	const gridCountMin = 4
	const gridCountMax = 100


	function createGrid(gridCount) {

		// check if grid count is correct
		if (gridCount < gridCountMin || gridCount > gridCountMax) {
			console.log(`Entered number is out of the safe range (${gridCountMin}-${gridCountMax}). Returned to default value`);
			gridCount = gridCountDefault;

			// update value in the input
			document.querySelector("#gridCount").value = gridCountDefault
		}

		// fill container with horizontal and vertical divs
		// create gridCount rows
		// fill each row with gridCount divs
		// add event listener to each div inside row to add class to self after hover

		for (let i = 0; i < gridCount; i++) {

			let rowEl = document.createElement("div")
			rowEl.classList.add('row')

			for (let k = 0; k < gridCount; k++) {
				let pixel = document.createElement("div")
				pixel.addEventListener("mouseover", () => {
					pixel.classList.add("active")
				})
				rowEl.appendChild(pixel)
			}

			container.appendChild(rowEl)
		}

	}
	createGrid(gridCountDefault)


	// take value from input and run function createGrid with it
	function updateGrid() {

		// get current input value
		let gridCount = document.querySelector("#gridCount").value

		// delete old grid
		container.innerHTML = ""

		// create new grid 
		createGrid(gridCount)
	}

	updGridBtn.addEventListener("click", updateGrid)
})

