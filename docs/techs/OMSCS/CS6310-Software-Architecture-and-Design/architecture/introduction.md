---
title: Intro-to-software-Arch
summary: Introduction to Software Architectures, David Garlan and Mary Shaw, January 1994, CMU
date: '2021-09-15'
tags: ['OMSCS']
---

## Abstract

Architectural design has been addressed by:

* informal diagrams
* descriptive terms
* module interconnection languages
* templates and frameworks for specific domain systems
* formal models of component integration mechanisms.

**8 architectural styles + 6 case studies.**

## Introduction

What are overal system structural issues?

* gross organization and global control structure
* protocols for communication
* synchronization and data access
* assignment of functionality to design elements
* physical distribution
* composition of design elements
* scaling and performance
* selection among design alternatives

## From programming languages to software architecture

historical development of **abstration techniques** in CS.

### High-Level programming language

1. instructions and data separately
2. symbolic names for code and memory addresses
3. marco processors: a single symbol = sequences of instructions.
4. procedure invocation, for loop and conditional statements.
5. data types for selecting the proper machine instructions, show how data should be used.
6. introduction of modules
7. Abstract data types

### Abstract Data Types

* the software structure (which included a representation packaged with
  its primitive operators),
* specifications (mathematically expressed as abstract models or algebraic
  axioms),
* language issues (modules, scope, user-defined types),
* integrity of the result (invariants of data structures and protection from
  other manipulation),
* rules for combining types (declarations),
* **information hiding** (protection of properties not explicitly included in
  specifications).

### Software Architecture

Developed vocabulary of software designs

* client-server model
* abstraction layering and system decomposition
* distributed, OO approach
* pipeline

**Examples**

* International Standard Organization's
  Open Systems Interconnection Reference Model (a layered network
  architecture)

* NIST/ECMA Reference Model (a generic software
  engineering environment architecture based on layered communication
  substrates)

* X Window System (a distributed windowed user
  interface architecture based on event triggering and callbacks)

## Architectural styles

### Common framework to view

* a collection of computational **components**
* a description of the interactions between these components - **connectors**, e.g. procedure call, event boardcast, database queries and pipes

### What's architectural style?

It defines a family of systems in terms of a **pattern of structural** organization, determintes the vocabulary of **components** and **connectors** together with a set of **constraints** on how they can be combined.

**constraints**: e.g. topological constraints on architectural descriptions, execution semantics

### Common questions

* What's the structural pattern - the components, connectors and constraints?
* What's the underlying computational model?
* What are the essential invariants of the style?
* What are some common examples of its use?
* What are the advantages and disadvantages of using that style?
* What are some of the common specializations?

### 1. Pipes and Filters

* Components are filters, having a set of inputs and a set of outputs.
* Connectors are pipes, conduits for the steams, transmitting outputs of one filter to inputs of another.

#### Invariants of the styls

* filters should be independent, should not sharing state with other filters.
* filters do not know the identify of their unsteams and downstreams filters.

#### Common specializations

* pipelines restricting linear sequences of filters
* bounded pipes, restricting the amount of data on a pipe
* typed pipes, requre data passed between two filters have a well-defined type.

#### Examples

* Unix shell
* compiler
* signal processing domains
* functional programming
* distributed systems

### 2. Data Abstraction and Object-Oriented Organization

* **Components**: objects or an abstract data type, data representations and their associated primitive operations encapsulated.
* **Connectors**: function and procedure invocations.

#### Advantage

* object can hide its representation from its clients
* change the implementation without affecting those clients.
* allow designer to decompose problems into collections of interacting agents.

#### Disadvantage

* One object must know another object's identify
* Side effect problems

### 3. Event-based, implicit invocation

Alternative integration technique:

* implicit invocation
* reactive integration
* selective boardcast

Usage:

* actors
* constraint satisfaction
* daemons
* packet-switched networks

### 4. Layered Systems

### 5. Repositories

## References

*Garlan & Shaw* paper "Introduction to Software Architectures" as covered in the previous Reading Discussion:
*Chapters 1, 2 and 3 (pages 1 - 17) and Chapter 5 (pages 36 - 37).*
