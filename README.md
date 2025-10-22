# 🎹 Strudel Electroclash / Witchpop Framework

A live coding framework for creating electroclash, witchpop, and cyber beats using [Strudel REPL](https://strudel.cc).

## 🎵 What is This?

A modular collection of Strudel patterns for building dark electronic music with a cyberpunk aesthetic. Perfect for:
- **Electroclash** (Peaches, Fischerspooner, Miss Kittin)
- **Witchpop** (Grimes, HANA, Alice Glass)
- **Cyber/Future Bass** (SOPHIE, AG Cook, 100 gecs)

## 🚀 Quick Start

1. Open [Strudel REPL](https://strudel.cc) in your browser
2. Copy code from `main-beat.js` or `chord-progressions.js`
3. Paste into Strudel and start live coding!

## 📁 Project Structure

```
strudel-electroclash-project/
├── main-beat.js              # Core drum + bass framework
├── chord-progressions.js     # Advanced chord theory & patterns
├── examples/
│   ├── minimal-dark.js       # Stripped-down dark techno
│   ├── witchpop-full.js      # Complete witchpop arrangement
│   └── cyber-glitch.js       # Glitchy experimental cyber
└── README.md
```

## 🎛️ Main Beat Components

### Drums
- **4-on-floor kick** with distortion and compression
- **Sharp snares/claps** with delay and reverb
- **Fast hi-hats** with dynamic accents and panning
- **Industrial percussion** layers

### Synths
- **Aggressive saw bass** with filter sweeps and distortion
- **Cyber lead synth** with delays and spatial effects
- **Sub bass** for club system low-end

### Effects
- **Glitch elements** with randomized playback
- **Noise sweeps** with perlin-based filter modulation
- **Master effects** (reverb, compression, limiting)

## 🎼 Chord Progressions

8 progression options from simple to advanced:

1. **Classic Pop** - I → V → vi → IV (bright, uplifting)
2. **Lydian Magic** - I → II → I → II (dreamy, floating)
3. **Chromatic Descent** - I → ♭VII → ♭VI → V (dark drama)
4. **Modal Interchange** - I → ♭VI → ♭III → ♭VII (epic cinematic)
5. **Tritone Substitution** - I → ♭II → I → V (dissonant jazz)
6. **Parallel Major** - I → ♭VI → IV → ♭VII (film score)
7. **Whole Tone** - I → II → III → ♯IV (avant-garde)
8. **Phrygian Dominant** - I → ♭II → III → IV (exotic mystical)

See `chord-progressions.js` for code examples and theory breakdowns.

## 🎨 Key Features

### Crunch & Distortion
```javascript
.coarse(8)        // Bitcrushing (8-bit digital crunch)
.distort(0.6)     // Analog-style saturation
.shape(0.4)       // Waveshaping distortion
```

### Filter Techniques
```javascript
.lpf(sine.range(400, 1200).slow(2))     // Sweeping low-pass
.hpf(perlin.range(1000, 8000))          // Organic high-pass sweep
.resonance(8)                            // Filter emphasis
```

### Randomization & Glitch
```javascript
.sometimes(x => x.speed(rand.range(0.5, 2)))  // Random speed changes
.degradeBy(0.3)                                // Random dropouts
.pan(rand)                                     // Random stereo position
```

## 🎯 Live Coding Tips

### Building a Track
1. Start with **kick + bass**
2. Layer in **hats and snares**
3. Add **lead synth** or **chord stabs**
4. Bring in **glitch/effects** for transitions
5. Use `.mask()` and `.degradeBy()` for breakdowns

### Quick Modifiers
```javascript
.fast(2)          // Double the tempo feel
.slow(2)          // Half the tempo feel
.sometimes()      // Apply effect 50% of the time
.often()          // Apply effect 75% of the time
.rarely()         // Apply effect 25% of the time
```

### Arrangement Patterns
```javascript
// Build up gradually
.mask("<1 1 1 0>")                // 3 bars on, 1 bar off

// Filter sweep build
.lpf(saw.range(200, 4000).slow(8))

// Breakdown (remove elements)
s("bd").when(0.75, x => x.rarely(x => x.speed(0)))
```

## 🔊 Mixing Guidelines

### Gain Staging
- **Kick:** 1.0 - 1.2
- **Bass:** 0.7 - 0.8
- **Snare/Clap:** 0.8 - 0.9
- **Hi-hats:** 0.3 - 0.5
- **Lead synths:** 0.5 - 0.6
- **Chord stabs:** 0.5 - 0.55
- **Effects/Glitch:** 0.3 - 0.4

### Frequency Separation
```javascript
// Keep bass and kick clean
bass: .lpf(600)
kick: .lpf(800)

// Remove mud from chords
chords: .hpf(200)

// Brighten hi-hats
hats: .hpf(8000)
```

## 📚 Music Theory Resources

### Polytonal Layering
Play major chords over minor bass lines for sophisticated tension:
```javascript
// Minor bass
note("c2 c2 eb2 f2")

// Major chords on top
note("c4*8").chord("<C^7 D^7 Eb^7 F^7>")
```

### Chord Voicing
```javascript
.voicing()        // Automatic voice leading
.struct()         // Custom chord shapes
```

## 🛠️ Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- [Strudel REPL](https://strudel.cc) (web-based, no installation needed)
- Basic understanding of JavaScript syntax (helpful but not required)

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add new progression patterns
- Submit example tracks
- Improve documentation
- Report bugs or suggest features

## 📖 Learning Resources

- [Strudel Documentation](https://strudel.cc/learn/)
- [Tidal Cycles](https://tidalcycles.org/) (inspiration for Strudel)
- [Sonic Pi](https://sonic-pi.net/) (similar live coding tool)

## 🎓 Credits

Built with [Strudel](https://strudel.cc) by Felix Roos and contributors.

Inspired by:
- Electroclash pioneers (Peaches, Fischerspooner, Miss Kittin)
- Witchpop artists (Grimes, HANA, Alice Glass)
- PC Music / Hyperpop (SOPHIE, AG Cook, 100 gecs)
- Live coding community (TidalCycles, SuperCollider)

## 📄 License

MIT License - feel free to use, modify, and distribute!

## 🎶 Example Tracks

Check the `examples/` directory for complete, working arrangements you can use as starting points.

---

**Happy live coding! 🎹✨**

For questions or feedback, open an issue on GitHub.
