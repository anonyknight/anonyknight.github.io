---
title: Applying UML and Patterns - Part 1 Introduction
summary: Applying UML and Patterns - An Introduction to Object-Oriented Analysis and Design and Iterative Development, Third Edition
date: '2021-11-25'
tags: ['OMSCS', 'Agile', 'UML']
---

## Chapter 1 Object Oriented Analysis and Design(OOA/D)

Objectives:

### What's the book goals and scope?

#### Interactive development process via an agile approach to Unified Process(UP)

* How to create an excellent OO design? classic OO design metaphor: responsibility-driven design.
* How to use the language for "software blueprints", displaying thought and the form of communication?

#### Introduction to OOA/D and Applying UML

#### Focus on fundamentals

* how to assign responsibilities to objects, UML notation, common design patterns.
* principles, heuristics or design patterns(problem solution formulas for design principles)
* **requirements analysis** related to **use cases.**

#### Intermediate level topics: framework design and architectural analysis

In conclusion:

* Create better object designs by applying principles and patterns
* Iteratively follow common analysis and design activities, an agile approach to UP.
* Create frequently used UML diagrams.
  
![Topics and skills covered](../diagrams/ooad-topics.gif)

### How to define OOA/D?

**Do the right thing**
Analysis is to investigate the problem and requirements rather than a solution.
e.g. Requirements analysis or object oriented analysis.

In OO, analysis is to find and describe the objects/concepts in the problem domain.

**Do the thing right**
Design emphasizes a conceptual solution to fulfil the requirements rather than
its implementation.

In OO, design is to define software objects and how they collaborate to fulfill
the requirements.

### A Short Example

* Requirements Analysis - Define use cases (Use case UML)
* Define domain model - show noteworthy domain concepts or objects. Domain model = conceptual object model. (Domain Model diagram for real-world classes)
* Assign object responsibilities and collaborations, draw interaction diagrams. (sequence diagram)
* Design class diagram to have a static view of the class. (software classes diagram)

### What's the overview UML and visual agile modeling

UML is a **visual** language to specify and construct, document the artifacts of systems.

At deeper level in Model Driven Architecture(MDA), UML notation is the UML meta-model.

Three ways to apply UML

* As Sketch, informal and incomplete hand drawing on whiteboards.
* As Blueprint, reverse engineering to visualize and understand the code or code generation(forward engineering).
* As programming language, to generate the executable code.

#### Three perspectives to apply UML

* Conceptual perspective
* Specification(software) perspective
* Implementation(software) perspective

## Ch.2 Iterative, Evolutionary, and Agile

### How to define an iterative and agile process

Software Development process describes the approach for the software

1. Building
2. Deploying
3. maintaining

UP includes skill practices

Extreme Programming(XP)

* Test Driven Development(TDD)
* Refactoring
* Continuous integration(CI)

Scrum

* Common Project room(war room)
* daily scrum

Iterative lifecycle

Risk-driven development

### Three reasons to introduce UP

1. UP is an iterative process.
2. UP provides an example structure for how to do OOA/D
3. UP is flexible and a lightweight.

### The central idea of this book

1. How to think and design with objects
2. apply UML
3. use design pattern, agile modeling
4. evolutionary requirements analysis
5. writing use cases.

### Modern iterative, evolutionary and agile methods

1. Scrum
2. Lean Development
3. Dynamic systems development method(DSDM)
4. Feature-Driven Development
5. Adaptive software Development.

### How to define fundamental concepts in the Unified Process(UP)?

Feedback and adaptation evolve the specification and design,
it's known as iterative and evolutionary development.

![Figure 2.1. Iterative and evolutionary development.](../diagrams/iterative-evolutionary-development.gif)

### 3 Weeks iteration

Monday

1. 1 hour morning clarifying the tasks and goals
2. One person reverse-engineering last iteration code into UML
3. The team use whiteboards for agile modeling, sketching rough UML, write pseudo-code and design notes.

Remaining days:

1. Implementation
1. testing(unit, acceptance, usability)
1. further design
1. integration
1. daily builds.

### How to Handle Change on an Iterative Project?

![Figure 2.2. Iterative feedback and evolution leads towards the desired system. The requirements and design instability lowers over time](../diagrams/iteractive-feedbacks.gif)

### Benefits to iterative development

1. Less project failure, better productivity, lower defects rates.
2. Early mitigation of high risks(technical, requirements, objectives, usability, etc)
3. Early visible progress
4. Early feedback, user engagement and adaptation
5. Managed complexity
6. an iteration learning can methodically improve the development process. Iteration by iteration.

### How long should an iteration be?

Two to six weeks.

Central idea: small steps, rapid feedback, adaptation.

### Waterfall lifecycle

1. High rate of failure
2. Lower productivity
3. higher defect rates.

Waterfall thinking based on speculation and hearsay.

