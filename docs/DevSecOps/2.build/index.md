---
title: 2.Build
summary: Build
date: '2021-08-09'
tags: ['DevSecOps']
---

## Problems

- How to reduce the duplicate efforts of build?
- How to build in parallel to shorten build time?
- How to better organize the build code?

## Definition

>A build system is mainly used to compile the source code into a deployable/usable form. However, it can also help in managing the following:
> - Builds
> - Documentation
> - Dependencies
> - Releases

### Java Family
### Gradle

### Maven

- [What's Maven?](http://maven.apache.org/what-is-maven.html)

### SBT Scala

## C Family
### GNU Make

- [What's GNU Make](https://www.gnu.org/software/make/)
- [Makefile tutorials](https://www.tutorialspoint.com/makefile/index.htm)
  
### CMake

## Why is it important in DevSecOps? 

> The project build phase compiles/transforms the source code into a deployable form (e.g. binary, package) by using/integrating the libraries/dependent packages, etc. It is important to check if the build system, dependency packages/libraries being used, are not vulnerable to known attacks and are updated to the latest security fixes.