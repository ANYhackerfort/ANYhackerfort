# 💻 Hello, I'm Matthew Zhang

I'm a double major in **Computer Science** and **Statistics & Data Science** at the **University of California, Santa Barbara**.

I'm a **networks and systems researcher** interested in taking poorly understood systems, turning their behavior into testable hypotheses, and validating those hypotheses through controlled experiments, concrete measurements, and statistical analysis.

My current work spans **computer networks, agent evaluation, computer vision, and research infrastructure**. I especially enjoy problems where it is initially unclear how to define "good," how to measure a system reliably, or why two implementations behave differently.

## 🔬 What I'm Working On

### Computer Networks and Systems

I'm currently researching **network emulation, congestion control, queue management, and application Quality of Experience**.

Recent work includes developing and validating a **DualPI2 implementation for Mahimahi** against the Linux kernel implementation, studying whether a userspace emulator can faithfully reproduce L4S behavior across different RTTs, link capacities, congestion-control algorithms, and queue configurations.

This work resulted in a **second-author ACM SIGCOMM CCR paper**:

**DualPI2 Module for Mahimahi**

I'm also working on systems that reproduce realistic household Internet workloads involving applications such as video streaming, conferencing, gaming, and web traffic, with the goal of measuring how network conditions translate into real user experience.

### Agent Evaluation

At **Lucid Motors**, I worked on validation systems for an in-vehicle AI assistant.

I built agent-based testing workflows that generated and executed conversational scenarios, varied conversation state and inputs, used self-reflection and adversarial testing, and searched for failures that deterministic test suites missed.

A major part of my interest in agents is not simply building them, but figuring out **how to tell whether they actually work**. I am interested in evaluation methodologies, behavioral clustering, regression detection, failure discovery, and statistical comparisons between agent-generated and human-generated behavior.

### Computer Vision and 3D Systems

I'm also researching **3D Gaussian Splatting** and object-centric scene understanding.

My work explores lineage tracking between Gaussians, geometric pruning, segmentation-guided scene editing, and agent-driven approaches for cleaning and manipulating reconstructed 3D environments.

## 🧪 Research Philosophy

A lot of the problems I enjoy start with something vague:

> "Does this emulator actually behave like the real system?"

> "Are agent-generated scenarios as useful as human-generated ones?"

> "Does this pruning strategy actually improve a 3D reconstruction?"

I like turning those questions into measurable hypotheses, designing experiments around them, and determining what evidence would actually be convincing.

In short:

**Quantify the unknown → form a hypothesis → design the experiment → measure it → test it.**

## 🛠️ Research Infrastructure

### Illusion Classroom

**https://illusion-classroom.com**

I built and maintain **Illusion Classroom**, a large-scale experimental platform used for psychology and education research.

The system supports synchronized interactive experiments with hundreds of participants and combines:

* React + TypeScript
* Django
* WebSockets
* Redis
* MySQL
* Docker
* Nginx
* S3 / MinIO
* Distributed video delivery and caching

The project has pushed me deeply into distributed systems, synchronization, networking, video delivery, observability, and building infrastructure that researchers can actually use.

## 🎯 Interests

I'm especially interested in:

* Computer Networks
* Systems Research
* Network Measurement and Emulation
* Congestion Control and Queue Management
* Agent Evaluation and Reliability
* Experimental Design
* Applied Statistics for Systems
* Computer Vision
* 3D Gaussian Splatting
* Research and Educational Infrastructure

## 🌐 Website

**https://linghezhang.me**

## 💼 LinkedIn

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin)](https://www.linkedin.com/in/matthew-zhang-1b3b23272/)

## 🎵 YouTube

I also make music.

[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-red?logo=youtube)](https://www.youtube.com/@LaibentonMusicGarage)
