---
title: Compact SPM-SIP Stabilizer
summary: Coaxial 3-RRR Spherical Parallel Manipulator (SPM) for Compact Spherical Inverted Pendulum (SIP) Stabilization [ONGOING]
date: Jun. 2025 -- Present
tags: [Robotics, Mechanical Design, Control]
thumbnail: /projects/spm/circle_rot.mp4
hero:
  - /projects/spm/spm_poster.png
  - - /projects/spm/off_center_rot.mp4
    - /projects/spm/hypocycloid.mp4
    - /projects/spm/circle_rot.mp4
heroCaption: 'V2, presented at IROS 2026 (Late-Breaking Result) [left]; Matlab simulations [right] (from top to bottom: eccentric continuous rotation, 5-point hypocyloid, circle + continuous rotation <- this is also the thumbnail)'
featured: true
achievements: 
  - IROS Late-Breaking Result (2026)
  - NJIT Dean's Fund Travel Grant (2026)
  - NJIT URI Phase 1 Seed Grant Finalist (2025)
links:
  repo: https://github.com/kiran-aman/spm
order: 2
---

## Overview

I initially began independently developing a 3D-printed V1 prototype of a cool mechanism I saw a video of, being a coaxial 3-rrr spherical parallel manipulator (SPM). It has since gone through 2 iterations, with V3 currently in development, along with many scope changes to become pretty much my entire life's work (this is a joke (kind of)).

Currently in development, V3 focuses on: 
1. creating a model-based nonlinear controller (MPC) to balance a spherical inverted pendulum (SIP) on the SPM's end effector platform (ie the SPM-SIP system),
2. a high-fidelity digital twin in MuJoCo for controller verification, and
3. refining previous V2 hardware to a V3 generation, focusing primarily on a large architectural change to the drivetrain (belt-driven -> direct-drive) and an optimization of kinematic parameters for workspace/dexterity*

\* also looking into \'self-rotation\' (see eccentric continuous rotation) near type-1 singularities (workspace boundary) to possibly extend our usable workspace by leveraging the benefits of the chosen coaxial design.

This was accepted and presented at IROS 2026 as a Late-Breaking Result in Pittsburgh,

**Kiran Aman** and Adeel Akhtar (2026, September). *Geometric Modeling and Hardware Validation of a Coaxial 3-RRR Manipulator for Spherical Inverted Pendulum Stabilization*.


## How it works

The SPM mechanically constrains the end effector to traverse the surface of a sphere about a remote center of rotation. This property is what I believe will allow us to balance an SIP in a compact manner, as opposed to other approaches that need large, open workspaces (ie ground robot, quadrotor). That is, we see that rotation about this remote center creates necessary translational accelerations to act on the pendulum such that




This SPM-SIP system allows the tasks of **locomotion** and **stabilization** to be separated. Hence, path planning of a mobile robot that mounts the SPM-SIP system can stay smooth without pertubations cauesd by stabilization tasks and vice versa.


![System diagram](/projects/example-one/thumb.svg)

## What I learned

Challenges, tradeoffs, what you'd do differently.