1. Write most requirements before development,
1. Create thorough and detailed specifications or detailed OO UML models, designs before programming.
1. Write all use cases before starting to program.

### Feedback and Adaptation

1. Early development feedbacks help programmers read specification and client demos to refine requirements.
2. Tests feedbacks help developers refine the design or models.
3. Team progress of early features' feedbacks help refine the schedule and estimates.
4. Client and marketplace feedbacks help re-prioritize the features.

### How to do Iterative and Evolutionary Analysis and Design?

Clarify the requirements in workshops, improve CI/CD must-to-have, design workshops, implement
and testing, elaboration phase, then implement.

### 1. Iteration-1

Two days for time-boxed requirements workshop, engaged business and development people, chief architect.

* Day-1 morning, high level requirement analysis, identify use case names, features, and key non-functional requirements.
* Pick 10% from high level list, which are **architecturally significant, high business value, or high risk** Perhaps 3 use cases.
* 1.5 days, do intensive detailed analysis for three use cases, UC.

### 2. an iteration planning meeting

Investigate UCs and then design, build, and test within timeboxed iteration. Break them down into a set of more detailed iteration tasks.

### 3. Do iteration-1 over 3 weeks

* First 2 days, modeling and design work in pairs, sketching UML diagrams at whiteboards in a common war room, coached and guided by the chief architect.
* Programming, testing and integrating their work over the remaining weeks, using the modeling UMLs.
* More testing: unit, acceptance, load, usability, etc.
* One week before the end, check the goals, de-scope the iteration, put the secondary goals back to TODO list.
* Tuesday of the last week, code freeze, create iteration baseline.
* Wednesday morning, demo the partial system to stakeholders, collect feedbacks.

### 4. 2nd requirements workshop near the end of iteration-1

Review and refine materials, pick another 10% to 15% use cases with significant and of high business value, analyze them in details.

### 5. Friday morning, hold another iteration planning meeting

### 6. Do iteration-2 with similar steps

### 7. Iteration Repeat

for four iterations and five requirements workshops, 80% to 90% requirements have been written in details, the end of **elaboration phase**.

### 8. Stabilized requirements and then implementation

Requirements workshops are unlikely. The requirements are stabilized. Keep ask this in each iteration: “Given what we know today, what are the most critical technical and business features we should do in the next three weeks?”

### What is Risk-Driven and Client-Driven Iterative Planning?

1. Risk driven: identify and drive down the highest risks. Including architecture centric iterative development because not having a solid architecture is a common high risk.
2. Client-Driven: build visible features that client cares most about.

### What are Agile Methods and Attitudes?

![Figure 2.4. Evolutionary analysis and design—the majority in early iterations](../diagrams/evolutionary-analysis-and-design.jpg)

### Basic practice in Agile method

1. Short timeboxed iterations with evolutionary refinement of plans,
requirements, and design.
2. promoting practices and principles for simplicity, lightness, communication, self-organizing teams.
3. Four special questions in each stand-up meeting.

### [Agile Manifesto and Principles](https://agilemanifesto.org/)

