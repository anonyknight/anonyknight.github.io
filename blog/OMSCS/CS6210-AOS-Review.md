# CS6210 Advanced Operation System(AOS)

## Summary: around 15 hrs / week in 2023 Fall

The course content includes weekly hangeout sessions, 4 refresh lectures, 11 lectures,
4 projects, 3 exams, 2 paper summaries out of 40+ papers. Lectures cover those high
level ideas from those 40+ papers.

<!--truncate-->

## Refresh lectures

Those lectures were in very concise and high quality. I've spent 12 hrs to review them

### Topics

* Memory System
* File Systems
* Multi-threaded programming
* Networking.

## Lectures and time logs

1. Intro to AOS (1.5 hr)
2. OS structures (5 hrs)
3. Virtualizations (3 hrs)
4. Parallel systems (10 hrs)
5. Distributed systems (10 hrs)
6. Distributed Objects Middleware (4 hrs)
7. Distributed subsystems (12 hrs)
8. Failure & Recovery (10 hrs)
9. Internet Computing (8 hrs)
10. RT and Multimeadia (7 hrs)
11. Security (9 hrs)

Test 1 Review: 13 hr
Test 2 Review: recorded in L5-L7
Test 3 Review: recorded in L8-L11
Paper summary: 8 hrs
Hangout summary: 2 hrs

## Project

Project 2-4 are group project of two people.

### Homework0: refresh topics (4 Hrs)

Covering topics: VIPT cache, Segmentation and paging, Page fault, OS definitions,
Page coloring, Process context switch, network protocol stacks.

### Pre-lab: pthread based warmup exercise (C, involves finding 5 bugs) (4h)

### Virtual Machine Scheduling in **KVM**(C, **libvirtAPI**) (37 hrs)

It's about virtualization, memory allocation, and scheduling project

vCPU scheduler and memory controller (C, uses libvirt API)
The libvirt docs weren't the best, but once you got over that it was mostly fine.

### Barrier synchronization primitives (C, uses OpenMP and MPI libraries) (31 hrs)

Use OpenMP and MPI libraries to simulate barrier mechanism. Use PACE cluster
for testing.

### gRPC asynchronous hybrid client/server with thread-pool (C++, uses gRPC) (17 hrs)

Implement **gRPC** asynchronous API calls. It has a store server, clients.

### Map Reduce framework (C++, uses gRPC) (46 hrs)

Read throughly MapReduce:[Simplified Data Processing on Large Clusters](https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/)

Implement a simplified version for map reduce. You will understand sharding,
workers, mapper, reducer designs.

## Reference

### [libvirt](https://libvirt.org/)

### [OpenMP](https://www.openmp.org/)

[MPI](https://www.mpi-forum.org/)

### [gRPC](https://grpc.io/)

[Mastering KVM Virtualization](https://github.com/saleksvlasov/serlMin/blob/master/Mastering%20KVM%20Virtualization-GEEKBOY.IR.pdf)
