const accordionCard = () => {
	var acc = document.getElementsByClassName("accordion__header");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			var active = document.querySelector(".active");
			if (active && active !== this) {
				active.classList.remove("active");
				// active.nextElementSibling.style.display = "none";
			}
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
}

export {
	accordionCard
}
