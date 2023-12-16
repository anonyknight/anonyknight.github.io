---
summary: Design Data Intensive Application
date: 'January 16, 2022'
tags: ['System-Design']
---

# DDIP
Design Data Intensive Application

## Why data-intensive?

**Data-intensive** application if data is its primary challenge.

**Compute-intensive** if CPU cycles are the bottleneck.

**Only architecture of data systems,** no deployment, operations, security, management.

## Outlines, parts and chapters

### Part 1 fundamental ideas, data stored on machine

* 1 reliability, scalability and maintainability, how we think about it and achieve it?
* 2 compare different **data models and query languages**, see their use cases
* 3 **storage engine**: how database arrange data on disk?
* 4 **data encoding**  and schemas

### Part 2 Data distributed across multiple machines

* 5 replication / Availability
* 6 partitioning/sharding
* 7 transactions
* 8 problems in distributed systems
* 9 consistency and consensus.

### Part 3 Derive datasets from other datasets

Applications need to integrate several different databases, caches, indexes.

* 10 batch processing approach
* 11 stream processing
* 12 Put everything together, approaches for building reliable, scalable and maintainable application in the future.
