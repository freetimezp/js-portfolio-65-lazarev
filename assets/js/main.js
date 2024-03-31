//nav animation
function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "24vh"
        });
        tl.to(".nav-part2 h5", {
            display: "block",
        });
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        });
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        });
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        });
        tl.to("#nav-bottom", {
            height: "0",
            duration: 0.2
        });
    });
}

navAnimation();

//hover animation
function page2Animation() {
    var relems = document.querySelectorAll(".right-elem");

    relems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150,
            });
        });
    });
}

page2Animation();

//video animation
function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center");
    var video = document.querySelector("#page3 video");

    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        });
    });
    video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        });
    });

    var sections = document.querySelectorAll(".sec-right");

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].play();
        });
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load();
        });
    });

}

page3VideoAnimation();


//button animation 
function page4TextAnimation() {
    let btn = document.querySelector(".btn-wrapper button .str-1").textContent;
    let btn2 = document.querySelector(".btn-wrapper button .str-2").textContent;
    var text_wrapped = btn.replace(/\w/g, '<span>$&</span>');
    var text_wrapped2 = btn2.replace(/\w/g, '<span>$&</span>');


    document.querySelector('.hoverBtn .str-1').innerHTML = text_wrapped;
    document.querySelector('.hoverBtn .str-2').innerHTML = text_wrapped2;
}

page4TextAnimation();


























