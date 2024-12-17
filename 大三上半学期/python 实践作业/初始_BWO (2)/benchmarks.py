import numpy
import math

# define the function blocks
def prod(it):
    p = 1
    for n in it:
        p *= n
    return p

def Ufun(x, a, k, m):
    y = k * ((x - a) ** m) * (x > a) + k * ((-x - a) ** m) * (x < (-a))
    return y

# Details of benchmark problems for 9 functions
# Sphere
def F1(x):
    s = numpy.sum(x ** 2)
    return s

# Schwefel's 2.22
def F2(x):
    o = sum(abs(x)) + prod(abs(x))
    return o

# Powell Sum
def F3(x):
    dim = len(x)
    for i in range(1,dim):
        o = numpy.sum(abs(x) ** (i+1))
    return o

# Schwefel's 1.2
def F4(x):
    dim = len(x) + 1
    o = 0
    for i in range(1, dim):
        o = o + (numpy.sum(x[0:i])) ** 2
    return o

# Schewefel`s 2.21
def F5(x):
    o = max(abs(x))
    return o

# Rosenbrock
def F6(x):
    dim = len(x)
    o = numpy.sum(
        100 * (x[1:dim] - (x[0 : dim - 1] ** 2)) ** 2 + (x[0 : dim - 1] - 1) ** 2
    )
    return o

# Step
def F7(x):
    o = numpy.sum(abs((x + 0.5)) ** 2)
    return o

# Quartic
def F8(x):
    dim = len(x)
    w = [i for i in range(len(x))]
    for i in range(0, dim):
        w[i] = i + 1
    o = numpy.sum(w * (x ** 4)) + numpy.random.uniform(0, 1)
    return o

# Zakharov
def F9(x):
    dim = len(x)
    for i in range(0, dim):
        o = numpy.sum(x**2) + (numpy.sum(0.5 * i * x)) ** 2 + (numpy.sum(0.5 * (i + 1) * x)) ** 4
        return o

# dictionaries
def getFunctionDetails(a):
    # name, lb, ub, dim
    param = {
        "F1": ["F1", -100, 100, 10],
        "F2": ["F2", -100, 100, 10],
        "F3": ["F3", -100, 100, 10],
        "F4": ["F4", -100, 100, 10],
        "F5": ["F5", -100, 100, 10],
        "F6": ["F6", -100, 100, 10],
        "F7": ["F7", -100, 100, 10],
        "F8": ["F8", -100, 100, 10],
        "F9": ["F9", -100, 100, 10],
    }
    return param.get(a, "nothing")

# set
def getFunctionSet(function_name):
    # the dictionary that maps function names to function objects
    function_objects = {
        "F1": ["F1", -100, 100, 10],
        "F2": ["F2", -100, 100, 10],
        "F3": ["F3", -100, 100, 10],
        "F4": ["F4", -100, 100, 10],
        "F5": ["F5", -100, 100, 10],
        "F6": ["F6", -100, 100, 10],
        "F7": ["F7", -100, 100, 10],
        "F8": ["F8", -100, 100, 10],
        "F9": ["F9", -100, 100, 10],
    }
    return function_objects.get(function_name, None)