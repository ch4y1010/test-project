let form = document.getElementById("my-form");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	let email = document.getElementById("email").value;

	console.log("Email: " + email);
});