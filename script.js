function buttonClick() {
	alert("Voce clicou no botao");
}

const form = document.getElementById("new-form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const nome = document.getElementById("name").value;
	console.log("Nome: " + nome);
});
