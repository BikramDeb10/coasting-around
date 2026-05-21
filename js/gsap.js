gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
});

gsap.from(".subtitle", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

gsap.from(".hero-content h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
});

gsap.from(".hero-content p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

gsap.from(".hero-buttons", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 1,
});

//  Exprence ------

gsap.from(".experience-image", {
  scrollTrigger: ".experience-section",
  y: 100,
  opacity: 0,
  duration: 1.2,
});

gsap.from(".experience-content", {
  scrollTrigger: ".experience-section",
  x: 100,
  opacity: 0,
  duration: 1.2,
});
