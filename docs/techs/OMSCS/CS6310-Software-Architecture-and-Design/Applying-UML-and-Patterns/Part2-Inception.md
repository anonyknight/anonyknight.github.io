---
title: Applying UML and Patterns - Part 2 Inception
summary: Applying UML and Patterns - An Introduction to Object-Oriented Analysis and Design and Iterative Development, Third Edition
date: '2021-10-15'
tags: ['OMSCS', 'Agile', 'UML']
---

## Chapter 4 Inception is Not the Requirements Phase

### What is Inception?

Inception in one sentence:

**Envision the product scope, vision, and business case.**

The main problem solved in one sentence:

**Do the stakeholders have basic agreement on the vision of the project, and is it worth investing in serious investigation?**

### What Artifacts May Start in Inception?

**Table 4.1. Sample inception artifacts.**

| **Artifact**[[†\]](https://learning.oreilly.com/library/view/applying-uml-and/0131489062/ch04.html#ftn.ch04tn01) |                         **Comment**                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                   Vision and Business Case                   | Describes the high-level goals and constraints, the business case, and provides an executive summary. |
|                        Use-Case Model                        | Describes the **functional requirements.** During inception, **the names of most use cases** will be identified, and perhaps 10% of the use cases will be analyzed in detail. |
|                 Supplementary Specification                  | Describes other **requirements, mostly non-functional**. During inception, it is useful to have some idea of the key non-functional requirements that have will have a major impact on the architecture. |
|                           Glossary                           |         Key domain terminology, and data dictionary.         |
|               Risk List & Risk Management Plan               | Describes the risks (business, technical, resource, schedule) and ideas for their mitigation or response. |
|               Prototypes and proof-of-concepts               |     To clarify the vision, and validate technical ideas.     |
|                        Iteration Plan                        |   Describes what to do in the first elaboration iteration.   |
|            Phase Plan & Software Development Plan            | Low-precision guess for elaboration phase duration and effort. Tools, people, education, and other resources. |
|                       Development Case                       | A description of the customized UP steps and artifacts for this project. In the UP, one always customizes it for the project. |

[applying-uml-and-CH04](https://learning.oreilly.com/library/view/applying-uml-and/0131489062/ch04.html#ch04tn01)-These artifacts are only partially completed in this phase. They will be iteratively refined in subsequent iterations. Name capitalization implies an officially named UP artifact.

#### May do some programming work

* "proof of concept" via UI oridented prototypes
* experiments for key "show stopper" technical questions

#### Isn't That a Lot of Documentation?

 That's an Agile Modeling perspective: that the **greatest value of modeling** is to **improve understanding, rather than to document reliable specifications.**

### How Much UML During Inception?

Perhaps beyond simple **UML use case diagrams**, not much diagramming is warranted.

## Chapter 5 Evolutionary Requirements

### Definition: Requirements

**Requirements** are capabilities and conditions to which the system—and more broadly, the project—must conform

**A prime challenge** of requirements analysis is to find, communicate, and remember (that usually means write down) what is really needed, in a form that clearly speaks to the client and development team members.

### What are the Types and Categories of Requirements?

#### **FURPS+ model**

* ***\*Functional—\**.** features, capabilities, security.
* ***\*Usability—\**.** human factors, help, documentation.
* ***\*Reliability—\**.** frequency of failure, recoverability, predictability.
* ***\*Performance—\**.** response times, throughput, accuracy, availability, resource usage.
* ***\*Supportability—\**.** adaptability, maintainability, internationalization, **configurability**.

The “+” in FURPS+ indicates ancillary and sub-factors, such as:

* ***\*Implementation—\**.** resource limitations, languages and tools, hardware, ...
* ***\*Interface—\**.** constraints imposed by interfacing with external systems.
* ***\*Operations—\**.** system management in its operational setting.
* ***\*Packaging—\**.** for example, a physical box.
* ***\*Legal—\**.** licensing and so forth.

**functional** (behavioral) or **non-functional** (everything else);

### Requirements in UP artifacts

* **Use-case model** for functional (behavioral) requirements
* **Supplementary speficiation** - non-functional requirements, such as performance or licensing. Or features not in use cases, e.g. a report generation
* **Glossary** - terms and data dictionary for validation rules, acceptable values, etc.
* **Vision** - A short executive overview document to summarize high-level requirements and the business case
* **Business Rule**, e.g. government tax laws

## Chapter 6 Use cases

### Introduction

The following diagram illustrate write Business Modeling into requirements, then into design.

![**Figure 6.1. Sample UP artifact influence.**](../diagrams/06-UP-Business-Model-To-Use-Cases-To-Sequence.gif)

### Definition: What are Actors, Scenarios, and Use Cases?

**Definition**: Informally then, a **use case** is a collection of related success and failure **scenarios** that describe an actor using a system to support a **goal**.

An **Actor** is somthing with behavior, such as a person

A **Scenario**(a use case instance) is a specific sequence of actions and interactions between actors and the system.

A **use case** is a collection of related success and failure scenarios that describe an actor using a system to support a goal.

**Use cases are a key requirements input to classic OOA/D**.

### Use Cases and the Use-Case Model

**Use cases are text documents, not diagrams, and use-case modeling is primarily an act of writing text, not drawing diagrams.**

### Motivation: why use cases?

1. A good way to keep it simple for everyone.
2. It emphasize the user goals and perspective. We ask the questions - “**Who** is using the system, what are their typical **scenarios** of use, and what are their **goals**?”

### Definition: What are Three Kinds of Actors?

An actor includes the system under discussion(SuD).

1. **Primary actor** to find user goals
2. **Supporting actor** to clarify external interfaces and protocols.
3. **Offstage actor** to ensure that all necessary interests are identified and satisfied. e.g. a government tax agency.

### Notation: What are Three Common Use Case Formats?

* Brief - early requirements analysis to get a quick sense
* Causual - Informal paragraph format.
* Fully dressed - steps and variations are written in details, including preconditions and success guarantees.

### Guideline: Write Terse Use Cases

### Guideline: Write Black-Box Use Cases

### Guideline: Take an Actor and Actor-Goal Perspective

*A set of use-case instances, where each instance is a sequence of actions a system performs that yields an observable result of value* **to a particular actor***.*

### Guideline: How to Find Use Cases

#### Step 1: Choose the System Boundary

Find the System Under Discussion(SuD)

#### Steps 2 and 3: Find Primary Actors and Goals

Questions list

| Who starts and stops the system?                             | Who does system administration?                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Who does user and security management?                       | Is “time” an actor because the system does something in response to a time event? |
| Is there a monitoring process that restarts the system if it fails? | Who evaluates system activity or performance?                |
| How are software updates handled? Push or pull update?       | Who evaluates logs? Are they remotely retrieved?             |
| In addition to *human* primary actors, are there any external software or robotic systems that call upon services of the system? | Who gets notified when there are errors or failures?         |

**How to Organize the Actors and Goals?**

Two approaches:

1. Discover the results, name the **goals** as use cases
2. Write an actor-goal list first, review and refine, then draw the use case diagram.

Other Ways to Find Actors and Goals? Event Analysis

#### Step 4: Define Use Cases

Define one use case for each user goal, start the name of use cases with a verb.

### Guideline: What Tests Can Help Find Useful Use Cases?

#### The Boss Test

#### The **Elementary Business Process** (**EBP**)  Test (Dogfooding?)

#### The Size Test

### Applying UML: Use Case Diagrams

![Partial Use case Diagram](../diagrams/06-Partial-Use-Case.gif)
