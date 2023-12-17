---
title: 1.Code
summary:  Code
date: '2021-08-09'
tags: ['DevSecOps']
---

## Problems

How to find cross reference?
How to find issues earlier?
How to use debugger?

## Scanner build

Scan for mistakes, security issues and Vulnerabilities.

## [DevSkim](https://github.com/microsoft/DevSkim)

Performs analysis on the applications and reports the vulnerabilities

## [Automated Code Review](https://en.wikipedia.org/wiki/Automated_code_review)

- [PMD: Finding Common Vulnerabilities](https://pmd.github.io/)
- [DevSkim: Code Security Review](https://github.com/microsoft/DevSkim)
- [FindSecBugs: Securing Java Applications](https://find-sec-bugs.github.io/)

### Resources

[Benefits of Automated Code Review (ACR) over Manual Code Review (MCR)](https://www.codegrip.tech/productivity/manual-vs-automated-code-review/)  

## Sensitive Information Scan

The Sensitive Information Scan (SAS) phase scans the code for sensitive information (e.g. hardcoded password, tokens, secret keys, etc) before pushing the code into code repositories.

- [Trufflehog: Locating Sensitive Information](https://github.com/trufflesecurity/truffleHog)
- [GitSecrets: Finding Hardcoded Credentials](https://github.com/awslabs/git-secrets)
- [Talisman: Pre-Commit Code Scanning](https://github.com/thoughtworks/talisman)

[Using Trufflehog and GitSecrets](https://sweetcode.io/how-use-truffle-hog-git-secrets/)

## Static Application Security Testing
>
> The Static Application Security Testing (SAST) is done to identify the possible vulnerabilities or security issues in non-running source code by using techniques likeTaint Analysis and Data Flow Analysis.

[What is Static Code Analysis?](https://owasp.org/www-community/controls/Static_Code_Analysis)

[What is Taint Analysis?](https://dzone.com/articles/what-is-taint-analysis-and-why-should-i-care)  

[What is Data Flow testing?](https://www.testbytes.net/blog/data-flow-testing)

[More Static Code Analysis techniques](https://www.geeksforgeeks.org/types-of-static-analysis-methods/)  

### Why is it important in DevSecOps?

> The Static Application Security Testing phase can be used to identify security issues. For example, taint analysis can identify the variables that can handle the user input and check if vulnerability like buffer overflow can occur.  

### Tools

- [Flawfinder: Statically Scanning C code](https://github.com/david-a-wheeler/flawfinder)
- [Graudit: Hunting Sensitive Information](https://github.com/wireghoul/graudit)
- [PyCQA Bandit: Scanning Python Code for Issues](https://github.com/PyCQA/bandit)
- [Spotbugs: Finding Bugs in Java Code](https://github.com/spotbugs/spotbugs)
- [SonarQube: Continuous Code Quality Monitoring](https://github.com/SonarSource/sonarqube)
