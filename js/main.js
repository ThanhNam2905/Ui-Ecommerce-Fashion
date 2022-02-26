let searchForm = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-btn");
searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
};

let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
};

window.onscroll = () => {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
};

// Swiper JS
var swiper = new Swiper(".home-slider", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        
      },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
          },
      },
});

// Scroll to top
let scrollTopBtn = document.querySelector("#scroll-top i");
scrollTopBtn.onclick = () => {
    window.scrollTo( {
        top: 0,
        behavior: "smooth"
    })
};
window.onscroll = () => {
    if(scrollY > 300) {
        scrollTopBtn.classList.add("active");
    }
    else {
        scrollTopBtn.classList.remove("active");
    }
}

// Loading Page
let pageLoading = document.querySelector("#page-loading");

function loading() {
    pageLoading.classList.add("active");
}
function fadeOut() {
    setInterval(loading, 2500);
}
window.onload = fadeOut();



// Filter Products 
let filterBtn = document.querySelectorAll(".products .filter-button .buttons");
let filterItem = document.querySelectorAll(".products .box-container .box");

filterBtn.forEach(button => {
    
    button.onclick = () => {
        filterBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        let dataItem = button.getAttribute("data-filter");
        filterItem.forEach(item => {

            item.classList.add("hide");
            item.classList.remove("active");

            if(item.getAttribute("data-item") === dataItem || dataItem === "all") {
                item.classList.remove("hide");
                item.classList.add("active");
            }
        })
    }
})