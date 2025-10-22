// ELECTROCLASH / WITCHPOP / CYBER BEAT FRAMEWORK
// Strudel REPL Live Coding Template
// Uncomment sections by removing // at start of line

// ============ KICK DRUM ============
// Hard, punchy 4-on-floor kick
$: s("bd:3 bd bd:3 bd")
  .gain(1.2)
  .distort(0.3)
  .lpf(800)

// Alternative: Syncopated kick pattern
// $: s("bd:3 ~ bd:3 [~ bd]")

// ============ SNARE / CLAP ============
// Sharp snare on 2 and 4
$: s("~ cp:4 ~ cp:4")
  .gain(0.9)
  .room(0.3)
  .delay(0.15)
  .delaytime(0.125)
  .delayfeedback(0.3)

// Alternative: Industrial snare
// $: s("~ sd:5 ~ [sd:5 sd:5]").distort(0.4)

// ============ HI-HATS ============
// Fast closed hats with accents
$: s("hh:3*8")
  .gain("0.4 0.3 0.5 0.3 0.4 0.3 0.6 0.3")
  .hpf(8000)
  .pan(sine.range(0.4, 0.6).slow(4))

// Open hat accents
$: s("~ ~ oh:2 ~")
  .gain(0.5)
  .room(0.4)

// ============ BASS SYNTH ============
// Aggressive saw bass
$: note("c2 c2 [eb2 f2] c2")
  .s("sawtooth")
  .lpf(sine.range(400, 1200).slow(2))
  .resonance(8)
  .gain(0.7)
  .distort(0.5)
  .cutoff(800)

// Alternative: Pulse bass
// $: note("c2!4").s("square").lpf(600).gain(0.6).distort(0.6)

// ============ LEAD SYNTH ============
// Cyber lead melody
$: note("c4 eb4 f4 g4 [ab4 g4] f4 eb4 c4")
  .s("square")
  .slow(2)
  .lpf(2000)
  .gain(0.5)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.4)
  .room(0.5)

// Alternative: Stabby lead
// $: note("<[c4 eb4 g4] [d4 f4 a4]>").s("sawtooth").ad(0.01,0.1).gain(0.6)

// ============ PERCUSSION ============
// Extra cyber percussion
$: s("~ ~ [reverbkick:3 ~] ~")
  .gain(0.6)
  .speed(1.5)

// Industrial click/tick layer
$: s("click:4*16")
  .gain("0 0.3 0 0.2 0 0.4 0 0.2 0 0.3 0 0 0 0.4 0 0.3")
  .hpf(6000)

// ============ SUB BASS ============
// Deep sub for club systems
$: note("c1!4")
  .s("sine")
  .gain(0.8)
  .lpf(150)

// ============ EFFECTS & GLITCH ============
// Random glitch hits
$: s("glitch:4 ~ ~ [glitch:7 ~]")
  .sometimes(x => x.speed(rand.range(0.5, 2)))
  .gain(0.4)
  .pan(rand)

// Noise sweep
$: s("~ ~ ~ white")
  .gain(0.3)
  .hpf(perlin.range(1000, 8000))
  .ad(0.01, 0.3)

// ============ MASTER EFFECTS ============
// Global reverb (uncomment to apply)
// .room(0.3).size(0.8)

// Global compression/limiting
// .compress(4, 0.5)

// ============ ARRANGEMENT IDEAS ============
// Build up: gradually add layers
// $: s("bd").when(0.75, x => x.rarely(x => x.speed(0)))

// Breakdown: remove drums
// $: s("bd").mask("<1 1 1 0>")

// Filter sweep build
// .lpf(saw.range(200, 4000).slow(8))

// ============ LIVE CODING TIPS ============
// - Use .fast(2) or .slow(2) to change tempo feel
// - Add .degradeBy(0.3) for random dropout
// - Use .sometimes() or .often() for variation
// - Chain effects: .distort(0.4).delay(0.3).room(0.5)
// - Use <> for alternating patterns: "<c2 d2>"
// - Stack patterns with [] and commas: [s("bd"), s("hh")]
