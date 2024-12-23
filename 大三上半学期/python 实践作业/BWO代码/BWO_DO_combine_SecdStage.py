
import random
import numpy
import math
from solution import solution
import time
import copy


# 种群排序 返回排序后的适应度和顺序
def SortFitness(Fit):
    fitness = numpy.sort(Fit)
    indepos = numpy.argsort(Fit)
    return fitness, indepos


# 根据排序结果对种群位置调整 返回调整后的种群矩阵
def SortPosition(pos, indepos):
    posnew = numpy.zeros(pos.shape)
    for i in range(pos.shape[0]):
        posnew[i, :] = pos[indepos[i], :]
    return posnew

def Bounds(s, Lb, Ub):
    temp = s
    for i in range(len(s)):
        if temp[i] < Lb[i]:
            temp[i] = Lb[i]
        elif temp[i] > Ub[i]:
            temp[i] = Ub[i]

    return temp

def Levy(dim):
    beta = 1.5
    sigma = (
        math.gamma(1 + beta)
        * math.sin(math.pi * beta / 2)
        / (math.gamma((1 + beta) / 2) * beta * 2 ** ((beta - 1) / 2))
    ) ** (1 / beta)
    u = 0.01 * numpy.random.randn(dim) * sigma
    v = numpy.random.randn(dim)
    zz = numpy.power(numpy.absolute(v), (1 / beta))
    step = numpy.divide(u, zz)
    return step

