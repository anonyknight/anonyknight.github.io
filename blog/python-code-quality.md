---
tags: ['programming']
authors: [Dingan]
---
# Python Code Quality

Code quality is essential for software engineering.
In Python community, Python designer generated several PEP(Python Enhancement Proposals).
[Python Code Quality Authority](https://github.com/PyCQA) provided several tools for Python.

<!--truncate-->

Here are the details about what I've learned for this topic.

## Python Designer's view

Python language designer discussed all Python proposals in [PEP](https://peps.python.org/pep-0000/).

These are key PEPs related to Python code quality.

[PEP 20 - The Zen of Python](https://peps.python.org/pep-0020/)

[PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)

[PEP 257 - Docstring Conventions](https://peps.python.org/pep-0257/)

[PEP 482 - Literature Overview for Type Hints](https://peps.python.org/pep-0482/)

[PEP 483 - The Theory of Type Hints](https://peps.python.org/pep-0483/)

[PEP 484 - Type Hints](https://peps.python.org/pep-0484/) : Python 3.5, created 29-Sep-2014

## PEP 8 Code Style

[PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/) covers the following topics:

* [Code Lay-out](https://peps.python.org/pep-0008/#code-lay-out)

* [String Quotes](https://peps.python.org/pep-0008/#string-quotes)
* [Whitespace in Expressions and Statements](https://peps.python.org/pep-0008/#whitespace-in-expressions-and-statements)
* [When to Use Trailing Commas](https://peps.python.org/pep-0008/#when-to-use-trailing-commas)
* [Comments](https://peps.python.org/pep-0008/#comments)
* [Naming Conventions](https://peps.python.org/pep-0008/#naming-conventions)
* [Programming Recommendations](https://peps.python.org/pep-0008/#programming-recommendations)

[Naming Conventions](https://peps.python.org/pep-0008/#naming-conventions) is the biggest part.

[PEP 484](https://peps.python.org/pep-0484/) introduced Type Hints and [PEP 526](https://peps.python.org/pep-0526/) introduced variable annotations.

### Tools Design after PEP8

**[pycodestyle/Pep8](https://github.com/PyCQA/pycodestyle)**  checks the Code style and [autopep8](https://github.com/hhatto/autopep8) can do the formatter.

## PEP 257 Docstring Style

Following [PEP 257 - Docstring Conventions](https://peps.python.org/pep-0257/), we have three different style variations:

* [Google](https://google.github.io/styleguide/pyguide.html) :  recommended by [Khan Academy](https://github.com/Khan/style-guides/blob/master/style/python.md#docstrings) , VS Code [extension](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) can generate docstring.
* [NumPy](https://numpydoc.readthedocs.io/en/latest/format.html) : NumPy, SciPy, and Pandas use it.

* [Sphinx](https://www.sphinx-doc.org/en/master/) : used by [Django](https://docs.djangoproject.com/en/4.0/), [NumPy](https://numpy.org/doc/stable/reference/), [SciPy](https://docs.scipy.org/doc/scipy/reference/), [Scikit-Learn](https://scikit-learn.org/stable/), [Matplotlib](https://matplotlib.org/), most basic docstring format.

Reference: [3 Different Docstring Formats for Python](https://betterprogramming.pub/3-different-docstring-formats-for-python-d27be81e0d68)

[Documenting Python code with Sphinx](https://towardsdatascience.com/documenting-python-code-with-sphinx-554e1d6c4f6d)

[^Google Vs NumPy’s Docstrings:]: *The output for both docstrings looks similar, the main difference between the two styles is that Google uses indentation to separate sections, whereas NumPy uses underlines. NumPy style tends to require more vertical space, whereas Google-style tends to use more horizontal space. Google-style tends to be easier to read for short and simple docstrings, whereas NumPy-style tends to be easier to read for long and in-depth docstrings.*

**[pydocstyle](https://github.com/PyCQA/pydocstyle)** linter was designed to PEP257.

## Linter and Formatter

[Python Linter Comparison 2022: Pylint vs Pyflakes vs Flake8 vs autopep8 vs Bandit vs Prospector vs Pylama vs Pyroma vs Black vs Mypy vs Radon vs mccabe](https://inventwithpython.com/blog/2022/11/19/python-linter-comparison-2022-pylint-vs-pyflakes-vs-flake8-vs-autopep8-vs-bandit-vs-prospector-vs-pylama-vs-pyroma-vs-black-vs-mypy-vs-radon-vs-mccabe/)

The articles mentioned the following:

* ***Type checkers*** verify that your program follows their own type annotations (aka type hints). (Mypy, Pyright, Pyre, Pytype)
* ***Error linters*** point out syntax errors or other code that will result in unhandled exceptions and crashes. (Pylint, Pyflakes, Flake8)
* ***Style linters*** point out issues that don't cause bugs but make the code less readable or are not in line with style guides such as Python's [PEP 8](https://www.python.org/dev/peps/pep-0008/) document. (Pylint, Flake8)
* ***Packaging linters*** point out issues related to packaging your code for distribution on PyPI with properly formatted descriptions, versions, and meta data fields. (Pyroma)
* ***Security linters*** point out possible security vulnerabilities in your code. (Bandit, Dodgy)
* ***Code formatters*** change the style of your code (mostly revolving around proper whitespace) without affecting the behavior of the program. (Black)
* ***Dead code linters*** remove commented-out code from your program, since this practice should be skipped in favor of proper version control. (Vulture, eradicate)
* ***Docstring linters/formatters*** point out (and may correctly format) style issues in docstrings that aren't in line with Python's [PEP 257](https://peps.python.org/pep-0257/) document. (pydocstringformatter, docformatter)
* ***Complexity analyzers*** point out code that is so complex that they can affect readability. (mccabe, Radon)

### Ruff

[Ruff](https://github.com/astral-sh/ruff) can be used to replace
[Flake8](https://pypi.org/project/flake8/) (plus dozens of plugins),
[Black](https://github.com/psf/black),
[isort](https://pypi.org/project/isort/),
[pydocstyle](https://pypi.org/project/pydocstyle/),
[pyupgrade](https://pypi.org/project/pyupgrade/),
[autoflake](https://pypi.org/project/autoflake/), and more,
all while executing tens or hundreds of times faster than any individual tool.
Pylint supports 409 rules compared to  Ruff's 224 rules.

### Pylint

[pylint](https://github.com/pylint-dev/pylint) is a [static code analyser](https://en.wikipedia.org/wiki/Static_code_analysis) to detect issues in code. It uses AST analysis. However, it's fairly slow for the big project. Ruff is working on the project to implement all rules in Pylint:

[Implement Pylint](https://github.com/astral-sh/ruff/issues/970), we can use the following rules to enable

```toml
[tool.pylint]
disable = ["all"]
enable = [
  "abstract-class-instantiated",
  "abstract-method",
  "access-member-before-definition",
  "anomalous-unicode-escape-in-string",
  "arguments-differ",
  "arguments-out-of-order",
  "arguments-renamed",
  "assigning-non-slot",
  "assignment-from-no-return",
  "assignment-from-none",
  "attribute-defined-outside-init",
  "bad-builtin",
  "bad-except-order",
  "bad-exception-cause",
  "bad-file-encoding",
  "bad-indentation",
  "bad-mcs-classmethod-argument",
  "bad-mcs-method-argument",
  "bad-reversed-sequence",
  "bad-staticmethod-argument",
  "bad-super-call",
  "bad-thread-instantiation",
  "catching-non-exception",
  "chained-comparison",
  "class-variable-slots-conflict",
  "compare-to-zero",
  "comparison-with-callable",
  "condition-evals-to-constant",
  "confusing-consecutive-elif",
  "confusing-with-statement",
  "consider-swap-variables",
  "consider-using-assignment-expr",
  "consider-using-augmented-assign",
  "consider-using-dict-items",
  "consider-using-enumerate",
  "consider-using-f-string",
  "consider-using-from-import",
  "consider-using-join",
  "consider-using-max-builtin",
  "consider-using-min-builtin",
  "consider-using-namedtuple-or-dataclass",
  "consider-using-tuple",
  "consider-using-with",
  "cyclic-import",
  "deprecated-argument",
  "deprecated-class",
  "deprecated-decorator",
  "deprecated-method",
  "deprecated-module",
  "deprecated-typing-alias",
  "dict-init-mutate",
  "dict-iter-missing-items",
  "differing-param-doc",
  "differing-type-doc",
  "disallowed-name",
  "duplicate-code",
  "empty-comment",
  "global-at-module-level",
  "global-variable-undefined",
  "import-error",
  "import-private-name",
  "inconsistent-mro",
  "inherit-non-class",
  "invalid-bool-returned",
  "invalid-bytes-returned",
  "invalid-character-carriage-return",
  "invalid-characters-in-docstring",
  "invalid-class-object",
  "invalid-enum-extension",
  "invalid-envvar-value",
  "invalid-format-index",
  "invalid-format-returned",
  "invalid-getnewargs-ex-returned",
  "invalid-getnewargs-returned",
  "invalid-hash-returned",
  "invalid-index-returned",
  "invalid-length-hint-returned",
  "invalid-length-returned",
  "invalid-metaclass",
  "invalid-overridden-method",
  "invalid-repr-returned",
  "invalid-sequence-index",
  "invalid-slice-index",
  "invalid-slice-step",
  "invalid-slots",
  "invalid-slots-object",
  "invalid-star-assignment-target",
  "invalid-str-returned",
  "invalid-unary-operand-type",
  "invalid-unicode-codec",
  "isinstance-second-argument-not-valid-type",
  "logging-format-truncate",
  "logging-unsupported-format",
  "method-cache-max-size-none",
  "method-hidden",
  "misplaced-format-function",
  "missing-any-param-doc",
  "missing-format-attribute",
  "missing-kwoa",
  "missing-param-doc",
  "missing-parentheses-for-call-in-test",
  "missing-raises-doc",
  "missing-return-doc",
  "missing-return-type-doc",
  "missing-timeout",
  "missing-type-doc",
  "missing-yield-doc",
  "missing-yield-type-doc",
  "mixed-line-endings",
  "modified-iterating-dict",
  "modified-iterating-list",
  "modified-iterating-set",
  "multiple-constructor-doc",
  "nan-comparison",
  "no-member",
  "no-name-in-module",
  "no-value-for-parameter",
  "non-iterator-returned",
  "non-parent-init-called",
  "non-str-assignment-to-dunder-name",
  "nonlocal-and-global",
  "not-a-mapping",
  "not-an-iterable",
  "not-async-context-manager",
  "not-callable",
  "not-context-manager",
  "overlapping-except",
  "overridden-final-method",
  "pointless-string-statement",
  "possibly-unused-variable",
  "potential-index-error",
  "preferred-module",
  "raising-bad-type",
  "raising-format-tuple",
  "raising-non-exception",
  "redeclared-assigned-name",
  "redefined-outer-name",
  "redefined-slots-in-subclass",
  "redefined-variable-type",
  "redundant-keyword-arg",
  "redundant-returns-doc",
  "redundant-u-string-prefix",
  "redundant-unittest-assert",
  "redundant-yields-doc",
  "self-cls-assignment",
  "shallow-copy-environ",
  "signature-differs",
  "simplifiable-condition",
  "simplifiable-if-expression",
  "simplifiable-if-statement",
  "simplify-boolean-expression",
  "singledispatch-method",
  "singledispatchmethod-function",
  "star-needs-assignment-target",
  "stop-iteration-return",
  "subclassed-final-class",
  "super-init-not-called",
  "super-without-brackets",
  "superfluous-parens",
  "too-few-public-methods",
  "too-many-ancestors",
  "too-many-function-args",
  "too-many-instance-attributes",
  "too-many-lines",
  "too-many-nested-blocks",
  "too-many-try-statements",
  "trailing-newlines",
  "trailing-whitespace",
  "unbalanced-dict-unpacking",
  "unbalanced-tuple-unpacking",
  "undefined-loop-variable",
  "unexpected-keyword-arg",
  "unexpected-line-ending-format",
  "unhashable-member",
  "unnecessary-dunder-call",
  "unnecessary-ellipsis",
  "unpacking-non-sequence",
  "unreachable",
  "unsubscriptable-object",
  "unsupported-assignment-operation",
  "unsupported-binary-operation",
  "unsupported-delete-operation",
  "unsupported-membership-test",
  "unused-private-member",
  "unused-wildcard-import",
  "use-implicit-booleaness-not-comparison",
  "use-implicit-booleaness-not-len",
  "use-maxsplit-arg",
  "used-before-assignment",
  "useless-param-doc",
  "useless-parent-delegation",
  "useless-type-doc",
  "using-constant-test",
  "using-final-decorator-in-unsupported-version",
  "while-used",
  "wrong-exception-operation",
  "wrong-spelling-in-comment",
  "wrong-spelling-in-docstring",
]
```

## Type Checking

[PEP 484 Type Hints stub files](https://www.python.org/dev/peps/pep-0484) was introduced in 2014.

[PEP 526 - Syntax for Variable Annotations](https://peps.python.org/pep-0526/)

[PEP 560 - Core support for typing module and generic types](https://peps.python.org/pep-0560/)

[PEP 586 - Literal Types](https://peps.python.org/pep-0586/)

[PEP 589 - TypedDict: Type Hints for Dictionaries with a Fixed Set of Keys](https://peps.python.org/pep-0589/)

[PEP 604 - Allow writing union types as X | Y](https://peps.python.org/pep-0604/)

[PEP 692 Using TypedDict for more precise **kwargs typing](https://peps.python.org/pep-0692/)

[4 Python type checkers to keep your code clean](https://www.infoworld.com/article/3575079/4-python-type-checkers-to-keep-your-code-clean.html) did a survey about four different type checking tools.

[Mypy](http://mypy-lang.org/), by Dropbox in 2012, the first static type checking system for Python. Introduced "# type: ignore"

[Pyright](https://github.com/Microsoft/pyright)  by Microsoft, part of [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) and VSCode extension. Can work with pyproject.toml file.

[Pyre](https://pyre-check.org/) by Facebook and Instagram, two tools in one: a type checker (Pyre) and a static code analysis tool (Pysa). It has "infer" command line option to guess about the types used.Pyre will also work with `.pyi`-format stub files.Pysa performs “taint analysis” on code to identify potential security issues

[Pytype](https://google.github.io/pytype/), by Google differs from the likes of Mypy in using inference instead of just type descriptors.

As a VSCode user, I've found [Pyright](https://github.com/Microsoft/pyright)  works great.

### Tools Performance

How can we improve the performance? Can we use Rust Binding Python just like [Ruff](https://github.com/astral-sh/ruff) to boost Pyright performance?
