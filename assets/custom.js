// const sampleInputCheckSelf = document.getElementById("ring-sample-kit");
// const sampleKiParent = document.querySelector(".sizing-kit");
// sampleInputCheckSelf.addEventListener("click", function(){
//     sampleKiParent.classList.add("kit-parent-active")
// })
// Hamburger

$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });
});
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.menusflex').toggleClass('active');
    });
});
// body Fix

$(document).ready(function () {
    $(".hamburger").click(function () {
        $("body").toggleClass("body-fix");
    });
});

// Tabbing

// $(document).ready(function () {

//     var tabWrapper = $('#tab-block'),
//         tabMnu = tabWrapper.find('.tab-mnu li'),
//         tabContent = tabWrapper.find('.tab-cont > .tab-pane');

//     tabContent.not(':first-child').hide().removeClass('active-div1');
//     tabContent.first().addClass('active-div1'); 

//     tabMnu.each(function (i) {
//         $(this).attr('data-tab', 'tab' + i);
//     });
//     tabContent.each(function (i) {
//         $(this).attr('data-tab', 'tab' + i);
//     });

//     tabMnu.click(function () {
//         var tabData = $(this).data('tab');
//         tabWrapper.find(tabContent).hide().removeClass('active-div1');
//         tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show().addClass('active-div1');
//     });

//     $('.tab-mnu > li').click(function () {
//         var before = $('.tab-mnu li.active');
//         before.removeClass('active');
//         $(this).addClass('active');
//     });

// });


$(document).ready(function () {

    var tabWrapper = $('#tab-block'),
        tabMnu = tabWrapper.find('.tab-mnu li'),
        tabContent = tabWrapper.find('.tab-cont > .tab-pane'),
        currentIndex = 0,
        intervalTime = 6000; // 6 seconds

    // Hide all tab content except the first one, and remove the active class from all except the first one
    tabContent.not(':first-child').hide().removeClass('active-div1');
    tabContent.first().addClass('active-div1'); // Add the active class to the first tab pane
    tabMnu.first().addClass('active'); // Add the active class to the first tab menu item

    tabMnu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    tabContent.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    tabMnu.click(function () {
        var tabData = $(this).data('tab');
        currentIndex = $(this).index(); // Update the currentIndex when tab is clicked
        tabWrapper.find(tabContent).hide().removeClass('active-div1');
        tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show().addClass('active-div1');
        tabMnu.removeClass('active');
        $(this).addClass('active');
    });

    // Function to change the active class to the next tab
    function changeTab() {
        currentIndex = (currentIndex + 1) % tabMnu.length; // Loop back to the first tab after the last tab
        tabMnu.eq(currentIndex).click();
    }

    // Set interval to change the tab every 6 seconds
    setInterval(changeTab, intervalTime);

});


// end

$(document).ready(function () {
    $(".footer-links h4").click(function () {
        var $nav = $(this).parent().children("nav");
        if ($(this).hasClass("active-footerMenu")) {
            $(this).removeClass("active-footerMenu");
            $nav.slideUp();
        } else {
            $(".footer-links h4").removeClass("active-footerMenu");
            $(".footer-links  nav").slideUp();
            $(this).addClass("active-footerMenu");
            $nav.slideDown();
        }
    });
});

$(document).ready(function () {
    $('ul.tabs li:first-child').addClass('current');
    $('ul.tabs-content li:first-child').addClass('current');
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});

$(document).ready(function() {
    function updateGallery() {
        var selectedBoxIndex = -1;
        $('.select-productInputBox input').each(function(index) {
            if ($(this).is(':checked')) {
                selectedBoxIndex = index;
                return false; // break the loop
            }
        });

        if (selectedBoxIndex === -1) {
            selectedBoxIndex = 0; // default to the first image if none is selected
        }

        // Update product gallery
        $('.product-gallery img').hide();
        $('.product-gallery img').eq(selectedBoxIndex).show();

        // Update product accessories
        $('.product-accessories .product-accessoriesBox').hide();
        $('.product-accessories .product-accessoriesBox').eq(selectedBoxIndex).show();
    }
    
    updateGallery();
    $('.select-productInputBox input').change(function() {
        updateGallery();
    });
});



$('.ring-re1').owlCarousel({
    loop:true,
    margin:160, 
    nav:false,
    center: true,
    dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1.8
        }
    }
})


// ...


document.addEventListener('DOMContentLoaded', function () {
    const duration = 2000; // 2 seconds

    function countUp(element, target) {
        let count = 0;
        const incrementTime = Math.floor(duration / target);
        const targetElement = element.querySelector('h4');

        const interval = setInterval(() => {
            if (count < target) {
                count++;
                targetElement.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, incrementTime);
    }

    function onEntry(entry, observer) {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'), 10);
            countUp(entry.target, target);
            observer.unobserve(entry.target);
        }
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            onEntry(entry, observer);
        });
    });

    document.querySelectorAll('.alrt-slp').forEach(element => {
        observer.observe(element);
    });
});


AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const plusIcons = document.querySelectorAll('.plus-icon');

    plusIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Remove the active classes from all elements
            document.querySelectorAll('.factors-sub-contnet').forEach(content => {
                content.classList.remove('active-p');
            });
            document.querySelectorAll('.plus-icon').forEach(icon => {
                icon.classList.remove('active-p2');
            });

            // Add the active classes to the clicked elements
            this.classList.add('active-p2');
            this.previousElementSibling.querySelector('.factors-sub-contnet').classList
                .add('active-p');
        });
    });
});


$('.medical').owlCarousel({
    loop: true,
    margin: 32,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3.8
        }
    }
})





var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 20,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {

        220: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});

// PDP Slider

 $('#in-box-slider').owlCarousel({
            loop: true,
            margin: 60,
            dots: false,
            nav: false,
            items: 2,
            responsive: {
                0: {
                    items: 1,  // 1 item for screens from 0px to 480px
                    margin: 10
                },
                480: {
                    items: 2,  // 2 items for screens from 480px to 768px
                    margin: 20
                },
                768: {
                    items: 2,  // 3 items for screens from 768px to 1024px
                    margin: 30
                },
                1024: {
                    items: 2,  // 4 items for screens above 1024px
                    margin: 60
                }
            }
        });