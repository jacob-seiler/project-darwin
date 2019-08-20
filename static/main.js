// Variables
const choiceAmount = 2;
const minResponses = 3;

const buttonResults = document.querySelector(".button-results");
let selections = [];

function getRandomData(dataAmount) {
	// TODO use dataAmount to select the amount to fetch

	let totalData = [];

	fetch("/data")
		.then(resp => resp.json())
		.then(function(data) {
			totalData.push(data);
		});

	return totalData;
}

function updateOptions(options) {
	// TODO remove on click event until new stuff comes in
	// TODO get new options from server, then update DOM

	if (selections.length >= minResponses) {
		buttonResults.classList.remove("hidden");
	}

	let data = getRandomData(options.length);

	for (let i = 0; i < options.length; i++) {
		let element = options[i].children[0];
		element.innerHTML = "";

		// TODO get actual data
		let title = document.createElement("H2");
		title.textContent = data.title; // TODO use array

		element.appendChild(title);

		for (let j = 0; j < data.notes.length; j++) {
			let sub = document.createElement("P");
			sub.textContent = data.notes[j]; // TODO data will be an array
			element.appendChild(sub);
		}

		// TODO set background-image
	}
}

function getResults() {
	// TODO send data array to server and get results, then update DOM
	// TODO error from server if selections is less than 3
}

function generateOptions() {
	const choices = document.querySelector(".choices");

	for (let i = 0; i < choiceAmount; i++) {
		let outer = document.createElement("DIV");
		outer.classList.add("option");
		outer.classList.add("option-" + (i + 1));
		let inner = document.createElement("DIV");
		inner.classList.add("option-content");
		outer.appendChild(inner);
		choices.appendChild(outer);
	}

	return document.querySelectorAll(".option");
}

document.addEventListener("DOMContentLoaded", () => {
	const options = generateOptions();
	updateOptions(options);

	options.forEach(option => {
		option.addEventListener("click", e => {
			console.log(e.target);
			selections.push(e.target);
			updateOptions(options);
		});
	});
});
