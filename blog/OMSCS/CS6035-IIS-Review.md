# CS6035 Intro To Info Security

Lectures are optional. This course is projects based: 7 mandatory projects,
1 bonus projects. Overall, this is ha ands-on course. I practiced my skills across various topics
about software securities.

<!--truncate-->

## Projects, score percentage and its spent time

### Man in the Middle 13% - 11 hrs

In this project, we need to analyze the [Wireshark](https://www.wireshark.org/docs/) captured network packages to do [Internet Relay Chat(IRC)](https://datatracker.ietf.org/doc/html/rfc1459) analysis, manually and programatically via [PyShark](https://github.com/KimiNewt/pyshark/), The traffic may involve [TCP](https://www.ietf.org/rfc/rfc793.txt), [DNS](https://www.ietf.org/rfc/rfc1034.txt), [HTTP](https://www.ietf.org/rfc/rfc2616.txt), IRC, etc.

We may use  [CyberChef](https://gchq.github.io/CyberChef/) to decipher some code.

### Database Security 13% - 12 hrs, 5 hrs review lectures

We will analyze SQL injection, Database, Spreadsheet information leak.

### Malware Analysis 13% - 7.5 hrs

Here we analyze various malware reports: including:

- Data obfuscation
- Defense evasion
- Network indicators
- Host based indicators
- Malware family associations
- Data theft and exfiltration
- Persistence mechanisms

### API Security 13% - 8 hrs

We will try to exploit REST API for information. The topics covered:

- [Web-based RESTful http services](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [JSON, XML and Yaml serialization formats](https://en.wikipedia.org/wiki/JSON)
- [Swagger](https://swagger.io/)
- [Postman](https://www.postman.com/)
- [OAUTH based security protocols](https://oauth.net/)
- [JWT security tokens](https://jwt.io/)
- [CORS browser protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### Cryptography 16% - 13 hrs

Using Python to study cryptography and symmetric and asymmetric crypto algorithms.

### Binary Exploitation 16% - 11 hrs

In this project, we're using [C Code](https://en.wikibooks.org/wiki/A_Little_C_Primer) to exploit [C Memory handling with respect to Stack](https://www.youtube.com/watch?v=ZyPH4XzzdTo) , [Heap](https://www.tutorialspoint.com/cprogramming/c_memory_management.htm) via [pwndbg](https://github.com/pwndbg/pwndbg#readme) and [GDB](https://developers.redhat.com/blog/2021/04/30/the-gdb-developers-gnu-debugger-tutorial-part-1-getting-started-with-the-debugger#getting_help_in_gdb) .

Background:

[Binary and Hexadecimal Numbering Systems](https://www.mathsisfun.com/binary-decimal-hexadecimal.html)

[ASCII Text](https://www.techtarget.com/whatis/definition/ASCII-American-Standard-Code-for-Information-Interchange)

[Capture The Flag style competition](https://primer.picoctf.org/)

### Log4Shell 16% - 7 hrs

We're using JNDI/LDAP knowledge in Java and exploit via  

https://github.gatech.edu/pages/cs6035-tools/cs6035-tools.github.io/Projects/Log4Shell/

[[NIST CVE Overview](https://nvd.nist.gov/vuln/detail/CVE-2021-44228)] [[Randori: What is Log4Shell](https://web.archive.org/web/20230608005931/https://www.randori.com/blog/cve-2021-44228/)]

#### Log4Shell Reference Materials

- [General Project Introduction](https://www.youtube.com/watch?v=cmnUOYkI6A4) *This is a general overview. Some details may change each semester (i.e., login credentials)*
- [LDAP server](https://github.com/mbechler/marshalsec) used to run the exploit.
- [Log4JExploit Intro](https://www.lunasec.io/docs/blog/log4j-zero-day/)
- [How Log4Shell Works](https://news.sophos.com/en-us/2021/12/17/inside-the-code-how-the-log4shell-exploit-works/)
- [Log4J Documentation](https://logging.apache.org/log4j/2.x/)
- [Log4Shell Example](https://web.archive.org/web/20220118140106/https://securityblue.team/log4j-hunting-and-indicators/)
- [Helpful Linux Networking Commands](https://javarevisited.blogspot.com/2010/10/basic-networking-commands-in-linuxunix.html)
- [NCAT Command](https://www.linuxtechi.com/nc-ncat-command-examples-linux-systems/)
- [Java Unmarshaller Security](https://github.com/mbechler/marshalsec/blob/master/marshalsec.pdf)
- [A Journey From JNDI/LDAP Manipulation To RCE](https://www.blackhat.com/docs/us-16/materials/us-16-Munoz-A-Journey-From-JNDI-LDAP-Manipulation-To-RCE.pdf)
- [Hands on Introduction to Log4Shell exploit in general (not this project but helpful)](https://www.youtube.com/watch?v=lJeAgQQaDEw)
- If you have no experience in Java, Log4j/logging, RESTful applications, JNDI, LDAP, we **STRONGLY** encourage you to do research into the topics.
- [A Real World Recent Example of This Exploit and Its Dangers](https://www.govtech.com/security/what-missouri-courts-learned-from-a-cyber-attack)

### Machine Learning in Cybersecurity 2.5% - 0.5 hr

#### Learning Goals of this Project

- Learning Basic Pandas Dataframe Manipulations
- Learning more about Machine Learning (ML) Classification models and how they are used in a Cybersecurity Context.
- Learning about basic Data pipelines and Transformations
- Learning how to write and use Unit Tests when developing Python code

------

#### ML Reference Materials

- [NumPy Documentation](https://numpy.org/doc/)
- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Scikit-learn Documentation](https://scikit-learn.org/stable/index.html)
- [Introduction Video](https://youtu.be/kYoQiAamIpQ)
