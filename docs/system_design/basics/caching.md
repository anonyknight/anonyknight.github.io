---
title: Caching
date: 'January 26, 2022'
tags: ['System-Design']
---

.html
MySQL Query Cache
memcached
Redis

| Name      | Feature                                | Eviction argorithm       |
| --------- | -------------------------------------- | ------------------------ |
| Memcached | very large hash table across machines. | Least Recently Used(LRU) |
|           |                                        |                          |
|           |                                        |                          |

[Memcached vs Redis](https://aws.amazon.com/elasticache/redis-vs-memcached/)

|                                                              | Memcached | Redis |
| :----------------------------------------------------------: | :-------: | :---: |
| [Sub-millisecond latency](https://aws.amazon.com/elasticache/redis-vs-memcached/#Sub-millisecond_latency) |    Yes    |  Yes  |
| [Developer ease of use](https://aws.amazon.com/elasticache/redis-vs-memcached/#Developer_ease_of_use) |    Yes    |  Yes  |
| [Data partitioning](https://aws.amazon.com/elasticache/redis-vs-memcached/#Data_partitioning) |    Yes    |  Yes  |
| [Support for a broad set of programming languages](https://aws.amazon.com/elasticache/redis-vs-memcached/#Support_for_a_broad_set_of_programming_languages) |    Yes    |  Yes  |
| [Advanced data structures](https://aws.amazon.com/elasticache/redis-vs-memcached/#Advanced_data_structures) |     -     |  Yes  |
| [Multithreaded architecture](https://aws.amazon.com/elasticache/redis-vs-memcached/#Multithreaded_architecture) |    Yes    |   -   |
| [Snapshots](https://aws.amazon.com/elasticache/redis-vs-memcached/#Snapshots) |     -     |  Yes  |
| [Replication](https://aws.amazon.com/elasticache/redis-vs-memcached/#Replication) |     -     |  Yes  |
| [Transactions](https://aws.amazon.com/elasticache/redis-vs-memcached/#Transactions) |     -     |  Yes  |
| [Pub/Sub](https://aws.amazon.com/elasticache/redis-vs-memcached/#Pub.2FSub) |     -     |  Yes  |
| [Lua scripting](https://aws.amazon.com/elasticache/redis-vs-memcached/#Lua_scripting) |     -     |  Yes  |
| [Geospatial support](https://aws.amazon.com/elasticache/redis-vs-memcached/#Geospatial_support) |     -     |  Yes  |