def BWO(objf, lb, ub, dim, SearchAgents_no, Mapos_iter):

    # 最优白鲸
    xposbest = numpy.zeros([1, dim])
    fvalbest = float("inf")

    # 判断是否为向量
    if not isinstance(lb, list):
        # 向量化
        lb = [lb for _ in range(dim)]
        ub = [ub for _ in range(dim)]
    lb = numpy.asarray(lb)
    ub = numpy.asarray(ub)

    # 初始化种群
    pos = numpy.asarray(
        [pos * (ub - lb) + lb for pos in numpy.random.uniform(0, 1, (SearchAgents_no, dim))]
    )
    Newpos = numpy.zeros(pos.shape)
    Newfitness = numpy.zeros([SearchAgents_no, 1])
    fitness = numpy.zeros([SearchAgents_no, 1])

    for i in range(SearchAgents_no):
        fitness[i] = objf(pos[i, :])
    fitness, sortIndepos = SortFitness(fitness)  # 对适应度值排序
    pos = SortPosition(pos, sortIndepos)  # 种群排序
    fvalbest = copy.copy(fitness[0])  # 记录最优适应度值
    xposbest[0, :] = copy.copy(pos[0, :])  # 记录最优解
    # 初始化收敛曲线
    convergence_curve = numpy.zeros(Mapos_iter)

    # 保存结果
    s = solution()

    timerStart = time.time()
    s.startTime = time.strftime("%Y-%m-%d-%H-%M-%S")

    t = 0  # Loop counter

    best_buffer = 0

    output =" "
    # 迭代
    while t < Mapos_iter:

        Newpos = pos
        # 鲸落概率
        WF = 0.1-0.05*((t+1)/Mapos_iter)
        randlist = [random.random() for _ in range(0, SearchAgents_no)]
        kk = numpy.array(randlist)
        kk *= (1 - 0.5 * (t + 1) / Mapos_iter)

        for i in range(0, SearchAgents_no):
            # 平衡因子

            if kk[i] > 0.5:
                # 勘探阶段---游泳
                r1 = random.random()
                r2 = random.random()
                RJ = math.floor(SearchAgents_no * random.random())
                while RJ == i | RJ == SearchAgents_no:
                    RJ = math.floor(SearchAgents_no * random.random())
                if dim <= SearchAgents_no/5:
                    indices = numpy.arange(dim)
                    numpy.random.shuffle(indices)
                    params = [indices[0], indices[1]]
                    Newpos[i, params[0]] = pos[i, params[0]] + (pos[RJ, params[0]] - pos[i, params[1]]) * (
                            r1 + 1) * math.sin(r2 * 2 * math.pi)
                    Newpos[i, params[1]] = pos[i, params[1]] + (pos[RJ, params[0]] - pos[i, params[1]]) * (
                            r1 + 1) * math.cos(r2 * 2 * math.pi)
                else:
                    params = numpy.arange(dim)
                    numpy.random.shuffle(params)
                    for j in range(round(dim/2)):
                        Newpos[i, 2*j-1] = pos[i, params[2*j-1]] + (pos[RJ, params[0]] - pos[i, params[2*j-1]]) * (
                                r1 + 1) * math.sin(r2 * 2 * math.pi)
                        Newpos[i, 2*j] = pos[i, params[2*j]] + (pos[RJ, params[0]] - pos[i, params[2*j]]) * (
                                r1 + 1) * math.cos(r2 * 2 * math.pi)
            else:
                alpha = random.random() * (t / Mapos_iter - 1) ** 2
                bata = numpy.random.normal(loc = 0, scale = 1, size = dim)
                RJ = math.floor(SearchAgents_no * random.random())
                pos_mean = numpy.mean(pos)
                while RJ == i | RJ == SearchAgents_no:
                 RJ = math.floor(SearchAgents_no * random.random())
                Newpos[i,:] = pos[i,:] -alpha * bata *(pos_mean - alpha * bata * pos[i,:])

                # 开发阶段--捕食
                # r3 = random.random()
                # r4 = random.random()
                # C1 = 2*r4*(1-(t + 1) / Mapos_iter)
                # RJ = math.floor(SearchAgents_no * random.random())
                # while RJ == i | RJ == SearchAgents_no:
                #     RJ = math.floor(SearchAgents_no * random.random())
                # LevyFlight = Levy(dim)
                # Newpos[i,:] = r3 * xposbest - r4 * pos[i,:] + C1 * LevyFlight* (pos[RJ,:] - pos[i,:])

            # 结束勘探&开发 对个体进行边界约束及更新
            Newpos[i, :] = Bounds(Newpos[i, :], lb, ub)
            Newfitness[i] = objf(Newpos[i, :])
            if Newfitness[i] < fitness[i]:
                pos[i, :] = Newpos[i, :]
                fitness[i] = Newfitness[i]

        for i in range(SearchAgents_no):
            if kk[i] <= WF:
                RJ = math.floor(SearchAgents_no * random.random())
                while RJ == i | RJ == SearchAgents_no:
                    RJ = math.floor(SearchAgents_no * random.random())
                r5 = random.random()
                r6 = random.random()
                r7 = random.random()
                C2 = 2*SearchAgents_no*WF
                stepsize2 = r7*(ub-lb)*math.exp(-C2*(t+1)/Mapos_iter)
                Newpos[i, :] = (r5*(pos[i,:]-r6*pos[RJ,:])+stepsize2)
                Newpos[i, :] = Bounds(Newpos[i, :], lb, ub)
                if Newfitness[i] < fitness[i]:
                    pos[i, :] = Newpos[i, :]
                    fitness[i] = Newfitness[i]


        # 更新最优解
        fitness, sortIndepos = SortFitness(fitness)  # 对适应度值排序
        pos = SortPosition(pos, sortIndepos)  # 种群排序
        fvalbest1 = copy.copy(fitness[0])  # 记录最优适应度值
        xposbest1 = copy.copy(pos[0, :])   # 记录最优解
        if fvalbest1 < fvalbest:
            fvalbest = fvalbest1
            xposbest = xposbest1.copy()
            best_buffer = t

        convergence_curve[t] = fvalbest
        if t % 1 == 0:
            print(
                [
                    "At iteration {}, the best fitness is {}.".format(str(t), str(fvalbest))  # String Formatting
                ]
            )
            if(t==499):
                print("本次最优解为："+str(fvalbest))
                # print(f"在第{best_buffer}次迭代时找到最优解")
                output = str(fvalbest)
        t = t + 1

    timerEnd = time.time()
    # s.endTime = time.strftime("%Y-%m-%d-%H-%M-%S")
    s.endTime = time.time()
    s.eposecutionTime = timerEnd - timerStart
    s.convergence = convergence_curve
    s.optimizer = "BWO"
    s.objfname = objf.__name__
    s.best = fvalbest
    s.bestIndividual = xposbest
    s.bestTime = best_buffer

    return s

