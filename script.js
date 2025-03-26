
document.addEventListener('DOMContentLoaded', () => {
    const topHeader = document.getElementById("top-header");
    const bottomHeader = document.getElementById("bottom-header");
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            topHeader.style.display = 'none';
            bottomHeader.classList.add("header-fixed");
        }
        else {
            topHeader.style.display = "block";
            bottomHeader.classList.remove('header-fixed');
        }
    })

    const navLinks = document.querySelectorAll("ul.navbar li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach((nav) => nav.classList.remove('active'));
            link.classList.add('active');
        })
    })

})
$(document).ready(function () {
    let scrollPosition = 0;

    function openNavbar() {
        scrollPosition = $(window).scrollTop(); // Store scroll position

        $(".navbar").animate({ left: "0" }, 1000).addClass("open");
        $(".bg-tablet").css({ visibility: "visible", display: "block" }).animate({ opacity: 1 }, 1000);

        // Disable scrolling without affecting header
        $("html, body").css({
            overflow: "hidden",
            height: "100vh"
        });
    }

    function closeNavbar() {
        $(".navbar").animate({ left: "-100%" }, 1000).removeClass("open");
        $(".bg-tablet").animate({ opacity: 0 }, 1000, function () {
            $(this).css({ visibility: "hidden", display: "none" });
        });

        // Restore scrolling
        $("html, body").css({
            overflow: "",
            height: ""
        });

        $(window).scrollTop(scrollPosition); // Keep the user in the same position
    }

    $(".hamburger-btn").click(function () {
        if (!$(".navbar").hasClass("open")) {
            openNavbar();
        } else {
            closeNavbar();
        }
    });

    $(".bg-tablet").click(function () {
        closeNavbar();
    });
});




