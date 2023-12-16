---
title: Fundamentals of Software Architecture
summary: Fundamentals of Software Architecture, (Ford & Richards, O'Reilly 2020).
date: '2021-11-25'
tags: ['OMSCS']
---

## 19. Architecture Decisions

An **anti-pattern**:

*  [Andrew Koenig](https://oreil.ly/p9i_Y) defines it as something that seems like a good idea when you begin, but leads you into trouble.
* a repeatable process that produces negative results

### *Covering Your Assets* anti-pattern

It occurs when an architect avoids or defers making an architecture decision out of fear of making the wrong choice.

#### How to overcome?

* Wait until the last responsible moment to make decision, waiting until you have enough information to justify and validate your decision, avoid fall into the *Analysis Paralysis* anti-pattern.
* continually collaborate with development teams to ensure decisions are feasible for implementation.

### *Groundhog Day* anti-pattern

It occurs when people don’t know why a decision was made, so it keeps getting discussed over and over and over.

### How to overcome?

Important to provide both **technical and business justifications** for the decisions.

#### Business justifications

* cost
* time to market
* user satisfaction
* strategic positioning

### *Email-Driven Architecture* anti-pattern

It occurs where people lose, forget, or don’t even know an architecture decision has been made and therefore cannot possibly implement that architecture decision. 

#### How to overcome?

* To provide a link to the single system of record.
* Only notify those people caring about the decision

### Architecturally Significant

[Michael Nygard](https://www.michaelnygard.com/) mentioned architecturally significant decisions affect the structure, nonfunctional characteristics, dependencies, interfaces or construction techniques.

* **Structure**: impacting the patterns or styles of architecture being used
* **nonfunctional characterics**: important for the application or system being developed or maintained.
* **dependencies**: coupling points between components and/or services within the system, impact overal scalability, modularity, agility, testability, reliability, etc.
* ***Interfaces*** refer to how services and components are accessed and orchestrated, usually through a gateway, integration hub, service bus, or API proxy.
* ***construction techniques*** refer to decisions about platforms, frameworks, tools, and even processes that, although technical in nature, might impact some aspect of the architecture.

## References:

Fundamentals of Software Architecture (Ford & Richards, O'Reilly 2020).

