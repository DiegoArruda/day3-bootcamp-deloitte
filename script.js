let count = 0;
const button = document.getElementById("custom-button");
button.addEventListener("click", function () {
	count += 1;
	button.textContent = "Cliques: " + count;
});

const form = document.getElementById("new-form");
form.addEventListener("submit", function (event) {
	event.preventDefault();
	const nome = document.getElementById("name").value;
	console.log("Nome: " + nome);
	document.getElementById("name").value = "";
});
