// CYBER GLITCH EXPERIMENTAL
// Maximum digital destruction and chaos

// ============ DRUMS ============
// Glitchy, unstable kick
$: s("bd:3 bd bd:3 bd")
  .sometimes(x => x.speed(rand.range(0.8, 1.5)))
  .gain(1.2)
  .distort(0.6)
  .coarse(16)
  .lpf(700)

// Fragmented snare
$: s("~ sd:5 ~ [sd:5 sd:5]")
  .degradeBy(0.4)
  .gain(0.9)
  .distort(0.5)
  .coarse(12)

// Chaotic hi-hats
$: s("hh:3*16")
  .gain(rand.range(0.2, 0.5))
  .speed(rand.range(0.8, 1.3))
  .hpf(7000)
  .pan(rand)

// ============ BASS ============
// Stuttering bass
$: note("c2 c2 [c2 c2 c2] c2")
  .s("square")
  .lpf(sine.range(300, 800).fast(4))
  .resonance(15)
  .gain(0.8)
  .distort(0.7)
  .coarse(8)
  .shape(0.6)

// ============ GLITCH LAYERS ============
// Heavy glitch percussion
$: s("glitch:4 glitch:7 glitch:2 glitch:9")
  .often(x => x.speed(rand.range(0.25, 4)))
  .gain(rand.range(0.3, 0.6))
  .pan(rand)
  .distort(0.5)
  .coarse(rand.range(4, 16))

// Bitcrushed clicks
$: s("click:4*32")
  .gain(rand.range(0, 0.5))
  .speed(rand.range(0.5, 2))
  .hpf(perlin.range(5000, 12000))
  .coarse(rand.range(8, 32))

// ============ CHAOS SYNTHS ============
// Random pitch stabs
$: note(rand.range(36, 72))
  .s("sawtooth")
  .lpf(rand.range(800, 4000))
  .resonance(rand.range(5, 15))
  .gain(0.4)
  .coarse(rand.range(4, 16))
  .ad(0.001, rand.range(0.05, 0.2))
  .pan(rand)

// Tritone chaos chords
$: note("c4*8 db4*8 c4*8 b3*8")
  .chord("<C^7 Db^7 C^7 B^7>")
  .s("square")
  .degradeBy(0.5)
  .lpf(rand.range(1500, 3000))
  .resonance(rand.range(8, 15))
  .gain(0.45)
  .coarse(rand.range(8, 16))
  .shape(rand.range(0.3, 0.7))
  .ad(0.005, 0.05)

// ============ NOISE MADNESS ============
// Aggressive noise bursts
$: s("white white white white")
  .gain(rand.range(0.2, 0.5))
  .hpf(rand.range(1000, 10000))
  .lpf(rand.range(4000, 15000))
  .ad(0.001, rand.range(0.05, 0.3))
  .pan(rand)
  .distort(rand.range(0.3, 0.8))

// Random silence for chaos
$: s("~")
  .sometimes(x => s("glitch:*").speed(rand.range(0.1, 5)))
