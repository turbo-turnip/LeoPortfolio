const images = document.querySelectorAll(".project img");

for (let i = 0; i < images.length; i++) {
	images[i].addEventListener("click", (e) => {
		const targetImage = e.target;
		const link = targetImage.getAttribute('data-url');
		document.location.href=link;
	});
}