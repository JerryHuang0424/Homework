import numpy as np

def Get_Functions_details(F):
    functions = {
        'F1': (F1, -100, 100, 10),
        'F2': (F2, -100, 100, 10),
        'F3': (F3, -100, 100, 10),
        'F4': (F4, -100, 100, 10),
        'F5': (F5, -100, 100, 10),
        'F6': (F6, -100, 100, 10),
        'F7': (F7, -100, 100, 10),
        'F8': (F8, -100, 100, 10),
        'F9': (F9, -100, 100, 10),
    }

    if F in functions:
        Fobj, LB, UB, Dim = functions[F]
        return LB, UB, Dim, Fobj
    else:
        raise ValueError("Function not recognized.")


def F1(x):
    return np.sum(x**2)

# 2. Schwefel's 2.22 function
def F2(x):
    return np.sum(np.abs(x)) + np.prod(np.abs(x))

# 3. Powell Sum function
def F3(x):
    return np.sum([(i+1) * (x[i] ** 2) for i in range(len(x))])

# 4. Schwefel's 1.2 function
def F4(x):
    return np.sum([np.sum(x[:i+1]) ** 2 for i in range(len(x))])

def F5(x):
    return np.max(np.abs(x))

# 6. Rosenbrock function
def F6(x):
    return np.sum([100 * (x[i+1] - x[i]**2)**2 + (x[i] - 1)**2 for i in range(len(x) - 1)])

# 7. Step function
def F7(x):
    return np.sum((x + 0.5) ** 2)

# 8. Quartic function
def F8(x):
    return np.sum([i * (x[i] ** 4) for i in range(len(x))]) + np.random.uniform(0, 1)

# 9. Zakharov function
def F9(x):
    term1 = np.sum(x**2)
    term2 = np.sum(0.5 * (i+1) * x[i] for i in range(len(x))) ** 2
    term3 = np.sum(0.5 * (i+1) * x[i] for i in range(len(x))) ** 4
    return term1 + term2 + term3