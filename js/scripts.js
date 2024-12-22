(function ($) {
'use strict';
$('.menu-item-has-children .submenu-opener').on("click", function(e){
  $(this).parent().toggleClass('nav_open');
  $(this).siblings('ul').slideToggle();
  e.stopPropagation();
  e.preventDefault();
});

// Video Popup
$(".openVideo").magnificPopup({
  type: "iframe",
  mainClass: "mfp-with-zoom",
  removalDelay: 200,
});

$('footer h6.toggle').on("click", function (e) {
  $(this).siblings('.collapse-div').slideToggle(); // Toggle visibility of sibling
  e.stopPropagation(); // Stop event propagation
  e.preventDefault();  // Prevent default action (if <h6> is a link)
});

// Isotope Filtering
var faqIso = $(".all-faqs").isotope({
  itemSelector: ".faq-item",
  layoutMode: "fitRows",
});

var filterWrap = $(".filter-wrapper").isotope({
    filterItem: ".filter-item",
    layoutMode: "fitRows",
  });

$("a.faqselector").on("click", function (e) {
    e.preventDefault();
    var value = $(this).attr("data-name");
    $("a.faqselector").removeClass("active");
    $(this).addClass("active");
    faqIso.isotope({
        filter: value,
    });
    filterWrap.isotope({
        filter: value,
    });
});


})(jQuery);



var bannerSwiper = new Swiper('.banner-carousel', {


  autoplay: {
    delay: 100000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".actions-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.actions-button-next',
    prevEl: '.actions-button-prev',
  },
});


var swiper = new Swiper('.news-cards-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var partnersSwiper = new Swiper('.website-partners', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {

    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

});

var testimonialSwiper = new Swiper('.testimonial-carousel', {
  loop: true,

  pagination: {
    el: ".actions-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.actions-button-next',
    prevEl: '.actions-button-prev',
  },

});

var eventSwiper = new Swiper('.event-carousel', {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: '.actions-button-next',
    prevEl: '.actions-button-prev',
  },

});

var servicesSwiper = new Swiper('.services-cards-carousel', {
  slidesPerView: 1.2,
  spaceBetween: 30,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  pagination: {
    el: ".actions-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.actions-button-next',
    prevEl: '.actions-button-prev',
  },
  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },

});


var newsSwiper = new Swiper('.news-cards-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 30,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  pagination: {
    el: ".actions-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.actions-button-next',
    prevEl: '.actions-button-prev',
  },
  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },

});


var slideTabsSwiper = new Swiper(".slide-tabs", {
  slidesPerView: "auto",
  // slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
  },

  breakpoints: {
      768: {
          slidesPerView: 3,
      },
      992: {
          slidesPerView: 4,
      },
      1200: {
          slidesPerView: 4,
      },
      1400: {
          slidesPerView: 5,
          spaceBetween: 22,
      },
  },
});


var inputs = document.querySelectorAll(".file-input");
  
  for (var i = 0, len = inputs.length; i < len; i++) {
    customInput(inputs[i]);
  }
  
  function customInput(el) {
    const fileInput = el.querySelector('[type="file"]');
    const label = el.querySelector("[data-js-label]");
  
    fileInput.onchange = fileInput.onmouseout = function () {
        if (!fileInput.value) return;
  
        var value = fileInput.value.replace(/^.*[\\\/]/, "");
        el.className += " -chosen";
        label.innerText = value;
    };
  }


// Handle Collapse Divs
// var collapseDivs = document.querySelectorAll(".collapse-div");
// collapseDivs.forEach(function (div) {
//   div.style.display = "none";
// });

// var h5Elements = document.querySelectorAll("footer h6");
// h5Elements.forEach(function (h5) {
//   h5.addEventListener("click", function () {
//       this.classList.toggle("toggle");
//       var collapseDiv = this.nextElementSibling;
//       collapseDiv.style.display = window.getComputedStyle(collapseDiv).display === "none" ? "block" : "none";
//   });
// });




// Sub-Menu Open On-Click
// document.querySelectorAll('.menu-item-has-children .submenu-opener').forEach(function (submenuOpener) {
//   submenuOpener.addEventListener('click', function (e) {
//     const parent = this.parentElement;

//     // Toggle the 'nav_open' class on the parent element
//     parent.classList.toggle('nav_open');

//     // Find the sibling `ul` element
//     const submenu = parent.querySelector('.sub-menu');
//     if (submenu) {
//       if (submenu.style.height === '' || submenu.style.height === '0px') {
//         // Expand submenu
//         submenu.style.height = submenu.scrollHeight + 'px';
//       } else {
//         // Collapse submenu
//         submenu.style.height = '0px';
//       }
//     }

//     // Prevent default behavior and stop propagation
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// document.querySelectorAll('.menu-item-has-children .submenu-opener').forEach(function (submenuOpener) {
//   submenuOpener.addEventListener('click', function (e) {
//     const parent = this.parentElement;
//     const submenu = parent.querySelector('ul');

//     // Toggle 'nav_open' class on the parent
//     parent.classList.toggle('nav_open');

//     // Smooth slide toggle
//     if (submenu) {
//       if (submenu.style.maxHeight) {
//         // Collapse submenu
//         submenu.style.maxHeight = null;
//       } else {
//         // Expand submenu
//         submenu.style.maxHeight = submenu.scrollHeight + 'px';
//       }
//     }

//     // Prevent default behavior and stop propagation
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });
