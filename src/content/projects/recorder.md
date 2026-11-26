---
title: Automatic Recorder Player
summary: A machine that automatically plays the recorder; this was my high school capstone project. Although it was from a while ago, I'm still pretty happy with what it was able to achieve. Flight of the Bumblebee at 300 BPM
date: Sep. 2023 -- Jun. 2024
tags: [CAD, Mechanical Design, Arduino]
thumbnail: /projects/recorder/recorder.jpg
hero: false
featured: true
---

<video controls preload="metadata" src="/projects/recorder/recorder_demo.mp4"></video>

## Overview

This was my high school capstone project, which I worked on from end to end from project proposals, the actual build and its many iterations, to final write up and presentation. Although it's from a while ago, I'm still pretty proud of how it turned out especially considering my then (lack of) tools and machines that I do now have access to.

I haven't fully revisited this project but i've considered picking it up again to make a second generation that addresses many of the shortcomings and challenges that I faced in the first version. I'll go through the major subsystems of the machine as well as some improvements I'd like to see in a second version.

A big design philosophy I had throughout this project was maximizing **modularity** and **on the fly adjustability**, since I knew that I would likely not be able to measure/design features that would fit on the recorder without 3D scanning it or otherwise having some accurate model, which I couldn't produce. This worked out well until it didn't, which we'll see

<details>
<summary><h2>More details (design, problems, sub systems)</h2></summary>

**Air supply**: Air pump from an air mattress and 3D printed a nozzle that fits the mouthpiece of the recorder and a height-adjustable base that allows us to dial in the correct height. I'd implement some sort of solenoid actuated valve and pressure-based air supply if I revisited this to address 2 large missing pieces, being

1. the ability to rapidly shut on/off the air supply to the machine (articulation) and
2. controlling the air flow when on (tone)

**Hole actuation**: This is actually a difficult problem when considering the three different types of holes on a recorder: 
1. **Simple holes**: The first 4 holes are simply circles located on top of the recorder, making them easy to access. they are practically just booleans that must be covered/uncovered simply with some sort of actuator (solenoids here)
2. **Compound holes**: The last 2 holes on the top actually have 2 holes each; to create some tones, you must either cover both holes or only 1 of them for each of the 2. This means we need some sort of compound pad, which is not addressed in this iteration
3. **Back hole**: The hole located on the back of the recorder is difficult for mulitple reasons: 1. it is hard to access, and 2. it must be not only be covered/uncovered, but also partially covered continuously for tone, which would require some feedback along with a different actuator (a servo here).

On top of these, pad sealing requires the right material (preferably cork though I used electrical tape), geometry, and preload to fully seal the holes immediately upon actuation; when combined with the aforementioned 3 different types of holes, it becomes more difficult to develop effective solutions. 

**Firmware/synchronization**: The above demonstration shows an excerpt from Flight of the Bumblebee at around 300 BPM; I was able to push to ~500, though it sounded even worse. Further development of timing/sychronization would be preferable, since I was pressed for time when programming the Arduino for this version. Additionally, there is no MIDI integration, which meant that I hard coded all the notes, which is part of the reason that the demo is a short excerpt. 

**Hardware**: I used spring-loaded solenoid actuators controlled by MOSFETs in this iteration since they implicitly give the preload required for proper hole sealing. A major issue with this approach was rapid overheating since they each draw about 1 amp, since I never integrated any specific control or cooling systems other than boolean on/off. There are several ways that this can be addressed in a future generation:

1. **Peak and hold control firmware**: Just use full power to actuate a solenoid then drop since holding requires signficantly less current
2. **Cooling subsystem**: Combined with basic air-cooling, this should prevent solenoids from overheating and enable longer, more complex pieces to be played. 

**Mechanical design**: I placed a large emphasis on modularability in design, which meant: 

1. Solenoids slide across metal rods for adjustable hole placement,
2. The top assembly housing the servos moves up and down on the base to adjust the solenoid preload and resting height, 
3. The back hole assembly also rides on height adjustable screws, which allows for adjustable preload as well,
3. The air supply base is height adjustable to allow for refinement of nozzle height in relation to the recorder.

Though ultimately useful, this adjustability across many subsystems meant that assembly/disassembly was very long winded, often requiring >20 minutes just to take out the recorder. Something to address in a future generation, where a **3D scan** of the recorder would prove invaluable for accurate modeling around it.

**Tone control**: In this generation, I never implemented realtime closed-loop feedback tone control, which would function as a cornerstone subsystem as many others directly affect tone, including back hole actuation and air pressure. This would be rather simple with a single sensor and some specific control firmware.


</details>

![recorder_cad](/projects/recorder/recorder_cad.png)
![recorder_build](/projects/recorder/recorder_build.png)
![back_hole](/projects/recorder/back_hole.jpg)
![air](/projects/recorder/air.jpg)

