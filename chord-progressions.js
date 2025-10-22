// ============ CRUNCHY 8TH NOTE CHORD STABS ============

// BASIC VERSION: Single major chord, 8th notes
$: note("c4 c4 c4 c4 c4 c4 c4 c4") // or simplified: note("c4*8")
  .chord("<C^7>") // Major 7th chord (C E G B)
  .s("sawtooth")
  .lpf(3000)
  .resonance(5)
  .gain(0.5)
  .distort(0.6) // CRUNCH
  .ad(0.01, 0.08) // Short, stabby envelope
  .room(0.2)

// ENHANCED CRUNCH VERSION:
$: note("c4*8")
  .chord("<C^7>") 
  .s("sawtooth")
  .lpf(2500)
  .resonance(8)
  .gain(0.55)
  .coarse(8) // Bitcrushing for digital crunch
  .shape(0.4) // Waveshaping distortion
  .distort(0.5)
  .ad(0.005, 0.06) // Even shorter for more staccato
  .hpf(200) // Remove some low-end mud
  .room(0.15)
  .delay(0.1)
  .delaytime(0.0625) // 16th note delay
  .delayfeedback(0.2)

// ============ CHORD PROGRESSION OPTIONS ============

// OPTION 1: Classic Pop (Bright & Uplifting)
// I - V - vi - IV (C - G - Am - F)
$: note("c4*8 g4*8 a4*8 f4*8")
  .chord("<C^7 G^7 Am7 F^7>")
  .s("sawtooth")
  .lpf(2500).resonance(6)
  .gain(0.5).coarse(6).distort(0.5)
  .ad(0.01, 0.08)

// OPTION 2: Lydian Magic (Dreamy/Mystical)
// I - II - I - II (C - D - C - D)
// Creates floating, witchpop ethereal quality
$: note("c4*8 d4*8 c4*8 d4*8")
  .chord("<C^7 D^7 C^7 D^7>")
  .s("sawtooth")
  .lpf(2500).resonance(8)
  .gain(0.5).coarse(8).distort(0.6)
  .ad(0.005, 0.06)

// OPTION 3: Chromatic Descent (Dark Electroclash)
// I - bVII - bVI - V (C - Bb - Ab - G)
// Major chords descending = tension and release
$: note("c4*8 bb4*8 ab4*8 g4*8")
  .chord("<C^7 Bb^7 Ab^7 G^7>")
  .s("square") // Square wave = harsher
  .lpf(2200).resonance(10)
  .gain(0.55).coarse(10).shape(0.5)
  .ad(0.005, 0.05)

// OPTION 4: Modal Interchange (Sophisticated)
// I - bVI - bIII - bVII (C - Ab - Eb - Bb)
// Borrowed from C minor, but all major chords
$: note("c4*8 ab4*8 eb4*8 bb4*8")
  .chord("<C^7 Ab^7 Eb^7 Bb^7>")
  .s("sawtooth")
  .lpf(2800).resonance(7)
  .gain(0.5).distort(0.6).coarse(6)
  .ad(0.01, 0.08)

// OPTION 5: Tritone Substitution (Jazz-Influenced Cyber)
// I - bII - I - V (C - Db - C - G)
// Very dissonant and futuristic
$: note("c4*8 db4*8 c4*8 g4*8")
  .chord("<C^7 Db^7 C^7 G^7>")
  .s("sawtooth")
  .lpf(2400).resonance(12)
  .gain(0.5).coarse(12).distort(0.7)
  .ad(0.005, 0.05)

// OPTION 6: Parallel Major Motion (Film Score Style)
// I - bVI - IV - bVII (C - Ab - F - Bb)
// Epic, cinematic, powerful
$: note("c4*8 ab4*8 f4*8 bb4*8")
  .chord("<C^7 Ab^7 F^7 Bb^7>")
  .s("sawtooth")
  .lpf(3000).resonance(5)
  .gain(0.55).coarse(4).distort(0.5)
  .ad(0.01, 0.1)

// OPTION 7: Whole Tone Movement (Avant-Garde)
// I - II - III - #IV (C - D - E - F#)
// All major = very bright, no traditional resolution
$: note("c4*8 d4*8 e4*8 fs4*8")
  .chord("<C^7 D^7 E^7 F#^7>")
  .s("square")
  .lpf(2600).resonance(8)
  .gain(0.5).coarse(8).shape(0.4)
  .ad(0.005, 0.06)

