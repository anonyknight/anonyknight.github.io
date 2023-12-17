---
title: Kafka
summary: A distributed streaming platform
date: 'January 30, 2022'
tags: ['System-Design']
---

## High-level Architecture

### Common termns

**Brokers**

they receive data from producers, reliably store them and provide them into consumers.

**Records**

A message or an event stored in Kafka.

![Kafka message](../img/kafka.png)

### Topics

Topics are message categories. Each message should have a topic. Consumer can subscribe to the topics.

![Topics](../img/kafka-topics.png)

### Producers

Publish records to Kafka

### Consumers

Subcriber of kafka topics.

### High Level Architecture

![kafka-architecture](../img/kafka-architecture.png)
