
(function() {
	let textButton = document.querySelector(".text-button")
	let button = document.querySelector(".blink-but");

	blinkEffect(textButton);

	button.addEventListener("click", showModal);

	function blinkEffect(el) {
		setInterval(() => {
			el.classList.toggle("blink");
		}, 800);
	}

	function showModal() {
		let modal = document.querySelector(".modal");
		let cross = document.querySelector(".cross");

		modal.classList.add("display");
		document.querySelector(".wrapper").classList.add("overflow");
		cross.addEventListener("click", closeModal);
		modal.addEventListener("click", e => {
			if (e.target !== modal) return;
			closeModal();
		});

		function closeModal() {
			document.querySelector(".wrapper").classList.remove("overflow");
			document.querySelector(".modal").classList.remove("display");
		}
	}

})();
