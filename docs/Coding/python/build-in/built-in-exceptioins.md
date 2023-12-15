---
title: Built-in Exceptions
last_update:
  date: 'August 4, 2021'
tags: ['python']
summary: 'https://docs.python.org/3/library/exceptions.html'
---


### [Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)

```text
BaseException
 +-- SystemExit
 +-- KeyboardInterrupt
 +-- GeneratorExit
 +-- Exception
      +-- StopIteration
      +-- StopAsyncIteration
      +-- ArithmeticError
      |    +-- FloatingPointError
      |    +-- OverflowError
      |    +-- ZeroDivisionError
      +-- AssertionError
      +-- AttributeError
      +-- BufferError
      +-- EOFError
      +-- ImportError
      |    +-- ModuleNotFoundError
      +-- LookupError
      |    +-- IndexError
      |    +-- KeyError
      +-- MemoryError
      +-- NameError
      |    +-- UnboundLocalError
      +-- OSError
      |    +-- BlockingIOError
      |    +-- ChildProcessError
      |    +-- ConnectionError
      |    |    +-- BrokenPipeError
      |    |    +-- ConnectionAbortedError
      |    |    +-- ConnectionRefusedError
      |    |    +-- ConnectionResetError
      |    +-- FileExistsError
      |    +-- FileNotFoundError
      |    +-- InterruptedError
      |    +-- IsADirectoryError
      |    +-- NotADirectoryError
      |    +-- PermissionError
      |    +-- ProcessLookupError
      |    +-- TimeoutError
      +-- ReferenceError
      +-- RuntimeError
      |    +-- NotImplementedError
      |    +-- RecursionError
      +-- SyntaxError
      |    +-- IndentationError
      |         +-- TabError
      +-- SystemError
      +-- TypeError
      +-- ValueError
      |    +-- UnicodeError
      |         +-- UnicodeDecodeError
      |         +-- UnicodeEncodeError
      |         +-- UnicodeTranslateError
      +-- Warning
           +-- DeprecationWarning
           +-- PendingDeprecationWarning
           +-- RuntimeWarning
           +-- SyntaxWarning
           +-- UserWarning
           +-- FutureWarning
           +-- ImportWarning
           +-- UnicodeWarning
           +-- BytesWarning
           +-- ResourceWarning
```

[Warning Categories](https://docs.python.org/3/library/warnings.html#warning-categories)

| Class | Description |
| :--- | :--- |
| [`Warning`](https://docs.python.org/3/library/exceptions.html#Warning) | This is the base class of all warning category classes. It is a subclass of [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception). |
| [`UserWarning`](https://docs.python.org/3/library/exceptions.html#UserWarning) | The default category for [`warn()`](https://docs.python.org/3/library/warnings.html#warnings.warn). |
| [`DeprecationWarning`](https://docs.python.org/3/library/exceptions.html#DeprecationWarning) | Base category for warnings about deprecated features when those warnings are intended for other Python developers \(ignored by default, unless triggered by code in `__main__`\). |
| [`SyntaxWarning`](https://docs.python.org/3/library/exceptions.html#SyntaxWarning) | Base category for warnings about dubious syntactic features. |
| [`RuntimeWarning`](https://docs.python.org/3/library/exceptions.html#RuntimeWarning) | Base category for warnings about dubious runtime features. |
| [`FutureWarning`](https://docs.python.org/3/library/exceptions.html#FutureWarning) | Base category for warnings about deprecated features when those warnings are intended for end users of applications that are written in Python. |
| [`PendingDeprecationWarning`](https://docs.python.org/3/library/exceptions.html#PendingDeprecationWarning) | Base category for warnings about features that will be deprecated in the future \(ignored by default\). |
| [`ImportWarning`](https://docs.python.org/3/library/exceptions.html#ImportWarning) | Base category for warnings triggered during the process of importing a module \(ignored by default\). |
| [`UnicodeWarning`](https://docs.python.org/3/library/exceptions.html#UnicodeWarning) | Base category for warnings related to Unicode. |
| [`BytesWarning`](https://docs.python.org/3/library/exceptions.html#BytesWarning) | Base category for warnings related to [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) and [`bytearray`](https://docs.python.org/3/library/stdtypes.html#bytearray). |
| [`ResourceWarning`](https://docs.python.org/3/library/exceptions.html#ResourceWarning) | Base category for warnings related to resource usage. |
