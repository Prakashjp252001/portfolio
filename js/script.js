let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});



function copyToClickBoard(){
    var content = document.getElementById('number').innerHTML;
    navigator.clipboard.writeText(content)
    .then(() => {
    console.log("copied")
    })
    .catch(err => {
    console.log("somthing went wrong");
    })
    }
    // project start

    document.addEventListener("DOMContentLoaded", function () {
        var parent = document.querySelector(".myBtnContainer");
        parent.addEventListener("click", function (event) {
            // Change active button class
            // Array.from(parent.children).forEach(function (currentValue) {
            //     currentValue.classList.remove("text-white");
            // });
            document
                .getElementsByClassName("filterButton text-white")[0]
                .classList.remove("text-white");
    
            event.target.classList.add("text-white");
    
            // Set slide filter by class name
            Array.from(document.querySelectorAll(".swiper-slide")).forEach(
                function (currentValue) {
                    if (
                        (event.target.innerText.toLowerCase() ||
                            event.target.textContent.toLowerCase()) == "all"
                    ) {
                        currentValue.classList.remove("hidden");
                    } else {
                        if (
                            !currentValue.classList.contains(
                                event.target.innerText.toLowerCase() ||
                                    event.target.textContent.toLowerCase()
                            )
                        ) {
                            currentValue.classList.add("hidden");
                            // console.log(allSlides)
                        } else {
                            currentValue.classList.remove("hidden");
                        }
                    }
                    mySwiper.update();
                    mySwiper.updateSize();
                    mySwiper.updateSlides();
                    mySwiper.updateSlidesClasses();
                    mySwiper.slideTo(0);
                }
            );
        });
    });
    
    var mySwiper = new Swiper(".swiper-container", {
        // loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
            // 1280: {
            //     slidesPerView: 4,
            //     spaceBetween: 20
            // }
        }
    });

    


    var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}