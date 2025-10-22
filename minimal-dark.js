// MINIMAL DARK ELECTROCLASH EXAMPLE
// Stripped-down, hypnotic pattern

// Kick - relentless 4/4
$: s("bd:3*4")
  .gain(1.2)
  .distort(0.4)
  .lpf(700)

// Minimal hat pattern
$: s("~ hh:3 ~ hh:3")
  .gain(0.4)
  .hpf(9000)

// Dark bass line - minimal movement
$: note("c2!3 bb1")
  .s("sawtooth")
  .lpf(500)
  .resonance(12)
  .gain(0.8)
  .distort(0.6)

// Rare glitch accent
$: s("~ ~ ~ glitch:4")
  .rarely(x => x.speed(rand.range(0.5, 3)))
  .gain(0.3)
  .pan(rand)

// Atmospheric noise layer
$: s("white")
  .slow(4)
  .gain(0.2)
  .hpf(perlin.range(2000, 6000))
  .ad(0.5, 2)
