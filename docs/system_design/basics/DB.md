---
title: DB
summary: Database
date: 'January 29, 2022'
tags: ['System-Design']
---

Notes from:

[SQL vs. NoSQL Databases: What's the Difference?](https://www.ibm.com/cloud/blog/sql-vs-nosql)

## SQL

### **Pros**

- **Flexible queries:** Enables support for diverse workloads. Abstracts data over underlying implementations and allows engines to optimize queries to fit on-disk representations.
- **Reduced data storage footprint:** Due to normalization and other optimization opportunities, a reduced footprint maximizes database performance and resource usage.
- **Strong and well-understood data integrity semantics:** Atomicity, consistency, isolation and durability, or [ACID](https://www.ibm.com/docs/en/cics-ts/4.2?topic=processing-acid-properties-transactions), are database properties that guarantee valid transactions.

### **Cons**

- **Rigid data models:** Requires careful up-front design to ensure adequate performance and resistance to evolution. SQL has a predefined schema, so changing it often includes downtime.
- **Limited horizontal scalability:** It is either completely unsupported, supported in an ad-hoc way or only supported on relatively immature technologies.
- **Single point of failure:** Non-distributed engines are mitigated by replication and failover techniques.

- [Db2](https://www.ibm.com/products/db2-database)
- [MySQL](https://cloud.ibm.com/catalog/content/mysql)
- [PostgreSQL](https://www.ibm.com/cloud/learn/postgresql)
- [YugabyteDB](https://www.yugabyte.com/)
- [CockroachDB](https://www.ibm.com/blogs/journey-to-ai/2020/01/scale-data-strategies-globally-with-ibm-cloud-pak-for-data-and-cockroachdb/)
- [Oracle Database](https://www.ibm.com/analytics/info/break-free-from-oracle)
- [Microsoft SQL Server](https://www.ibm.com/cloud/blog/sql-server-2017-available-on-ibm-cloud)

## No-SQL(Not only SQL)

( [BigTable](https://static.googleusercontent.com/media/research.google.com/en/archive/bigtable-osdi06.pdf)[ ](https://static.googleusercontent.com/media/research.google.com/en/archive/bigtable-osdi06.pdf)and [Dynamo](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) ) reveals the problem of hotizontal scalability.

### Pros

- **Scalable and highly available:** Many NoSQL databases are designed to support seamless, online horizontal scalability without significant single points of failure.
- **Flexible data models:** Most non-relational systems do not require developers to make up-front commitments to data models. Existing schemas are dynamic, so they can often be changed “on the fly.”
- **Dynamic schema for unstructured data:** Documents can be created without a defined structure first, which enables each to have its own unique structure. Syntax varies per database and fields can be added as you build the document.
- **High performance:** A limited database functionality range (e.g., by relaxing durability guarantees) enables high performance amongst many NoSQL databases.
- **High-level data abstractions:** Beyond the "value in a cell" data model, NoSQL systems provide high-level [APIs](https://www.ibm.com/cloud/learn/api) for powerful data structures. For example, Redis includes a native-sorted set abstraction.

### Cons

- **Vague interpretations of ACID constraints:** Despite the widespread belief that it supports NoSQL systems, ACID interpretations can be too broad to make clear determinations about database semantics.
- **Distributed systems have distributed systems problems:** Though not specific to NoSQL systems, encountering such problems is common amongst NoSQL developers and may require SME troubleshooting. **Write consistency, eventual consistency and sharding**
- **Lack of flexibility in access patterns:** Without the abstraction found in relational databases, the on-disk representation of data leaks into the application's queries and leaves no room for NoSQL engines to optimize queries.

- [Redis](https://www.ibm.com/cloud/learn/redis) - quick access to a key-value store without strong integrity guarantees
- [FaunaDB](https://www.ibm.com/cloud/blog/database-deep-dives-faunadb)
- [CouchDB](https://www.ibm.com/cloud/learn/couchdb)
- [MongoDB](https://www.ibm.com/cloud/learn/mongodb)
- [Cassandra](https://cloud.ibm.com/catalog/content/cassandra)
- [Elasticsearch](https://www.ibm.com/cloud/learn/elasticsearch) -  complex or flexible search across a lot of data