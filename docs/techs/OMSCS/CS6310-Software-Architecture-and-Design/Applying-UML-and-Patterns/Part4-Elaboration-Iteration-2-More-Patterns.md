---
title: Applying UML and Patterns - Part 4 Elaboration Iteration 2 - More patterns
summary: Applying UML and Patterns - An Introduction to Object-Oriented Analysis and Design and Iterative Development, Third Edition
date: '2021-10-15'
tags: ['OMSCS', 'Agile', 'UML']
---

## Chapter 23 More Patterns

## Chapter 25 GRASP: More Objects with Responsibilities

### Polymorphism

* Adapter, Command, Composite, Proxy, State, Strategy rely on Polymorphism.
* Related patterns: Protected Variations.

### Pure Fabrication

* Implementaing software classes tofabrication for software high cohension and low coupling
* All GoF design patterns are Pure Fabrications.

### Indirection

* Many GoF patterns, such as Adapter, Bridge, Facade, Observer, and Mediator
* Protected Variations
* Low Coupling
* Many Indirection intermediaries are Pure Fabrications.

### Protected Variations

**Benefits**

- Extensions required for new variations are easy to add.
- New implementations can be introduced without affecting clients.
- Coupling is lowered.
- The impact or cost of changes can be lowered.

**Related Patterns and Principles**

- Most design principles and patterns are mechanisms for protected variation, including polymorphism, interfaces, indirection, data encapsulation, most of the GoF design patterns, and so on.
- In [[Pree95](https://learning.oreilly.com/library/view/applying-uml-and/0131489062/bi01.html#biblio01entry104)] variation and evolution points are called “hot spots.”

- Most design principles and patterns are mechanisms for protected variation, including polymorphism, interfaces, indirection, data encapsulation, most of the GoF design patterns, and so on.

**PV** is essentially the same as the **information hiding** and **open-closed principles**, which are older terms. 

## Chapter 26. Applying GoF Design Patterns

* Adapter

## Chapter 39 Documenting Architecture: UML and the N+1 View Model

4+1 Views
- Logical
- Process
- Deployment
- Data

+ Use Case view

