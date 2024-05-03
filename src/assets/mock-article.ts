export const mockedArticle = `
# Understanding the Basics of Python Programming

## Introduction
Python is one of the most popular and versatile programming languages today. It is used in web development, data science, artificial intelligence, and more. This article will guide beginners through the basics of Python programming.

## Setting Up Your Python Environment
Before you begin coding, you need to set up your Python environment. Here are the steps:

1. **Download Python**: Go to the [official Python website](https://python.org) and download Python for your operating system.
2. **Install Python**: Run the installer and follow the instructions.
3. **Verify Installation**: Open your command line (cmd on Windows, Terminal on macOS and Linux) and type:
   ~~~bash
   python --version
   ~~~
   This should display the Python version installed.

## Writing Your First Python Script
Let’s write a simple Python script that prints "Hello, World!".

1. Open your favorite text editor or IDE.
2. Create a new file named ~hello_world.py~.
3. Type the following code:
   \`\`\`python
   print("Hello, World!")
   \`\`\`
4. Save the file and run it from your command line:
   ~~~bash
   python hello_world.py
   ~~~
   You should see "Hello, World!" printed on the screen.

## Understanding Python Syntax

### Variables
Variables in Python can be declared without specifying their type and can be reassigned to any other type of value, like so:
~~~python
x = 5
x = "Now I'm a string"
print(x)
~~~

### Functions
Functions in Python are defined using the ~def~ keyword. Here’s a simple function:
~~~python
def greet(name):
    return "Hello, " + name + "!"

print(greet("Alice"))
~~~

### Loops
Python supports several types of loops, but the most common are ~for~ and ~while~.

#### For Loop
~~~python
for i in range(5):
    print(i)
~~~

#### While Loop
~~~python
i = 0
while i < 5:
    print(i)
    i += 1
~~~

## Conclusion
Python is a powerful, readable language ideal for beginners and professionals alike. This tutorial only scratches the surface, but it's enough to get you started on your programming journey.
`
