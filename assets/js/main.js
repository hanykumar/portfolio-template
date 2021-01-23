// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);
//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//     });
//   }
// };
// showMenu("nav-toggle", "nav-menu");

// const navLink = document.querySelectorAll(".nav__link");

// function linkAction() {
//   navLink.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));

// backgroundPosition: "200px 0px",
// ease: "elastic(1, 0.3)",
var rule = CSSRulePlugin.getRule("h1::after");

gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });

gsap.from(".anim1", {
  scrollTrigger: {
    trigger: ".anim1",
    // start: "bottom center",
  },
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.6,
});

gsap.from(".hero-design", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 50,
  y: 50,
});

gsap.from(".left", {
  scrollTrigger: {
    trigger: ".left",
    // start: "bottom center",
  },
  opacity: 0,
  duration: 1,
  x: 100,
});

gsap.from(".transition1", {
  scrollTrigger: {
    trigger: ".transition1",
    // start: "bottom center",
  },
  pin: true,
  opacity: 0,
  duration: 1,
  x: -50,
  stagger: 0.6,
});

gsap.from(".transition1-img", {
  scrollTrigger: {
    trigger: ".transition1-img",
  },
  opacity: 0,
  duration: 1.5,
  x: 100,
  stagger: 1,
});

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    // start: "bottom center",
  },
  pin: true,
  opacity: 0,
  duration: 1,
  x: 100,
  stagger: 0.6,
});

gsap.from(".transition3-img", {
  scrollTrigger: {
    trigger: ".transition3-img",
  },
  opacity: 0,
  duration: 1.5,
  x: 100,
  stagger: 1,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    // start: "bottom center",
  },
  opacity: 0,
  duration: 1.5,
  x: -50,
  stagger: 1,
});

// -----
// var tl = gsap.timeline({ defaults: { duration: 1 } });
// tl.from(".anim1", { y: -50, stagger: 0.6, opacity: 0 })
//   .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")
//   .from(".left", { x: -50, opacity: 0 }, "-=2.2")
//   .from(".portfolio-left", { x: -50, opacity: 0 }, "-=2.2");
