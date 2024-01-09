---
summary: Load Balancer
date: 'January 29, 2022'
tags: ['System-Design']
---

# Load Balancer(LB)

LB can be applied in any layer above IP network.

## scalability

### Vertical(hardware) Scaling

CPU: L2 Cache
Disk:
SATA
SAS
SSD

PATA

RAM:

### Horizontal scalling

<b>Cheaper hardware </b>

Distributed backend server.
Load balancer

#### DNS return IP of load balancer

BIND:
heuristic:
round roubin policy.

Caching:
TTL 1 hrs.

Storing sessions in load balancer.
File server with the same session

#### RAID drive

RIAD0 : strip write for performance
RAID1: two drives redundancy.
RIAD10: Striping and redundancy 4 drives.
RAID5:One drive can die
RAID6:Any two drives can die.

Robustness and redundancy.

#### How to solve Downtime problem?

replication issue.

## Software

ELB
HAProxy
LVS

## Hardware

Barracuda
Cisco
Citrix
100K
F5

## Sticky Sessions

Layer 7 load balancing

## Shared Storage

FC, ISCSI, MySQL, NFS.

## Cookies in Load balancer

Storing the ID of the server in cookies
Store big random number in the load balancer.
