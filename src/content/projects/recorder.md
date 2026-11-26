---
title: Automatic Recorder Player
summary: A solenoid-actuated recorder that plays an excerpt of Flight of the Bumblebee at 300 BPM. Solo high school capstone, from proposal to presentation, built for about $100 in parts.
date: Sep. 2023 -- Jun. 2024
tags: [CAD, Mechanical Design, Arduino]
thumbnail: /projects/recorder/recorder.jpg
hero: false
featured: true
---

<video controls preload="metadata" poster="/projects/recorder/recorder.jpg" src="/projects/recorder/demo.mp4"></video>

## Overview

For my high school capstone, I built a machine that plays the recorder by itself: Arduino-driven solenoids press the finger holes while an air pump blows into the mouthpiece. The benchmark I set was an excerpt of *Flight of the Bumblebee* at 300 BPM, and it hit it.

I took it from proposal through design, build, a written report and a final presentation, solo, over a few months and for about $100 in parts.

<details>
<summary><h2>How it works</h2></summary>

- **Air:** an air pump blows a constant stream into the mouthpiece. There's no pressure control; the pump just runs.
- **Fingers:** [N] solenoids, one per hole, each pressing a 3D-printed pad onto its hole.
- **Control:** an Arduino switches the solenoids through [driver: transistors / MOSFETs / a relay board], stepping through the song's fingerings at the programmed tempo.

</details>

## Challenges

**Pads that wouldn't seal.** A recorder only plays the right note if every covered hole is completely sealed, and even a small leak [squeaks / drops the pitch / ...]. [What you tried, and what finally worked.]

**Building it on a home 3D printer.** I didn't have a makerspace, just a home 3D printer that wasn't a good one, so I had to get scrappy. [An example or two: tolerances, warping, reprints, workarounds.]

**[Another thing that broke].** [One or two sentences.]

<details>
<summary><h2>If I revisit it</h2></summary>

- **Air pressure control:** [e.g., a regulated supply or closed-loop pump control], for consistent tone across notes and maybe even dynamics.
- **Better pads:** [e.g., soft, compliant pads instead of rigid printed ones], so holes seal reliably.
- **Better parts:** with the makerspace, I'd [machine the mounts / tighten tolerances / ...].

</details>

Funnily enough, this project is part of why I first chose computer engineering over mechanical: I thought it had taught me most of what mechanical engineering had to offer. It hadn't, which is how I ended up studying both.