Agile Alliance ([www.agilealliance.com](http://www.agilealliance.com/)) with a manifesto and statement of principles to capture the spirit of agile methods.

### The Agile Manifesto

| Individuals and interactions | over processes and tools           |
| ---------------------------- | ---------------------------------- |
| *Working software*           | *over comprehensive documentation* |
| *Customer collaboration*     | *over contract negotiation*        |
| *Responding to change*       | *over following a plan*            |

### The Agile Principles

| 1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software. | 8. Agile processes promote sustainable development.          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 2. Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage. | 9. The sponsors, developers, and users should be able to maintain a constant pace indefinitely. |
| 3. Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter time scale. | 10. Continuous attention to technical excellence and good design enhances agility. |
| 4. Business people and developers must work together daily throughout the project. | 11. Simplicity—the art of maximizing the amount of work not done—is essential. |
| 5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done. | 12. The best architectures, requirements, and designs emerge from self-organizing teams. |
| 6. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation. | 13. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly. |
| 7. Working software is the primary measure of progress.      |                                                              |

# What is Agile Modeling?

* The purpose of modeling (sketching UML, ...) is primarily to *understand*, not to document. UML can help quickly explore alternatives and the path to a good OO design.
* Model and apply the UML for the unusual, difficult, tricky parts of the design space.
* Use the simpletest tool possible. Whiteboard or UML CASE tool.
* Model in pairs or triads, discover, understand and share that understanding, rotate pen sketching.
* Create models in parrallel with dynamic-view UML interaction diagram and static-view UML class diagram.
* Treat prior diagrams lightly as throw-away explorations. **Only tested code demonstrates the true design.**
* Developers themselves should do the OO design modeling for themselves.

### Agile Modeling in this Book: Why the Snapshots of UML Sketches?

UML-sketch modeling on whiteboards is a practice I.

# What is an Agile UP?

1. Prefer a small set of activities and artifacts.
2. Requiremments and designs adaptively emerge through iterations based on feedbacks.
3. Apply UML with agile modeling practices.
4. Phase Plan - High level plan and Detailed Plan - Iteration Plan.

# Critical UP Practices?

1. short timeboxed iterative
2. evolutionary
3. adaptive development
4. tackle high risk and high customer value issues in early iterations.
5. continuously engage users for evaluation, feedbacks, requirements.
6. build a cohesive architecture
7. continously verify quality
8. Apply use cases
9. Visual modeling with UML
10. manage requirements
11. practice change request and configuration management

# What are the UP Phases?

1. ***\*Inception—\**.** approximate vision, business case, scope, vague estimates.
2. ***\*Elaboration—\**.** refined vision, iterative implementation of the **core architecture**, **resolution of high risks**, identification of **most requirements** and scope, more realistic estimates.
3. ***\*Construction—\**.** iterative **implementation** of the remaining lower risk and easier elements, and preparation for deployment.
4. ***\*Transition—\**.** beta **tests, deployment.**

![**Figure 2.6. Schedule-oriented terms in the UP.**](../diagrams/UP-schedule-terms.gif)

# What are the UP Disciplines?

![**Figure 2.7. UP disciplines.**](../diagrams/UP-disciplines.gif)

### What is the Relationship Between the Disciplines and Phases?

![Disciplines and phases.](../diagrams/UP-discipline-and-phases.gif)

**Figure 2.8. Disciplines and phases.**

### How is the Book Structure Influenced by UP Phases and Disciplines?

![**Figure 2.9. Book organization is related to the UP phases and iterations.**](../diagrams/The-book-structure.gif)

### Definition: What is the Development Case?

**Table 2.1. Sample Development Case. s - start; r - refine**

| Discipline                  | Practice                                                     |           Artifact | Incep. | Elab.  | Const. | Trans. |
| :-------------------------- | :----------------------------------------------------------- | -----------------: | :----: | :----: | :----: | :----: |
|                             |                                                              |        Iteration → |   I1   | E1..En | C1..Cn | T1..T2 |
| Business Modeling           | agile modeling req. workshop                                 |   **Domain Model** |        |   s    |        |        |
| Requirements                | req. workshop vision box exercise dot voting                 | **Use-Case Model** |   s    |   r    |        |        |
| Vision                      | s                                                            |                  r |        |        |        |        |
| Supplementary Specification | s                                                            |                  r |        |        |        |        |
| Glossary                    | s                                                            |                  r |        |        |        |        |
| Design                      | agile modeling test-driven dev.                              |   **Design Model** |        |   s    |   r    |        |
| SW Architecture Document    |                                                              |                  s |        |        |        |        |
| Data Model                  |                                                              |                  s |   r    |        |        |        |
| Implementation              | test-driven dev. pair programming continuous integration coding standards |                ... |        |        |        |        |
| Project Management          | agile PM daily Scrum meeting                                 |                ... |        |        |        |        |
| ...                         |                                                              |                    |        |        |        |        |

### You Know You Didn't Understand Iterative Development or the UP When

* You try to define requirements before design or implementation, define design before implementation, or define an architecture before iterative programming and testing.
* Doing UML modeling before programming, regarding programming as a simple mechanical translation of UML into code.
* Believing inception = requirements, elaboration = design, and construction = implementation (that is, superimposing the waterfall on the UP).
* Regarding elaboration purpose is to define models and construct code.
* Iteration length is three months long instead of **three weeks.**
* Adpoting the UP means many activities and create many documents.
* Plan a project in details, speculatively predict activities.

### History

In the late **1950s**, evolutionary, iterative, and incremental development (IID), rather than the waterfall.

 The first published paper promoting iterative rather than waterfall development was published in **1968** at the IBM T.J. Watson Research Center.

IID was used on many large defense and aerospace projects in the **1970s**.

Also in the **1980s**, Dr. Frederick Brooks (of *Mythical Man-Month* fame), wrote and spoke about the shortcomings of the waterfall and the need to instead use IID methods.

By the early **1990s**, IID was widely recognized as the successor to the waterfall, and there was a flowering of iterative and evolutionary methods: UP, DSDM, Scrum, XP, and many more.

## Ch.3 Case Studies

### Why focus on OOA/D in the core application logic layer?

![Figure 3.1. Sample layers and objects in an object-oriented system, and the case study focus](./../diagrams/03-Sample-layers.gif)

Only application logic layer are language, technology, platform independent.

### Methodology

Iterations:

1. Core functions, a core set of analysis and design topics and notation
2. New ideas, UML notation, patterns
3. Likewise

### Case One: The NextGen POS System

### Case Two: The Monopoly Game System
