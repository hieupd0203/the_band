const slides = document.querySelector(".slides");


setInterval(function () {
	const slideItems = slides.children;
    const slideActive = slides.querySelector("[data-active]");
    const currentIndex = [...slideItems].indexOf(slideActive);
    let newIndex = currentIndex + 1;
    if (newIndex > slideItems.length - 1) newIndex = 0;
    slideItems[newIndex].dataset.active = true;
    delete slideItems[currentIndex].dataset.active;
}, 5000);
