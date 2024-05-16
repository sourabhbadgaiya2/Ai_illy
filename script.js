var tl = gsap.timeline()
tl.from(' #logo h3, #nav1 h3, #sign', {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
})
tl.from('#left h1', {
  x: -100,
  opacity: 0,
  duration: 1,
  scale: 0,
})
tl.from('#left #para', {
  x: -100,
  opacity: 0,
  duration: 1,
})
tl.from('#btn', {
  opacity: 0,
  x: 100,
  duration: 1,
})
tl.from('#rank h4', {
  x: -100,
  opacity: 0,
  duration: 1,
  scale: 0,
})
tl.from('#right img', {
  opacity: 0,
  scale: 0,
  duration: 1,
})
