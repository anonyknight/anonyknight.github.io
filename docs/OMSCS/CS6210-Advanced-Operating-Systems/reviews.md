---
title: CS6210-AOS
date: 'November 13, 2023'
tags: ['OMSCS']
---

The format: 4 projects, 3 exams, 2 paper summaries

 difficulty: Pr1 > Pr2 >> Pr4 > Pr3 

## Project

0. pthread based warmup exercise (C, involves finding 5 bugs)
   Time spent: 10h

1. Virtual Machine Scheduling in KVM(C, libvirtAPI) virtualization, memory allocation, and scheduling project

   vCPU scheduler and memory controller (C, uses libvirt API)
   Time spent: 15h
   The libvirt docs weren't the best, but once you got over that it was mostly fine.

2. Barrier syncronization primitives (C, uses OpenMP and MPI libraries)
   Time spent: 15h
   Really cool seeing the end graphs and figures, but using PACE cluster sucked.

3. gRPC asyncronous hybrid client/server with thread-pool (C++, uses gRPC)
   Time spent: 10h
   Once I got accustomed to the gRPC asyncronous API calls it became fairly simple to handle.

4. MapReduce framework (C++, uses gRPC)
   Time spent: 20h (about 15h implementation, 5h debug)
   Lots of boilerplate to understand. Cool end product, but definitely start ASAP.