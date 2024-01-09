---
summary: Consistency, Availability, Partition 
date: 'January 29, 2022'
tags: ['System-Design']
---

# CAP Theorem

[IBM CAP doc](https://www.ibm.com/cloud/learn/cap-theorem)

## 1. Consistency

### Weak consistency

After a W, R may or may not see it: VoIP, video chat, realtime.

Memcached

### Eventual Consistency - Data is replicated asynchronously

Highly available systems with NoSQLDB: after a W, R will eventually see it: Email or DNS.

### Strong consistency - transaction based systems

After W, R will see it: file systems and RDBMSes.

[Google I/O 2009 - Transactions Across Datacenters.. - YouTube](https://www.youtube.com/watch?v=srOgpXECblk)

## 2. Availability

### Fail-over

### Active-passive (master-slave) failover

### Active-active (master-master) failover

Potential data loss

## 3. Replication

[Database.](https://github.com/donnemartin/system-design-primer#database)

[Master-Slave](https://github.com/donnemartin/system-design-primer#master-slave-replication)
[Master-Master](https://github.com/donnemartin/system-design-primer#master-master-replication)

## 4. DBs

DB types:

* CP
* AP
* CA

[System Properties Comparison Cassandra vs. CouchDB vs. MongoDB](https://db-engines.com/en/system/Cassandra%3BCouchDB%3BMongoDB)

[SQL vs. NoSQL Databases: What's the Difference?](https://www.ibm.com/cloud/blog/sql-vs-nosql)

| Name      | Type    | Features                                                     | Tech   |
| --------- | ------- | ------------------------------------------------------------ | ------ |
| MongoDB   | **CP**a | BSON(Binary JSON) doc, single-master arch,  SQL query via Connector | C++    |
| Cassandra | c**AP** | wide-column, master-less arch, repair functionality, SQL-like support | Java   |
| CouchDB   | c**AP** | JSON                                                         | Erlang |
