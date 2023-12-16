---
title: Python Build-in
last_update:
  date: 'August 4, 2021'
tags: ['python', 'programming']
summary: 'https://docs.python.org/3/library/stdtypes.html'
---

# Built-in Types

**What are the categories of built-in types?**  

numeric: int, float, complex

```text
abs()
int()
float()
complext()
divmod()
pow()

math.floor(x)
math.ceil(x)
round(x[, n])
```

iterator: `zip`\(_\*iterables_\)

```text
iterator.__iter__()
iterator.__next__()
StopIteration
```

[generator](https://docs.python.org/3/glossary.html#term-generator): A function which returns a [generator iterator](https://docs.python.org/3/glossary.html#term-generator-iterator)

* [yield](https://docs.python.org/3/reference/expressions.html#yieldexpr)

sequence:

* [`list`](https://docs.python.org/3/library/stdtypes.html#list)list comprehension, A.sort\(\) and sorted\(\)
* [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple)
* [`range`](https://docs.python.org/3/library/stdtypes.html#range)

text sequence: class str and string methods

```text
str.count(sub[, start[, end]])
str.encode(encoding="utf-8", errors="strict")
str.find(sub[, start[, end]])
str.format(*args, **kwargs)
str.format_map(mapping)
str.isalnum() if any is true c.isalpha(), c.isdecimal(), c.isdigit(), or c.isnumeric()
str.isspace()
str.istitle()
str.lstrip()
str.rstrip()
str.strip([chars])
str.swapcase()

str.split(sep=None, maxsplit=-1)
str.rsplit(sep=None, maxsplit=-1)
str.removeprefix(prefix, /)
str.removesuffix(suffix, /)
str.startswith(prefix[, start[, end]])

str.partition(sep)
str.rpartition(sep)
str.replace(old, new[, count])
str.lfind(sub[, start[, end]])
str.rfind(sub[, start[, end]])
str.splitlines([keepends])

str.title()
str.translate(table)

str.upper()
str.lower()
```

binary sequence: [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes), [`bytearray`](https://docs.python.org/3/library/stdtypes.html#bytearray), [`memoryview`](https://docs.python.org/3/library/stdtypes.html#memoryview)

set: [`set`](https://docs.python.org/3/library/stdtypes.html#set), [`frozenset`](https://docs.python.org/3/library/stdtypes.html#frozenset)

mapping: [`dict`](https://docs.python.org/3/library/stdtypes.html#dict) and Dictionary view objects

context manager: [`with`](https://docs.python.org/3/reference/compound_stmts.html#with) [generator](https://docs.python.org/3/glossary.html#term-generator)s and the [`contextlib.contextmanager`](https://docs.python.org/3/library/contextlib.html#contextlib.contextmanager)

```text
contextmanager.__enter__()
contextmanager.__exit__(exc_type, exc_val, exc_tb)
```

[Other Built-in Types](https://docs.python.org/3/library/stdtypes.html#other-built-in-types)

* [Modules](https://docs.python.org/3/library/stdtypes.html#modules)
* [Classes and Class Instances](https://docs.python.org/3/library/stdtypes.html#classes-and-class-instances)
* [Functions](https://docs.python.org/3/library/stdtypes.html#functions)
* [Methods](https://docs.python.org/3/library/stdtypes.html#methods)
* [Code Objects](https://docs.python.org/3/library/stdtypes.html#code-objects)
* [Type Objects](https://docs.python.org/3/library/stdtypes.html#type-objects)
* [The Null Object](https://docs.python.org/3/library/stdtypes.html#the-null-object)
* [The Ellipsis Object](https://docs.python.org/3/library/stdtypes.html#the-ellipsis-object)
* [The NotImplemented Object](https://docs.python.org/3/library/stdtypes.html#the-notimplemented-object)
* [Boolean Values](https://docs.python.org/3/library/stdtypes.html#boolean-values)
* [Internal Objects](https://docs.python.org/3/library/stdtypes.html#internal-objects)

[Special Attributes](https://docs.python.org/3/library/stdtypes.html#special-attributes)
