var all = gsap.timeline();

all.from("#nav h2", {
  y: -35,
  opacity: 0,
  duration: 1.5,
});

all.from("#nav h4", {
  y: -35,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

all.from("h1", {
  y: 30,
  opacity: 0,
  duration: 1.5,
  scale:0.7
});
