const options = document.querySelectorAll("option");
let selections = [];

function updateSelections() {
	// TODO get new options from server, then update DOM
}

function getResults(data) {
	// TODO send data array to server and get results, then update DOM
}

document.addEventListener("DOMContentLoaded", () => {
	updateSelections();

	options.addEventListener("click", e => {
		selections.push(e.target);
		updateSelections();
	});
});
