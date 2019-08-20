// Variables
const choiceAmount = 2;
const minResponses = 3;

const buttonResults = document.querySelector(".button-results");
let selections = [];

function updateOptions(options) {
	// TODO remove on click event until new stuff comes in
	// TODO get new options from server, then update DOM

	if (selections.length >= minResponses) {
		buttonResults.classList.remove("hidden");
	}

	/*
	<div class="option option-1" style="background-image: url('temp-1.png')">
		<div class="option-content">
			<h2>First Last</h2>
			<p>Computing</p>
			<p>3 years</p>
		</div>
    </div>;
    */

	for (let i = 0; i < options.length; i++) {
		let element = options[i].children[0];
		element.innerHTML = "";

		let title = document.createElement("H2");
		title.textContent = "First Last";

		let sub1 = document.createElement("P");
		sub1.textContent = "Computing";

		let sub2 = document.createElement("P");
		sub2.textContent = "3 years";

		element.appendChild(title);
		element.appendChild(sub1);
		element.appendChild(sub2);
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
