import numpy as np

# Initialization function
def initialization(pop_size, dim, ub, lb):
    return np.random.rand(pop_size, dim) * (ub - lb) + lb

# CEC17 Benchmark functions (F1-F5) and Ackley function
def sphere_func(x):
    return np.sum(x ** 2)

def ellipsoidal_func(x):
    dim = len(x)
    return np.sum([10 ** (6 * i / (dim - 1)) * x[i] ** 2 for i in range(dim)])

def bent_cigar_func(x):
    return x[0] ** 2 + 10 ** 6 * np.sum(x[1:] ** 2)

def discus_func(x):
    return 10 ** 6 * x[0] ** 2 + np.sum(x[1:] ** 2)

def different_powers_func(x):
    dim = len(x)
    return np.sum(np.abs(x) ** (2 + 4 * np.arange(dim) / (dim - 1)))

# Ackley function - difficult to optimize due to multiple local minima
def ackley_func(x):
    dim = len(x)
    return -20 * np.exp(-0.2 * np.sqrt(np.sum(x ** 2) / dim)) - \
           np.exp(np.sum(np.cos(2 * np.pi * x)) / dim) + 20 + np.e

# Wrapper for test functions
def fhd(x, func_num):
    if func_num == 1:
        return sphere_func(x)
    elif func_num == 2:
        return ellipsoidal_func(x)
    elif func_num == 3:
        return bent_cigar_func(x)
    elif func_num == 4:
        return discus_func(x)
    elif func_num == 5:
        return different_powers_func(x)
    elif func_num == 6:
        return ackley_func(x)
    else:
        raise ValueError("Invalid function number")

# CPO main algorithm
def CPO(pop_size, Tmax, ub, lb, dim, func_num):
    Gb_Fit = np.inf
    Gb_Sol = None
    Conv_curve = np.zeros(Tmax)

    N = pop_size
    N_min = 120
    T = 2
    alpha = 0.2
    Tf = 0.8

    X = initialization(pop_size, dim, ub, lb)
    t = 0

    fitness = np.array([fhd(X[i, :], func_num) for i in range(pop_size)])
    Gb_Fit, index = np.min(fitness), np.argmin(fitness)
    Gb_Sol = X[index, :]

    Xp = np.copy(X)
    opt = 0  # Optimal fitness value for minimization problems

    while t < Tmax and Gb_Fit > opt:
        r2 = np.random.rand()
        for i in range(len(X)):
            U1 = np.random.rand(dim) > np.random.rand(dim)
            rand_index1 = np.random.randint(len(X))
            rand_index2 = np.random.randint(len(X))

            if np.random.rand() < np.random.rand():
                if np.random.rand() < np.random.rand():
                    y = (X[i, :] + X[rand_index1, :]) / 2
                    X[i, :] = X[i, :] + np.random.randn(dim) * np.abs(2 * np.random.rand() * Gb_Sol - y)
                else:
                    y = (X[i, :] + X[rand_index1, :]) / 2
                    X[i, :] = U1 * X[i, :] + (1 - U1) * (y + np.random.rand() * (X[rand_index2, :] - X[rand_index1, :]))
            else:
                Yt = 2 * np.random.rand() * (1 - t / Tmax) ** (t / Tmax)
                U2 = np.random.rand(dim) < 0.5
                S = np.random.rand() * U2
                if np.random.rand() < Tf:
                    St = np.exp(fitness[i] / (np.sum(fitness) + np.finfo(float).eps))
                    S = S * Yt * St
                    X[i, :] = (1 - U1) * X[i, :] + U1 * (
                                X[rand_index1, :] + St * (X[rand_index2, :] - X[rand_index1, :]) - S)
                else:
                    Mt = np.exp(fitness[i] / (np.sum(fitness) + np.finfo(float).eps))
                    vt = X[i, :]
                    Vtp = X[rand_index1, :]
                    Ft = np.random.rand(dim) * (Mt * (-vt + Vtp))
                    S = S * Yt * Ft
                    X[i, :] = (Gb_Sol + (alpha * (1 - r2) + r2) * (U2 * Gb_Sol - X[i, :])) - S

            X[i, :] = np.clip(X[i, :], lb, ub)

            nF = fhd(X[i, :], func_num)
            if fitness[i] < nF:
                X[i, :] = Xp[i, :]
            else:
                Xp[i, :] = X[i, :]
                fitness[i] = nF
                if nF <= Gb_Fit:
                    Gb_Sol = X[i, :]
                    Gb_Fit = nF

            if t % 100000 == 0:  # Print every 10000 iterations
                print(f"Iteration {t}, Current Best Fitness: {Gb_Fit:.10e}")

            t += 1
            if t >= Tmax:
                break
            Conv_curve[t - 1] = Gb_Fit

        pop_size = int(N_min + (N - N_min) * (1 - (t % (Tmax // T)) / Tmax / T))

    return Gb_Fit, Gb_Sol, Conv_curve

# Experiment settings
def run_experiments(func_num, dim=30, pop_size=50, Tmax=100000):
    results = []
    for _ in range(30):  # Run each experiment 30 times
        Gb_Fit, Gb_Sol, _ = CPO(pop_size, Tmax, ub=100, lb=-100, dim=dim, func_num=func_num)
        results.append(Gb_Fit)

    avg_fit = np.mean(results)
    std_fit = np.std(results)
    median_fit = np.median(results)
    min_fit = np.min(results)
    max_fit = np.max(results)

    print(f"Function F{func_num}:")
    print(f"  Average Fitness: {avg_fit:.10e}")
    print(f"  Standard Deviation: {std_fit:.10e}")
    print(f"  Median Fitness: {median_fit:.10e}")
    print(f"  Min Fitness: {min_fit:.10e}")
    print(f"  Max Fitness: {max_fit:.10e}")
    print()

# Main testing loop for functions F1-F6 (including Ackley function as F6)
for func_num in range(6, 7):
    run_experiments(func_num)
