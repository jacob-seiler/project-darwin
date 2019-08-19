const options = document.querySelectorAll(".option");
let selections = [];

function updateSelections() {
	// TODO get new options from server, then update DOM
}

function getResults(data) {
	// TODO send data array to server and get results, then update DOM
}

document.addEventListener("DOMContentLoaded", () => {
	updateSelections();

	options.forEach(option => {
		option.addEventListener("click", e => {
			console.log(e.target);
			selections.push(e.target);
			updateSelections();
		});
	});
});