// OPTION 8: Phrygian Dominant (Middle Eastern/Witch House)
// I - bII - III - IV (C - Db - E - F)
// Exotic, dark, mystical
$: note("c4*8 db4*8 e4*8 f4*8")
  .chord("<C^7 Db^7 E^7 F^7>")
  .s("sawtooth")
  .lpf(2200).resonance(10)
  .gain(0.55).coarse(10).distort(0.65)
  .ad(0.005, 0.05)

// ============ ADVANCED TECHNIQUES ============

// TECHNIQUE 1: Velocity/Accent Patterns
// Emphasize beats 1 and 3 (backbeat inversion)
$: note("c4*8")
  .chord("<C^7 G^7 Am7 F^7>")
  .s("sawtooth")
  .gain("0.6 0.4 0.6 0.4 0.6 0.4 0.6 0.4") // Accent pattern
  .lpf(2500).resonance(6).coarse(6)
  .distort(0.5).ad(0.01, 0.08)

// TECHNIQUE 2: Rhythmic Variation
// Not all 8ths - create syncopation
$: note("c4 ~ c4 c4 ~ c4 c4 ~")
  .chord("<C^7 G^7 Am7 F^7>")
  .s("sawtooth")
  .lpf(2500).resonance(8).coarse(8)
  .gain(0.6).distort(0.6)
  .ad(0.005, 0.06)

// TECHNIQUE 3: Filter Automation
// Filter opens over progression
$: note("c4*8")
  .chord("<C^7 Ab^7 F^7 Bb^7>")
  .s("sawtooth")
  .lpf(sine.range(800, 4000).slow(4)) // 4-bar sweep
  .resonance(10)
  .gain(0.5).coarse(8).distort(0.6)
  .ad(0.01, 0.08)

// TECHNIQUE 4: Chord Voicing Changes
// Same progression, different inversions
$: note("<c4 g3 a3 f3>*8") // Root notes move down
  .chord("<C^7 G^7 Am7 F^7>")
  .s("sawtooth")
  .voicing() // Automatically voices chords nicely
  .lpf(2500).resonance(6)
  .gain(0.5).coarse(6).distort(0.5)
  .ad(0.01, 0.08)

// TECHNIQUE 5: Layered Octaves
// Play chord in two octaves for thickness
$: stack(
  note("c4*8").chord("<C^7 G^7 Am7 F^7>"),
  note("c5*8").chord("<C^7 G^7 Am7 F^7>").gain(0.3)
)
  .s("sawtooth")
  .lpf(2800).resonance(6)
  .coarse(6).distort(0.5)
  .ad(0.01, 0.08)

// TECHNIQUE 6: Probability-Based Variation
// Chords sometimes skip beats
$: note("c4*8")
  .chord("<C^7 Ab^7 Eb^7 Bb^7>")
  .s("sawtooth")
  .degradeBy(0.3) // 30% of notes randomly drop out
  .lpf(2500).resonance(8)
  .gain(0.55).coarse(8).distort(0.6)
  .ad(0.005, 0.06)

// ============ POLYTONALITY (ADVANCED) ============
// Play major chords AGAINST minor bass line
// Creates tension and complexity

// Bass in C minor
$: note("c2 c2 eb2 f2")
  .s("sawtooth")
  .lpf(600).gain(0.7).distort(0.5)

// Chords in parallel major keys
$: note("c4*8 d4*8 eb4*8 f4*8")
  .chord("<C^7 D^7 Eb^7 F^7>") // All major!
  .s("square")
  .lpf(2400).resonance(10)
  .gain(0.5).coarse(10).distort(0.6)
  .ad(0.005, 0.05)

// ============ GENRE-SPECIFIC RECOMMENDATIONS ============

// ELECTROCLASH (Peaches, Fischerspooner)
// Use: Chromatic Descent, Tritone Substitution
// Keep it angular, dissonant, aggressive

// WITCHPOP (Grimes, HANA)
// Use: Lydian Magic, Modal Interchange
// Add reverb, more ethereal processing

// CYBER/FUTURE (Sophie, AG Cook)
// Use: Whole Tone, Parallel Major
// Heavy bitcrushing, extreme processing
