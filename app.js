//Sticky navbar
var height= $(".window-container1").height();

$(window).scroll(function () {
    if($(this).scrollTop() > height) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
});

//to change image in carousel
const one= document.querySelector(".one");
const two= document.querySelector(".two");
const three= document.querySelector(".three");
const carousel= document.querySelector(".carousel");

one.addEventListener("click", function () {
    carousel.src="carousel1.png";
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
});

two.addEventListener("click", function () {
    carousel.src="carousel2.png";
    two.classList.add("active");
    one.classList.remove("active");
    three.classList.remove("active");
});

three.addEventListener("click", function () {
    carousel.src="carousel3.png";
    three.classList.add("active");
    two.classList.remove("active");
    one.classList.remove("active");
});