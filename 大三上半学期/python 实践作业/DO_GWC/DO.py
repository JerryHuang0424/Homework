import numpy as np


def gamma(n):
    # 斯特林公式近似
    if n < 0:
        return np.inf  # 对于负数，返回无穷大
    elif n == 0:
        return np.inf  # 对于零，返回无穷大
    elif n == 1 or n == 2:
        return 1
    else:
        # 斯特林公式
        return np.sqrt(2 * np.pi / n) * (n / np.e) ** n


def initialization(Popsize, Dim, UB, LB):
    # 获取边界数量
    Boundary_no = np.size(UB)

    # 如果所有变量的边界相同
    if Boundary_no == 1:
        Positions = np.random.rand(Popsize, Dim) * (UB - LB) + LB
    else:
        Positions = np.zeros((Popsize, Dim))  # 初始化位置矩阵
        for i in range(Dim):
            ub_i = UB[i]
            lb_i = LB[i]
            Positions[:, i] = np.random.rand(Popsize) * (ub_i - lb_i) + lb_i

    return Positions

def levy(n, m, beta):
    num = gamma(1 + beta) * np.sin(np.pi * beta / 2)
    den = gamma((1 + beta) / 2) * beta * 2 ** ((beta - 1) / 2)
    sigma_u = (num / den) ** (1 / beta)

    u = np.random.normal(0, sigma_u, (n, m))
    v = np.random.normal(0, 1, (n, m))

    z = u / (np.abs(v) ** (1 / beta))
    return z


def do(Popsize, Maxiteration, LB, UB, Dim, Fobj):
    dandelions = initialization(Popsize, Dim, UB, LB)
    dandelionsFitness = np.zeros(Popsize)
    Convergence_curve = np.zeros(Maxiteration)

    for i in range(Popsize):
        dandelionsFitness[i] = Fobj(dandelions[i, :])

    sorted_indexes = np.argsort(dandelionsFitness)
    Best_position = dandelions[sorted_indexes[0], :]
    Best_fitness = dandelionsFitness[sorted_indexes[0]]
    Convergence_curve[0] = Best_fitness
    t = 1

    while t < Maxiteration:
        # Rising stage
        beta = np.random.randn(Popsize, Dim)
        alpha = np.random.rand() * ((1 / Maxiteration ** 2) * t ** 2 - 2 / Maxiteration * t + 1)
        a = -1 / (Maxiteration ** 2 - 2 * Maxiteration + 1)
        b = -2 * a
        c = 1 - a - b
        k = 1 - np.random.rand() * (c + a * t ** 2 + b * t)

        if np.random.randn() < 1.5:
            dandelions_1 = np.zeros_like(dandelions)
            for i in range(Popsize):
                lamb = np.abs(np.random.randn(Dim))
                theta = (2 * np.random.rand() - 1) * np.pi
                row = 1 / np.exp(theta)
                vx = row * np.cos(theta)
                vy = row * np.sin(theta)
                NEW = np.random.rand(Dim) * (UB - LB) + LB
                dandelions_1[i, :] = dandelions[i, :] + alpha * vx * vy * (
                            NEW - dandelions[i, :])  # Replacing lognpdf with a simple adjustment
        else:
            dandelions_1 = dandelions * k

        dandelions = np.clip(dandelions_1, LB, UB)

        # Decline stage
        dandelions_mean = np.mean(dandelions, axis=0)
        dandelions_2 = np.zeros_like(dandelions)
        for i in range(Popsize):
            for j in range(Dim):
                dandelions_2[i, j] = dandelions[i, j] - beta[i, j] * alpha * (
                            dandelions_mean[j] - beta[i, j] * alpha * dandelions[i, j])

        dandelions = np.clip(dandelions_2, LB, UB)

        # Landing stage
        Step_length = levy(Popsize, Dim, 1.5)
        Elite = np.tile(Best_position, (Popsize, 1))
        dandelions_3 = np.zeros_like(dandelions)

        for i in range(Popsize):
            for j in range(Dim):
                dandelions_3[i, j] = Elite[i, j] + Step_length[i, j] * alpha * (
                            Elite[i, j] - dandelions[i, j] * (2 * t / Maxiteration))

        dandelions = np.clip(dandelions_3, LB, UB)

        # Calculate fitness values
        for i in range(Popsize):
            dandelionsFitness[i] = Fobj(dandelions[i, :])

        # Sort dandelion seeds based on fitness
        sorted_indexes = np.argsort(dandelionsFitness)
        dandelions = dandelions[sorted_indexes]
        SortfitbestN = dandelionsFitness[sorted_indexes]

        # Update the best dandelion
        if SortfitbestN[0] < Best_fitness:
            Best_position = dandelions[0, :]
            Best_fitness = SortfitbestN[0]

        Convergence_curve[t] = Best_fitness
        t += 1

    return Best_fitness, Best_position, Convergence_curve


