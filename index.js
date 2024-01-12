function calculateMax() {
	let weight = document.getElementById("weightInput").value;
	let reps = document.getElementById("repsInput").value;
	let repMax = Math.floor(weight / (1.0278 - 0.0278 * reps));
	document.getElementById("maxDisplay").innerText = "Your one rep max is: " + repMax + " lbs.";
}

document.getElementById("calculate").addEventListener("click", calculateMax);
