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
heroCaption: 'V2, presented at IROS 2026 (Late-Breaking Result) [left]; Matlab simulations [right] (from top to bottom: eccentric continuous rotation, 5-point hypocyloid, circle + continuous rotation <-- this is also the thumbnail)'
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
1. creating a **model-based nonlinear controller (MPC)** to balance a spherical inverted pendulum (SIP) on the SPM's end effector platform (ie the SPM-SIP system),
2. a high-fidelity **digital twin in MuJoCo** for controller verification, and
3. refining previous V2 hardware to a V3 generation, focusing primarily on a large architectural change to the drivetrain (belt-driven -> **direct-drive**) and an optimization of kinematic parameters for **workspace/dexterity***

\* also looking into \'self-rotation\' (see eccentric continuous rotation) near type-1 singularities (workspace boundary) to possibly extend our usable workspace by leveraging the benefits of the chosen coaxial design.

This was accepted and presented at IROS 2026 as a Late-Breaking Result in Pittsburgh,

**Kiran Aman** and Adeel Akhtar (2026, September). *Geometric Modeling and Hardware Validation of a Coaxial 3-RRR Manipulator for Spherical Inverted Pendulum Stabilization*.

## Significance

![Significance figure](/projects/spm/kinematic_diagram.png){#kinematic-diagram .side}

This SPM-SIP system allows the tasks of **locomotion** and **stabilization** to be separated. Hence, path planning of a mobile robot that mounts the SPM-SIP system can stay smooth without pertubations cauesd by stabilization tasks and vice versa. Separation of these tasks is important for safe locomotion, for example through a crowded street or cluttered ground, where deviations from the planned path caused by stabilization may cause the mobile base to crash.

Thus, the end goal of this project is to mount the SPM-SIP system to a mobile robot and send it on its way, given we are able to **validate** it in simulation and controlled real-world environments. 

<details>
<summary><h2>Machining log (for V2)</h2></summary>

I tracked all of my machining hours that went into creating V2; it totaled 156 hours and 56 attempts at making parts. I also tracked why each part failed for future learning purposes

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSogOlJhVCxmWi9l9o4Zn7HpumaKGq5LB4hsbmgHas4wL_IaJWSYyo7WeXSTiJ9JVJ7V5lLIBf1UPsw/pubhtml?gid=0&amp;single=true&amp;headers=false"></iframe>

[**see the full log in google sheets**](https://docs.google.com/spreadsheets/d/e/2PACX-1vSogOlJhVCxmWi9l9o4Zn7HpumaKGq5LB4hsbmgHas4wL_IaJWSYyo7WeXSTiJ9JVJ7V5lLIBf1UPsw/pubhtml)

</details>

<details>
<summary><h2>How it works</h2></summary>


The SPM mechanically constrains the end effector (a pivot offset from $o$) to traverse the surface of a sphere about a remote center of rotation. This property is what I believe will allow us to balance an SIP in a **compact** manner; that is, we see that rotation about this remote center creates **necessary translational accelerations** to act on the pendulum such that

$$
\ddot{p} = R \big{(}\widehat{\dot{\Omega}} + \widehat{\Omega}^2 \big{)}\rho,
$$

where $p=o+R\rho$ defines the position of our pivot relative to our remote center of rotation $o$, current orientation $R \in SO(3)$, and our pivot offset $\rho$; our platform rates are given by $\Omega=J_\omega(\theta,R)\dot{\theta}$, which is transformed under the hat map $\widehat{(\cdot)}$ that maps $\Omega \in R^3$ to the skew-symmetric $\widehat{\Omega} \in R^{3\times 3}$ such that for $x,y \in R^3, \widehat{x}y=x\times y$. 

Hence, we see that for some body angular acceleration $\dot\Omega$, we have a tangential component of acceleration that is translational, and that additionally gives us control authority to act on the SIP as

$$
\ddot{q}+\|\dot{q}\|^2q = \frac{1}{\ell}\widehat{q}^{\,2}
    \Big[
    ge_3
    +
    R\big(
    \widehat{\dot{\Omega}}
    +
    \widehat{\Omega}^{\,2}
    \big)\rho
    \Big],
$$

which is the full, coupled SPM-SIP model.


</details>

<details>
<summary><h2>What I learned</h2></summary>

I applied for 3 grants over the course of this project, and I've only been awarded 1 of them. Funding was sort of always a struggle with this project, especially given that it started as completely independent. After being rejected funding to continue V2, I decided to self fund the entire project other than machining services, which truly would have broken the bank. So I just machined all the parts myself (see machining log) and bought the hardware/materials I'd need.

</details>