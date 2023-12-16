---
title: Golang
date: 'August 13, 2021'
tags: ['study', 'programming']
---

## Introduction

[The Go Programming Language Specification](https://golang.org/ref/spec)

[Go’s declaration Syntax](http://blog.golang.org/gos-declaration-syntax) 

### Standard lib:

[documentation](http://golang.org/pkg/) 

### Go Docs

[godoc.org](http://godoc.org/)

[Effective Go guide](http://golang.org/doc/effective_go.html#interface_conversions)


Composition over inheritance

[short but good segment](http://golang.org/doc/effective_go.html#embedding) 


https://gobyexample.com/interfaces

## Slice

- [Go slices, usage and internals](http://golang.org/doc/articles/slices_usage_and_internals.html)
- [Effective Go - slices](http://golang.org/doc/effective_go.html#slices)
- [Append function documentation](http://golang.org/pkg/builtin/#append)
- [Slice tricks](https://code.google.com/p/go-wiki/wiki/SliceTricks)
- [Effective Go - slices](http://golang.org/doc/effective_go.html#slices)
- [Effective Go - two-dimensional slices](http://golang.org/doc/effective_go.html#two_dimensional_slices)
- [Go by example - slices](https://gobyexample.com/slices)

## Map

- [Go team blog post on maps](http://blog.golang.org/go-maps-in-action)
- [Effective Go - maps](http://golang.org/doc/effective_go.html#maps)

## Concurrent Slogon
> Do not communicate by sharing memory; instead, share memory by communicating.

Although Go’s approach to concurrency originates in [Hoare’s Communicating Sequential Processes (CSP)](http://en.wikipedia.org/wiki/Communicating_sequential_processes), it can also be seen as a type-safe generalization of Unix pipes.

- [Rob Pike’s concurrency slides (IO 2012)](http://talks.golang.org/2012/concurrency.slide#1)
- [Video of Rob Pike at IO 2012](http://www.youtube.com/watch?v=f6kdp27TYZs)
- [Video of Concurrency is not parallelism (Rob Pike)](http://vimeo.com/49718712)


## Concurrency
### Channels
- Buffered Channel
- Unbuffered Channel

## Goroutines
> Goroutines run in the same address space, so access to shared memory must be synchronized​​. 
> The sync package provides useful primitives, although you won’t need them much in Go as there are other primitives.

[How are Go channels implemented?](https://stackoverflow.com/questions/19621149/how-are-go-channels-implemented)


## Reference:
- [An Introduction to Programming in Go](https://www.educative.io/courses/introduction-to-programming-in-go)
- [Go by Example](https://gobyexample.com/)
- [A Tour of Go](https://tour.golang.org)
- [The Go Programming Language Specification](https://golang.org/ref/spec#Short_variable_declarations)
- [Go Wiki](https://github.com/golang/go/wiki)
