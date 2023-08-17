---
title: Technology Matrix
summary: Software Engine Technoogy Matrix.
date: 'January 16, 2022'
tags: ['System-Design']
---

## Production Components

![Production System](https://github.com/donnemartin/system-design-primer/blob/master/images/jj3A5N8.png)

| Component                  | 1                                                            | 2                                                            | 3                     |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------- |
| DNS                        | **CoreDNS(2019) - Golang**                                   | BIND - C                                                     |                       |
| CDN                        | [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn) | Cloudflare                                                   | Fastly                |
| Load Balancer              | NGINX - C                                                    | **HAProxy** - C                                              |                       |
| Web Server (reverse proxy) | NGINX - C                                                    | Apache HTTP server - C                                       | Tomcat , Jetty - Java |
| asynchronous task queue    | [Celery](https://www.fatalerrors.org/a/how-to-understand-celery.html) (py) broker with RabbitMQ or Redis |                                                              |                       |
| Message Broker             | RabbitMQ - Erlang                                            | [kafka](https://kafka.apache.org/documentation/) with Zookeeper ([No zookeeper for kafka](https://www.confluent.io/blog/removing-zookeeper-dependency-in-kafka/)) - Java | ZeroMQ - C++          |
| In-Memory cache            | Redis - C                                                    | Hazelcast IMDG - Java                                        |                       |
| Change Data Capture(CDC)   | [debezium](https://debezium.io/documentation/reference/stable/architecture.html) (on top of Kafka) - Java | Apache StreamSets                                            |                       |
| SQL                        | PostgreSQL - C                                               |                                                              |                       |
| NoSQL                      | MongoDB - C++                                                | Cassandra , HBase, Neo4j - Java                              | CouchDB - Erlang      |

## Monitor Components

| Tech type                                     | Name                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| Container orchestration                       | **marathon on mesos vs kubernates**                          |
| System                                        | Ubuntu                                                       |
| Container                                     | docker                                                       |
| Cloud deployment                              | terraform                                                    |
| Cluster coordination service                  | zookeeper, (consul, etcd)                                    |
| collecting, storing, visualizing and alerting | ELK (Elasticsearch / Logstash / Kibana)<br/>TICK (Telegraf/InfluxDB/Chronograf/Kapacitor) |
| distributed real-time computation system      | storm                                                        |
| Request tracing                               | zipkin, jaeger or Opentracing                                |
| observability                                 | [Wavefront](https://docs.wavefront.com/index.html), DataDog, NewRelic |
| API                                           | **[DropWizard](https://www.dropwizard.io/en/latest/) for REST APIs, Graph QL** |
| OLTP                                          | Online transaction processing (OLTP) captures, stores, and processes data from transactions in real time. |
| OLAP                                          | Online analytical processing (OLAP) uses complex queries to analyze aggregated historical data from OLTP systems. |