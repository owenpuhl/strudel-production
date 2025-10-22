// WITCHPOP FULL ARRANGEMENT
// Ethereal, dreamy, with major chord progressions

// ============ DRUMS ============
// Kick
$: s("bd:3 bd bd:3 bd")
  .gain(1.1)
  .distort(0.2)
  .lpf(800)

// Snare with reverb
$: s("~ cp:4 ~ cp:4")
  .gain(0.8)
  .room(0.5)
  .size(0.9)

// Shimmery hi-hats
$: s("hh:3*8")
  .gain("0.3 0.25 0.4 0.25 0.3 0.25 0.5 0.25")
  .hpf(8000)
  .pan(sine.range(0.3, 0.7).slow(8))
  .room(0.3)

// ============ BASS ============
// Minor bass for contrast
$: note("c2 c2 eb2 g2")
  .s("sawtooth")
  .lpf(600)
  .resonance(6)
  .gain(0.7)
  .distort(0.3)

// Sub bass layer
$: note("c1!4")
  .s("sine")
  .gain(0.6)
  .lpf(120)

// ============ CHORD STABS ============
// Lydian major progression (dreamy)
$: note("c4*8 d4*8 c4*8 d4*8")
  .chord("<C^7 D^7 C^7 D^7>")
  .s("sawtooth")
  .lpf(2800)
  .resonance(6)
  .hpf(250)
  .gain(0.5)
  .coarse(4)
  .distort(0.4)
  .ad(0.01, 0.1)
  .room(0.4)
  .delay(0.2)
  .delaytime(0.0625)
  .delayfeedback(0.3)

// ============ LEAD MELODY ============
// Floaty lead line
$: note("c5 eb5 g5 bb5 ab5 g5 f5 eb5")
  .s("square")
  .slow(2)
  .lpf(3000)
  .gain(0.45)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.5)
  .room(0.6)
  .pan(sine.range(0.3, 0.7).slow(16))

// ============ ATMOSPHERE ============
// Pad layer
$: note("c3 eb3 g3 bb3")
  .s("sine")
  .slow(4)
  .gain(0.3)
  .ad(1, 2)
  .room(0.8)
  .size(0.9)
  .lpf(1500)

// Sparkle effects
$: s("~ ~ click:4 ~")
  .gain(0.3)
  .speed(rand.range(1.5, 3))
  .pan(rand)
  .room(0.6)
  .hpf(8000)

// Noise sweep on 4
$: s("~ ~ ~ white")
  .gain(0.25)
  .hpf(perlin.range(2000, 8000))
  .ad(0.01, 0.4)
  .room(0.5)
